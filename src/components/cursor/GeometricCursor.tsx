import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  char: string;
  isCobalt: boolean;
  opacity: number;
  size: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
}

export const GeometricCursor: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isTouch, setIsTouch] = useState<boolean>(false);
  const [isHoveringClickable, setIsHoveringClickable] = useState<boolean>(false);
  const mousePos = useRef<{ x: number; y: number }>({ x: -100, y: -100 });
  const prevMousePos = useRef<{ x: number; y: number }>({ x: -100, y: -100 });
  const particles = useRef<Particle[]>([]);
  const animationFrameId = useRef<number | null>(null);

  // Geometric shapes: black sparkle ✦, cross +, dot •, block ▪, x ✕
  const shapes = ['✦', '•', '+', '▪', '✦', '✕'];

  useEffect(() => {
    // Check touch screen or reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;

    if (prefersReducedMotion || isTouchDevice) {
      setIsTouch(true);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      const dist = Math.hypot(
        e.clientX - prevMousePos.current.x,
        e.clientY - prevMousePos.current.y
      );

      // Only spawn particles if moved enough to avoid overcrowding
      if (dist > 12) {
        prevMousePos.current = { x: e.clientX, y: e.clientY };

        const char = shapes[Math.floor(Math.random() * shapes.length)];
        const maxLife = 26 + Math.random() * 16;

        particles.current.push({
          x: e.clientX + (Math.random() * 10 - 5),
          y: e.clientY + (Math.random() * 10 - 5),
          char,
          isCobalt: false, // Solid crisp black sparkles for maximum visibility
          opacity: 0.95,
          size: char === '✦' ? 12 : char === '+' ? 11 : char === '✕' ? 10 : 8,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4 + 0.1,
          life: maxLife,
          maxLife,
        });

        // Cap maximum particles for silky smooth 60fps performance
        if (particles.current.length > 45) {
          particles.current.shift();
        }
      }

      // Check if hovering clickable
      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable = Boolean(
          target.closest('a, button, input, select, textarea, [role="button"], [data-clickable="true"]')
        );
        setIsHoveringClickable(isClickable);
      }
    };

    const handleClick = (e: MouseEvent) => {
      // 4 to 6 micro particle burst in crisp black
      const burstCount = 4 + Math.floor(Math.random() * 3);
      for (let i = 0; i < burstCount; i++) {
        const angle = (Math.PI * 2 * i) / burstCount + Math.random() * 0.4;
        const speed = 1.4 + Math.random() * 1.6;
        const char = shapes[Math.floor(Math.random() * shapes.length)];
        particles.current.push({
          x: e.clientX,
          y: e.clientY,
          char,
          isCobalt: false,
          opacity: 1.0,
          size: char === '✦' ? 13 : 10,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 30,
          maxLife: 30,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('click', handleClick, { passive: true });

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Render & update particles
      for (let i = particles.current.length - 1; i >= 0; i--) {
        const p = particles.current[i];
        p.life -= 1;
        p.x += p.vx;
        p.y += p.vy;
        p.opacity = p.life / p.maxLife;

        if (p.life <= 0) {
          particles.current.splice(i, 1);
          continue;
        }

        ctx.font = `600 ${p.size}px "Fira Code", monospace`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        // Solid black with smooth graceful fade-out
        ctx.fillStyle = `rgba(17, 17, 17, ${p.opacity * 0.9})`;
        ctx.fillText(p.char, p.x, p.y);
      }

      // Draw subtle precise crosshair / point at current mouse position
      if (mousePos.current.x > 0 && mousePos.current.y > 0) {
        const { x, y } = mousePos.current;

        if (isHoveringClickable) {
          // Subtle cobalt bracketed indicator on hover
          ctx.strokeStyle = 'rgba(0, 71, 171, 0.85)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(x, y, 6, 0, Math.PI * 2);
          ctx.stroke();

          ctx.fillStyle = '#0047AB';
          ctx.fillRect(x - 1, y - 1, 2, 2);
        } else {
          // Minimalist high-contrast black crosshair dot
          ctx.fillStyle = '#111111';
          ctx.fillRect(x - 1, y - 1, 3, 3);
        }
      }

      animationFrameId.current = requestAnimationFrame(render);
    };

    animationFrameId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  if (isTouch) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-50 transition-opacity duration-300"
    />
  );
};
