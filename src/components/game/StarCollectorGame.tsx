import React, { useEffect, useRef, useState, useCallback } from 'react';
import { X, RotateCcw, Volume2, VolumeX, Play } from 'lucide-react';

interface StarCollectorGameProps {
  isOpen: boolean;
  onClose: () => void;
}

type GamePhase = 'START' | 'PLAYING' | 'WON';

interface Platform {
  x: number;
  y: number;
  w: number;
  h: number;
  isGround?: boolean;
}

interface StarItem {
  id: number;
  x: number;
  y: number;
  collected: boolean;
  bobOffset: number;
}

interface Obstacle {
  x: number;
  y: number;
  w: number;
  h: number;
}

interface SparkParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  life: number;
}

const CANVAS_W = 760;
const CANVAS_H = 400;
const PLAYER_W = 42;
const PLAYER_H = 54;

const PLATFORMS: Platform[] = [
  { x: 0, y: 344, w: 240, h: 56, isGround: true },
  { x: 270, y: 344, w: 250, h: 56, isGround: true },
  { x: 550, y: 344, w: 210, h: 56, isGround: true },
  { x: 120, y: 270, w: 120, h: 18 },
  { x: 280, y: 214, w: 130, h: 18 },
  { x: 445, y: 162, w: 120, h: 18 },
  { x: 565, y: 238, w: 135, h: 18 },
];

const INITIAL_STARS: Omit<StarItem, 'collected'>[] = [
  { id: 1, x: 180, y: 235, bobOffset: 0 },
  { id: 2, x: 315, y: 178, bobOffset: 1.1 },
  { id: 3, x: 382, y: 178, bobOffset: 2.2 },
  { id: 4, x: 505, y: 126, bobOffset: 0.7 },
  { id: 5, x: 602, y: 202, bobOffset: 1.9 },
  { id: 6, x: 668, y: 202, bobOffset: 2.8 },
  { id: 7, x: 710, y: 306, bobOffset: 1.4 },
];

const OBSTACLES: Obstacle[] = [
  { x: 375, y: 324, w: 24, h: 20 },
  { x: 615, y: 324, w: 24, h: 20 },
];

