import React, { useEffect, useImperativeHandle, useRef, forwardRef } from 'react';
import gsap from 'gsap';

export interface ColourExplosionHandle {
  triggerBurst: (originX: number, originY: number, onMidpoint?: () => void) => void;
}

interface PixelParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  isStar: boolean;
}

const BURST_COLORS = [
  '#8FD3F4',
  '#C93B43',
  '#E3646A',
  '#F2B705',
  '#74BE59',
  '#2563EB',
  '#FFF8E7',
];

/**
 * Fullscreen canvas pixel-particle burst + radial colour wave overlay.
 * Triggered cleanly from the CLICK ME button's exact viewport position.
 */
export const ColourExplosion = forwardRef<ColourExplosionHandle>((_, ref) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const waveRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useImperativeHandle(ref, () => ({
    triggerBurst(originX: number, originY: number, onMidpoint?: () => void) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        onMidpoint?.();
        return;
      }

      // 1. Radial colour wave originating from button center
      const waveEl = waveRef.current;
      if (waveEl) {
        const maxRadius = Math.hypot(
          Math.max(originX, window.innerWidth - originX),
          Math.max(originY, window.innerHeight - originY)
        );

        gsap.killTweensOf(waveEl);
        gsap.set(waveEl, {
          display: 'block',
          opacity: 0.72,
          clipPath: `circle(0px at ${originX}px ${originY}px)`,
        });

        const tl = gsap.timeline({
          onComplete: () => {
            gsap.set(waveEl, { display: 'none' });
          },
        });

        tl.to(waveEl, {
          clipPath: `circle(${Math.ceil(maxRadius)}px at ${originX}px ${originY}px)`,
          duration: 0.75,
          ease: 'power2.out',
          onStart: () => {
            // Flip world colour slightly into the wave expansion so objects bloom inside the ripple
            setTimeout(() => {
              onMidpoint?.();
            }, 180);
          },
        }).to(waveEl, {
          opacity: 0,
          duration: 0.45,
          ease: 'power2.inOut',
        });
      } else {
        onMidpoint?.();
      }

      // 2. Crisp pixel square & star particle fountain on fixed canvas
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const particles: PixelParticle[] = [];
      const count = 88;
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.35;
        const speed = 3.5 + Math.random() * 11;
        particles.push({
          x: originX,
          y: originY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 3.5,
          size: 5 + Math.floor(Math.random() * 8),
          color: BURST_COLORS[Math.floor(Math.random() * BURST_COLORS.length)],
          alpha: 1,
          isStar: i % 5 === 0,
        });
      }

      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      const tick = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let alive = 0;

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          if (p.alpha <= 0.02) continue;
          alive++;
          p.x += p.vx;
          p.y += p.vy;
          p.vy += 0.24; // pixel gravity
          p.vx *= 0.985;
          p.alpha *= 0.965;

          ctx.globalAlpha = p.alpha;
          ctx.fillStyle = p.color;

          if (p.isStar) {
            const s = Math.round(p.size / 2);
            ctx.fillRect(Math.round(p.x) - s, Math.round(p.y) - 1, p.size, 3);
            ctx.fillRect(Math.round(p.x) - 1, Math.round(p.y) - s, 3, p.size);
          } else {
            ctx.fillRect(Math.round(p.x), Math.round(p.y), p.size, p.size);
          }
        }

        ctx.globalAlpha = 1;

        if (alive > 0) {
          rafRef.current = requestAnimationFrame(tick);
        } else {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          rafRef.current = null;
        }
      };

      rafRef.current = requestAnimationFrame(tick);
    },
  }));

  return (
    <>
      {/* Radial Rainbow-Sky Wave Layer */}
      <div
        ref={waveRef}
        aria-hidden="true"
        className="fixed inset-0 z-50 pointer-events-none hidden"
        style={{
          background:
            'radial-gradient(circle at center, rgba(242,183,5,0.45) 0%, rgba(227,100,106,0.45) 32%, rgba(143,211,244,0.55) 68%, rgba(116,190,89,0.4) 100%)',
        }}
      />

      {/* Crisp Pixel-Square Particle Canvas */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="fixed inset-0 z-50 pointer-events-none"
      />
    </>
  );
});

ColourExplosion.displayName = 'ColourExplosion';