export const StarCollectorGame: React.FC<StarCollectorGameProps> = ({
  isOpen,
  onClose,
}) => {
  const [phase, setPhase] = useState<GamePhase>('START');
  const [score, setScore] = useState<number>(0);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const spriteRef = useRef<HTMLImageElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const keysRef = useRef<{ left: boolean; right: boolean; jump: boolean }>({
    left: false,
    right: false,
    jump: false,
  });

  const gameRef = useRef<{
    px: number;
    py: number;
    vx: number;
    vy: number;
    facing: 1 | -1;
    onGround: boolean;
    coyoteTimer: number;
    hurtTimer: number;
    stars: StarItem[];
    particles: SparkParticle[];
    frame: number;
  }>({
    px: 48,
    py: 280,
    vx: 0,
    vy: 0,
    facing: 1,
    onGround: false,
    coyoteTimer: 0,
    hurtTimer: 0,
    stars: INITIAL_STARS.map((s) => ({ ...s, collected: false })),
    particles: [],
    frame: 0,
  });

  const playTone = useCallback(
    (freq: number, duration = 0.1, type: OscillatorType = 'triangle', delay = 0) => {
      if (!soundEnabled) return;
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (!AudioCtx) return;
        if (!audioCtxRef.current) {
          audioCtxRef.current = new AudioCtx();
        }
        const ctx = audioCtxRef.current;
        if (ctx.state === 'suspended') {
          ctx.resume().catch(() => {});
        }
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, ctx.currentTime + delay);
        gain.gain.setValueAtTime(0.08, ctx.currentTime + delay);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + duration);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + delay);
        osc.stop(ctx.currentTime + delay + duration);
      } catch {
        // Ignore audio errors when autoplay policy restricts context
      }
    },
    [soundEnabled]
  );

  const resetWorld = useCallback(() => {
    gameRef.current = {
      px: 48,
      py: 280,
      vx: 0,
      vy: 0,
      facing: 1,
      onGround: false,
      coyoteTimer: 0,
      hurtTimer: 0,
      stars: INITIAL_STARS.map((s) => ({ ...s, collected: false })),
      particles: [],
      frame: 0,
    };
    setScore(0);
  }, []);

  const startGame = useCallback(() => {
    resetWorld();
    setPhase('PLAYING');
    playTone(523.25, 0.08);
    playTone(659.25, 0.1, 'triangle', 0.08);
  }, [resetWorld, playTone]);

  // Preload pixel character sprite
  useEffect(() => {
    const img = new Image();
    img.src = '/assets/aistudio/pixel_character.png';
    img.onload = () => {
      spriteRef.current = img;
    };
  }, []);

  // Lock body scroll & bind Escape/Arrow/WASD controls while game modal is open
  useEffect(() => {
    if (!isOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', ' '].includes(e.key)) {
        e.preventDefault();
      }
      const k = e.key.toLowerCase();
      if (e.key === 'ArrowLeft' || k === 'a') keysRef.current.left = true;
      if (e.key === 'ArrowRight' || k === 'd') keysRef.current.right = true;
      if (e.key === 'ArrowUp' || k === 'w' || e.key === ' ') keysRef.current.jump = true;
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase();
      if (e.key === 'ArrowLeft' || k === 'a') keysRef.current.left = false;
      if (e.key === 'ArrowRight' || k === 'd') keysRef.current.right = false;
      if (e.key === 'ArrowUp' || k === 'w' || e.key === ' ') keysRef.current.jump = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      document.body.style.overflow = prevOverflow;
      keysRef.current = { left: false, right: false, jump: false };
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [isOpen, onClose]);

  // Main 60fps Canvas Loop
  useEffect(() => {
    if (!isOpen) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rafId = 0;

    const drawBackdrop = (frame: number) => {
      const grad = ctx.createLinearGradient(0, 0, 0, CANVAS_H);
      grad.addColorStop(0, '#7EC8EC');
      grad.addColorStop(0.65, '#B7E7FB');
      grad.addColorStop(1, '#E6F7FE');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);

      // Rolling distant hills
      ctx.fillStyle = '#9BD97B';
      ctx.beginPath();
      ctx.moveTo(0, 344);
      ctx.quadraticCurveTo(160, 275, 340, 344);
      ctx.quadraticCurveTo(540, 268, 760, 344);
      ctx.lineTo(760, 400);
      ctx.lineTo(0, 400);
      ctx.fill();

      // Gentle drifting pixel clouds
      const cloudPositions = [
        ((70 + frame * 0.18) % (CANVAS_W + 120)) - 80,
        ((330 + frame * 0.12) % (CANVAS_W + 120)) - 80,
        ((590 + frame * 0.22) % (CANVAS_W + 120)) - 80,
      ];
      cloudPositions.forEach((cx, idx) => {
        const cy = idx === 1 ? 52 : 76;
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(Math.round(cx) + 12, cy, 42, 14);
        ctx.fillRect(Math.round(cx), cy + 10, 68, 16);
        ctx.fillStyle = '#D4F0FC';
        ctx.fillRect(Math.round(cx) + 4, cy + 22, 60, 4);
      });
    };

    const drawPlatforms = () => {
      PLATFORMS.forEach((p) => {
        if (p.isGround) {
          ctx.fillStyle = '#5C3D2E';
          ctx.fillRect(p.x, p.y + 10, p.w, p.h - 10);
          ctx.fillStyle = '#74BE59';
          ctx.fillRect(p.x, p.y, p.w, 12);
          ctx.fillStyle = '#4B9A4A';
          ctx.fillRect(p.x, p.y + 8, p.w, 4);
        } else {
          ctx.fillStyle = '#FFF8E7';
          ctx.fillRect(p.x, p.y, p.w, p.h);
          ctx.fillStyle = '#74BE59';
          ctx.fillRect(p.x, p.y, p.w, 6);
        }
        ctx.strokeStyle = '#1C1B29';
        ctx.lineWidth = 2;
        ctx.strokeRect(p.x, p.y, p.w, p.h);
      });

      // Destination cozy signpost/flag on far right
      ctx.fillStyle = '#1C1B29';
      ctx.fillRect(726, 286, 4, 58);
      ctx.fillStyle = '#C93B43';
      ctx.fillRect(730, 288, 20, 14);
      ctx.fillStyle = '#F2B705';
      ctx.fillRect(736, 293, 6, 4);
    };

    const drawObstacles = () => {
      OBSTACLES.forEach((o) => {
        // Pixel traffic cone / thorny briar
        ctx.fillStyle = '#C93B43';
        ctx.beginPath();
        ctx.moveTo(o.x, o.y + o.h);
        ctx.lineTo(o.x + o.w / 2, o.y);
        ctx.lineTo(o.x + o.w, o.y + o.h);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = '#1C1B29';
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.fillStyle = '#FFF8E7';
        ctx.fillRect(o.x + 6, o.y + 10, o.w - 12, 4);
      });
    };

    const drawStars = (stars: StarItem[], frame: number) => {
      stars.forEach((s) => {
        if (s.collected) return;
        const bobY = s.y + Math.sin(frame * 0.08 + s.bobOffset) * 4;
        const sx = Math.round(s.x);
        const sy = Math.round(bobY);

        // Crisp 4-point pixel star with ink outline
        ctx.fillStyle = '#1C1B29';
        ctx.fillRect(sx - 3, sy - 11, 6, 22);
        ctx.fillRect(sx - 11, sy - 3, 22, 6);
        ctx.fillRect(sx - 7, sy - 7, 14, 14);

        ctx.fillStyle = '#F2B705';
        ctx.fillRect(sx - 2, sy - 9, 4, 18);
        ctx.fillRect(sx - 9, sy - 2, 18, 4);
        ctx.fillRect(sx - 5, sy - 5, 10, 10);

        ctx.fillStyle = '#FFF8E7';
        ctx.fillRect(sx - 2, sy - 2, 4, 4);
      });
    };

    const drawPlayer = (
      px: number,
      py: number,
      facing: 1 | -1,
      hurtTimer: number
    ) => {
      if (hurtTimer > 0 && Math.floor(hurtTimer / 4) % 2 === 0) return;

      ctx.save();
      ctx.imageSmoothingEnabled = false;
      const centerX = px + PLAYER_W / 2;
      ctx.translate(centerX, py);
      ctx.scale(facing, 1);

      if (spriteRef.current) {
        ctx.drawImage(spriteRef.current, -PLAYER_W / 2, 0, PLAYER_W, PLAYER_H);
      } else {
        // Fallback crisp pixel rectangle hero while sprite loads
        ctx.fillStyle = '#2563EB';
        ctx.fillRect(-14, 16, 28, 24);
        ctx.fillStyle = '#D9A077';
        ctx.fillRect(-10, 2, 20, 14);
      }
      ctx.restore();
    };

    const loop = () => {
      const g = gameRef.current;
      g.frame += 1;

      if (phase === 'PLAYING') {
        if (g.hurtTimer > 0) g.hurtTimer -= 1;

        // Horizontal movement
        const moveSpeed = 4.2;
        if (keysRef.current.left) {
          g.vx = -moveSpeed;
          g.facing = -1;
        } else if (keysRef.current.right) {
          g.vx = moveSpeed;
          g.facing = 1;
        } else {
          g.vx *= 0.72;
          if (Math.abs(g.vx) < 0.2) g.vx = 0;
        }

        // Coyote jump window
        if (g.onGround) {
          g.coyoteTimer = 7;
        } else if (g.coyoteTimer > 0) {
          g.coyoteTimer -= 1;
        }

        if (keysRef.current.jump && g.coyoteTimer > 0) {
          g.vy = -11.9;
          g.onGround = false;
          g.coyoteTimer = 0;
          playTone(392, 0.08, 'square');
        }

        // Apply gravity
        g.vy = Math.min(g.vy + 0.56, 13);

        // Move X & clamp screen bounds
        g.px = Math.max(0, Math.min(CANVAS_W - PLAYER_W, g.px + g.vx));

        // Move Y & resolve platform landings (one-way upper platforms, solid ground)
        const prevBottom = g.py + PLAYER_H;
        g.py += g.vy;
        g.onGround = false;

        for (const p of PLATFORMS) {
          const overlapsX = g.px + PLAYER_W - 8 > p.x && g.px + 8 < p.x + p.w;
          if (!overlapsX) continue;

          if (g.vy >= 0 && prevBottom <= p.y + 8 && g.py + PLAYER_H >= p.y) {
            g.py = p.y - PLAYER_H;
            g.vy = 0;
            g.onGround = true;
          }
        }

        // Respawn gently if fallen into sky gap
        if (g.py > CANVAS_H + 40) {
          g.px = 48;
          g.py = 270;
          g.vx = 0;
          g.vy = 0;
          playTone(220, 0.14, 'sawtooth');
        }

        // Obstacle collision (friendly bump back)
        if (g.hurtTimer === 0) {
          for (const o of OBSTACLES) {
            const hit =
              g.px + PLAYER_W - 10 > o.x &&
              g.px + 10 < o.x + o.w &&
              g.py + PLAYER_H > o.y + 4 &&
              g.py < o.y + o.h;
            if (hit) {
              g.hurtTimer = 36;
              g.vy = -6.5;
              g.vx = g.px < o.x ? -5 : 5;
              playTone(196, 0.12, 'sawtooth');
            }
          }
        }

        // Star collection
        let collectedNow = 0;
        for (const s of g.stars) {
          if (s.collected) {
            collectedNow += 1;
            continue;
          }
          const dx = g.px + PLAYER_W / 2 - s.x;
          const dy = g.py + PLAYER_H / 2 - s.y;
          if (Math.hypot(dx, dy) < 28) {
            s.collected = true;
            collectedNow += 1;
            setScore(collectedNow);

            // Spawn pixel burst at star
            const colors = ['#F2B705', '#FFF8E7', '#8FD3F4', '#C93B43'];
            for (let i = 0; i < 12; i++) {
              const ang = (Math.PI * 2 * i) / 12;
              g.particles.push({
                x: s.x,
                y: s.y,
                vx: Math.cos(ang) * (2 + Math.random() * 2.5),
                vy: Math.sin(ang) * (2 + Math.random() * 2.5),
                color: colors[i % colors.length],
                life: 24,
              });
            }

            playTone(659.25, 0.08);
            playTone(880, 0.12, 'triangle', 0.06);

            if (collectedNow === INITIAL_STARS.length) {
              playTone(523.25, 0.1, 'triangle', 0.05);
              playTone(659.25, 0.1, 'triangle', 0.15);
              playTone(783.99, 0.12, 'triangle', 0.25);
              playTone(1046.5, 0.24, 'triangle', 0.37);
              setPhase('WON');
            }
          }
        }

        // Update particles
        for (let i = g.particles.length - 1; i >= 0; i--) {
          const p = g.particles[i];
          p.x += p.vx;
          p.y += p.vy;
          p.life -= 1;
          if (p.life <= 0) g.particles.splice(i, 1);
        }
      }

      // Draw frame
      ctx.clearRect(0, 0, CANVAS_W, CANVAS_H);
      drawBackdrop(g.frame);
      drawPlatforms();
      drawObstacles();
      drawStars(g.stars, g.frame);
      drawPlayer(g.px, g.py, g.facing, g.hurtTimer);

      // Draw spark particles
      g.particles.forEach((p) => {
        ctx.globalAlpha = Math.max(0, p.life / 24);
        ctx.fillStyle = p.color;
        ctx.fillRect(Math.round(p.x), Math.round(p.y), 5, 5);
      });
      ctx.globalAlpha = 1;

      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId);
  }, [isOpen, phase, playTone]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Star Collector mini-game"
      className="fixed inset-0 z-50 bg-[#1C1B29]/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
    >
      <div className="w-full max-w-4xl bg-[#FFF8E7] border-2 border-[#1C1B29] shadow-[8px_8px_0_#1C1B29] overflow-hidden">
        {/* Top Game HUD Bar */}
        <div className="bg-[#8FD3F4] border-b-2 border-[#1C1B29] px-4 py-2.5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs sm:text-sm font-bold text-[#1C1B29]">
              STAR COLLECTOR
            </span>
            <span className="font-mono text-xs font-bold bg-[#FFF8E7] border-2 border-[#1C1B29] px-2.5 py-0.5 text-[#1C1B29]">
              Stars: {score} / {INITIAL_STARS.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setSoundEnabled((prev) => !prev)}
              aria-label={soundEnabled ? 'Mute sound effects' : 'Enable sound effects'}
              className="p-1.5 bg-[#FFF8E7] border-2 border-[#1C1B29] text-[#1C1B29] hover:bg-[#F2B705] cursor-pointer"
            >
              {soundEnabled ? <Volume2 size={15} /> : <VolumeX size={15} />}
            </button>

            <button
              type="button"
              onClick={startGame}
              className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#FFF8E7] border-2 border-[#1C1B29] font-mono text-xs font-bold text-[#1C1B29] hover:bg-[#F2B705] cursor-pointer"
            >
              <RotateCcw size={13} />
              <span className="hidden sm:inline">Restart</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#C93B43] border-2 border-[#1C1B29] font-mono text-xs font-bold text-[#FFF8E7] hover:bg-[#1C1B29] cursor-pointer"
            >
              <X size={14} />
              <span>Exit</span>
            </button>
          </div>
        </div>

        {/* Game Viewport */}
        <div className="relative bg-[#7EC8EC]">
          <canvas
            ref={canvasRef}
            width={CANVAS_W}
            height={CANVAS_H}
            className="w-full aspect-[19/10] block"
          />

          {/* Start Overlay */}
          {phase === 'START' && (
            <div className="absolute inset-0 bg-[#1C1B29]/55 flex items-center justify-center p-4">
              <div className="bg-[#FFF8E7] border-2 border-[#1C1B29] shadow-[6px_6px_0_#1C1B29] p-6 sm:p-8 max-w-md w-full text-center space-y-5">
                <h3 className="font-serif font-extrabold text-3xl text-[#1C1B29]">
                  STAR COLLECTOR
                </h3>
                <p className="font-sans text-sm sm:text-base text-[#4D4C60]">
                  Collect all 7 floating stars across the platforms and avoid the cones.
                </p>
                <div className="font-mono text-xs text-[#1C1B29] bg-[#FAF5E6] border border-[#1C1B29]/20 p-3 space-y-1">
                  <p>Move: Arrow Keys or A / D</p>
                  <p>Jump: Space, W, or Up Arrow</p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
                  <button
                    type="button"
                    onClick={startGame}
                    className="btn-world px-6 py-2.5 bg-[#F2B705] hover:bg-[#C93B43] hover:text-[#FFF8E7] text-[#1C1B29] font-sans text-sm font-bold cursor-pointer"
                  >
                    <Play size={15} />
                    <span>Start Game</span>
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="btn-world px-5 py-2.5 bg-[#FFF8E7] text-[#1C1B29] font-sans text-sm font-bold cursor-pointer"
                  >
                    Exit
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Win Overlay */}
          {phase === 'WON' && (
            <div className="absolute inset-0 bg-[#1C1B29]/55 flex items-center justify-center p-4">
              <div className="bg-[#FFF8E7] border-2 border-[#1C1B29] shadow-[6px_6px_0_#1C1B29] p-6 sm:p-8 max-w-md w-full text-center space-y-4">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#C93B43]">
                  7 / 7 Stars Collected
                </span>
                <h3 className="font-serif font-extrabold text-2xl sm:text-3xl text-[#1C1B29]">
                  YOU FOUND ALL THE STARS!
                </h3>
                <p className="font-sans text-base text-[#1C1B29]">
                  Thanks for exploring my little world. ♡
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={startGame}
                    className="btn-world px-5 py-2.5 bg-[#F2B705] hover:bg-[#74BE59] text-[#1C1B29] font-sans text-sm font-bold cursor-pointer"
                  >
                    <RotateCcw size={15} />
                    <span>Replay</span>
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="btn-world px-5 py-2.5 bg-[#1C1B29] text-[#FFF8E7] font-sans text-sm font-bold cursor-pointer"
                  >
                    Exit
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Touch & Mobile Controls Strip */}
        <div className="bg-[#FAF5E6] border-t-2 border-[#1C1B29] px-4 py-3 flex items-center justify-between gap-4 select-none">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onPointerDown={() => { keysRef.current.left = true; }}
              onPointerUp={() => { keysRef.current.left = false; }}
              onPointerLeave={() => { keysRef.current.left = false; }}
              onPointerCancel={() => { keysRef.current.left = false; }}
              aria-label="Move left"
              className="w-12 h-11 bg-[#FFF8E7] active:bg-[#8FD3F4] border-2 border-[#1C1B29] shadow-[2px_2px_0_#1C1B29] font-mono text-base font-bold text-[#1C1B29] touch-none cursor-pointer"
            >
              ◀
            </button>
            <button
              type="button"
              onPointerDown={() => { keysRef.current.right = true; }}
              onPointerUp={() => { keysRef.current.right = false; }}
              onPointerLeave={() => { keysRef.current.right = false; }}
              onPointerCancel={() => { keysRef.current.right = false; }}
              aria-label="Move right"
              className="w-12 h-11 bg-[#FFF8E7] active:bg-[#8FD3F4] border-2 border-[#1C1B29] shadow-[2px_2px_0_#1C1B29] font-mono text-base font-bold text-[#1C1B29] touch-none cursor-pointer"
            >
              ▶
            </button>
          </div>

          <span className="hidden md:inline font-mono text-xs text-[#4D4C60]">
            Arrows / WASD to move · Space to jump
          </span>

          <button
            type="button"
            onPointerDown={() => { keysRef.current.jump = true; }}
            onPointerUp={() => { keysRef.current.jump = false; }}
            onPointerLeave={() => { keysRef.current.jump = false; }}
            onPointerCancel={() => { keysRef.current.jump = false; }}
            aria-label="Jump"
            className="px-5 h-11 bg-[#F2B705] active:bg-[#C93B43] active:text-[#FFF8E7] border-2 border-[#1C1B29] shadow-[2px_2px_0_#1C1B29] font-mono text-xs font-bold text-[#1C1B29] touch-none cursor-pointer"
          >
            JUMP ▲
          </button>
        </div>
      </div>
    </div>
  );
};
