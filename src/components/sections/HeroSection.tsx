import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowDown, ArrowUpRight, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import {
  PixelCharacter,
  PixelCloud,
  PixelFlower,
  PixelQuestionBlock,
  PixelStar,
} from '../world/PixelSprites';

interface HeroSectionProps {
  isColoured: boolean;
  onTriggerColour: (x: number, y: number) => void;
  onOpenGame: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  isColoured,
  onTriggerColour,
  onOpenGame,
}) => {
  const [collectedStars, setCollectedStars] = useState<number[]>([]);
  const [blockNote, setBlockNote] = useState<string | null>(null);
  const skyLayerRef = useRef<HTMLDivElement | null>(null);
  const clickBtnRef = useRef<HTMLButtonElement | null>(null);
  const characterWrapRef = useRef<HTMLDivElement | null>(null);
  const flowersRef = useRef<HTMLDivElement | null>(null);
  const prevColouredRef = useRef<boolean>(isColoured);

  // Subtle mouse-reactive sky cloud parallax
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!skyLayerRef.current) return;
      const xRatio = (e.clientX / window.innerWidth - 0.5) * 18;
      const yRatio = (e.clientY / window.innerHeight - 0.5) * 10;
      skyLayerRef.current.style.transform = `translate3d(${xRatio.toFixed(1)}px, ${yRatio.toFixed(1)}px, 0)`;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Celebratory character bounce & flower bloom when transitioning Mono -> Colour
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prevColouredRef.current && isColoured && !prefersReducedMotion) {
      if (characterWrapRef.current) {
        gsap.fromTo(
          characterWrapRef.current,
          { y: 0, scale: 1 },
          {
            y: -18,
            scale: 1.05,
            duration: 0.28,
            ease: 'power2.out',
            yoyo: true,
            repeat: 1,
            clearProps: 'transform',
          }
        );
      }

      if (flowersRef.current) {
        const flowers = flowersRef.current.querySelectorAll('.bloom-flower');
        gsap.fromTo(
          flowers,
          { scale: 0.2, y: 12, opacity: 0 },
          {
            scale: 1,
            y: 0,
            opacity: 1,
            duration: 0.55,
            stagger: 0.08,
            ease: 'back.out(2)',
            clearProps: 'transform,opacity',
          }
        );
      }
    }
    prevColouredRef.current = isColoured;
  }, [isColoured]);

  const handleClickMe = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX > 0 ? e.clientX : rect.left + rect.width / 2;
    const y = e.clientY > 0 ? e.clientY : rect.top + rect.height / 2;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion && clickBtnRef.current) {
      gsap.fromTo(
        clickBtnRef.current,
        { scale: 1 },
        { scale: 0.92, duration: 0.1, yoyo: true, repeat: 1, ease: 'power1.inOut' }
      );
    }

    onTriggerColour(x, y);
  };

  const handleToggleStar = (id: number, message: string) => {
    setCollectedStars((prev) => (prev.includes(id) ? prev : [...prev, id]));
    setBlockNote(message);
  };

  return (
    <section
      id="hero"
      className="hero-sky-canvas relative min-h-screen pt-16 flex flex-col justify-between overflow-hidden border-b-2 border-[#1C1B29]"
      style={{
        background: 'linear-gradient(180deg, #7EC8EC 0%, #A5DFF9 52%, #D4F0FC 100%)',
      }}
    >
      {/* Vintage paper halftone dots in monochrome opening */}
      {!isColoured && (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-vintage-dots opacity-55 pointer-events-none"
        />
      )}

      {/* Parallax Sky Clouds */}
      <div
        ref={skyLayerRef}
        className="absolute inset-0 pointer-events-none transition-transform duration-300 ease-out"
        aria-hidden="true"
      >
        <div className="hero-parallax-slow absolute top-20 left-[6%] w-28 sm:w-40 opacity-95 animate-float-slow world-colourable">
          <PixelCloud />
        </div>
        <div className="hero-parallax-fast absolute top-24 right-[8%] w-32 sm:w-44 opacity-90 animate-float-gentle world-colourable">
          <PixelCloud />
        </div>
        <div className="hero-parallax-slow hidden md:block absolute top-48 left-[16%] w-24 opacity-80 animate-float-gentle world-colourable">
          <PixelCloud />
        </div>
      </div>

      {/* Interactive Sky Collectibles (Visible & Playful) */}
      <div className="relative z-20 max-w-6xl w-full mx-auto px-4 sm:px-8 pt-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => handleToggleStar(1, 'Curiosity spark found!')}
            className="group p-1 hover:-translate-y-1 transition-transform cursor-pointer"
            aria-label="Inspect curiosity block"
            title="Click block"
          >
            <PixelQuestionBlock active={collectedStars.includes(1)} className="w-8 h-8 sm:w-9 sm:h-9" />
          </button>

          <button
            type="button"
            onClick={() => handleToggleStar(2, 'Sky star collected!')}
            className="group p-1 hover:-translate-y-1 transition-transform cursor-pointer"
            aria-label="Collect floating star"
            title="Click star"
          >
            <PixelStar
              className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-transform"
              color={collectedStars.includes(2) ? '#C93B43' : '#F2B705'}
            />
          </button>

          {blockNote && (
            <span className="hidden sm:inline-block bg-[#FFF8E7] border-2 border-[#1C1B29] px-3 py-1 font-mono text-xs text-[#1C1B29] shadow-[3px_3px_0_#1C1B29]">
              {blockNote}
            </span>
          )}
        </div>

        <div className="font-mono text-xs font-bold text-[#1C1B29] bg-[#FFF8E7]/95 border-2 border-[#1C1B29] px-3 py-1 shadow-[3px_3px_0_#1C1B29]">
          {isColoured ? `Sparks ${collectedStars.length}/2` : 'World: Monochrome'}
        </div>
      </div>

      {/* Center Stage Illustrated Cloud Mound & Protagonist */}
      <div className="relative z-10 max-w-5xl w-full mx-auto px-4 sm:px-8 pt-6 pb-16 sm:pb-20 flex flex-col items-center text-center">
        {/* Fluffy Cloud Mound Backdrop */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -bottom-6 mx-auto max-w-4xl h-[330px] sm:h-[390px] pointer-events-none flex items-end justify-center opacity-95"
        >
          <svg viewBox="0 0 800 340" className="w-full h-full" preserveAspectRatio="xMidYMax meet">
            <path
              d="M 40 340
                 Q 40 250 130 235
                 Q 150 155 245 160
                 Q 290 60 400 55
                 Q 515 60 560 160
                 Q 655 155 675 235
                 Q 760 250 760 340 Z"
              fill={isColoured ? '#FFF8E7' : '#FFFFFF'}
              stroke="#1C1B29"
              strokeWidth="4"
              className="transition-colors duration-700"
            />
          </svg>
        </div>

        <div className="relative z-20 flex flex-col items-center max-w-3xl">
          {/* Pixel Protagonist with Idle Breathing & Colour Reveal */}
          <div ref={characterWrapRef} className="hero-stagger mb-4 relative inline-flex flex-col items-center">
            <div className="animate-character-idle">
              <PixelCharacter className="w-40 sm:w-48 md:w-52 h-auto drop-shadow-[0_6px_0_rgba(28,27,41,0.16)]" />
            </div>
            {/* Floating turf platform */}
            <div
              aria-hidden="true"
              className={`w-44 sm:w-52 h-4 border-2 border-[#1C1B29] shadow-[3px_3px_0_#1C1B29] relative overflow-hidden -mt-2 transition-colors duration-700 ${
                isColoured ? 'bg-[#74BE59]' : 'bg-[#D6D4CE]'
              }`}
            >
              <div
                className={`absolute inset-x-0 bottom-0 h-1.5 transition-colors duration-700 ${
                  isColoured ? 'bg-[#4B9A4A]' : 'bg-[#A8A59E]'
                }`}
              />
            </div>
          </div>

          {/* Display Title */}
          <h1 className="hero-stagger font-serif font-extrabold text-4xl sm:text-6xl lg:text-[4.75rem] leading-[1.0] tracking-tight text-[#1C1B29] uppercase text-balance">
            {PERSONAL_INFO.name}
          </h1>

          {/* Subtitle */}
          <p
            className={`hero-stagger mt-3 font-mono text-xs sm:text-sm font-bold tracking-wider transition-colors duration-700 ${
              isColoured ? 'text-[#C93B43]' : 'text-[#4D4C60]'
            }`}
          >
            {PERSONAL_INFO.headline}
          </p>

          {/* Opening Intro */}
          <p className="hero-stagger mt-4 font-sans text-base sm:text-lg text-[#1C1B29]/85 max-w-xl leading-relaxed text-balance">
            {PERSONAL_INFO.openingIntro}
          </p>

          {/* Action Zone: Monochrome Opening Button vs Full Colourful Actions */}
          <div className="hero-stagger mt-7 min-h-[92px] flex flex-col items-center justify-center">
            {!isColoured ? (
              <div className="flex flex-col items-center gap-3">
                <button
                  ref={clickBtnRef}
                  type="button"
                  onClick={handleClickMe}
                  className="btn-world px-8 py-3.5 bg-[#1C1B29] hover:bg-[#3A384F] text-[#FAF9F6] font-mono text-sm sm:text-base font-bold tracking-widest cursor-pointer"
                >
                  [ CLICK ME ]
                </button>
                <p className="font-mono text-xs text-[#4D4C60] italic">
                  Something seems to be missing...
                </p>
              </div>
            ) : (
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                <a
                  href="#about"
                  className="btn-world px-5 py-2.5 bg-[#C93B43] hover:bg-[#1C1B29] text-[#FFF8E7] font-sans text-sm font-bold whitespace-nowrap"
                >
                  <span>Explore World</span>
                  <ArrowDown size={15} />
                </a>

                <button
                  type="button"
                  onClick={onOpenGame}
                  className="btn-world px-5 py-2.5 bg-[#F2B705] hover:bg-[#74BE59] text-[#1C1B29] font-mono text-xs sm:text-sm font-bold cursor-pointer whitespace-nowrap"
                >
                  <Heart size={14} className="fill-[#C93B43] text-[#1C1B29]" />
                  <span>PLAY A LITTLE GAME</span>
                </button>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-world px-4 py-2.5 bg-[#FFF8E7] hover:bg-[#8FD3F4] text-[#1C1B29] font-sans text-sm font-bold whitespace-nowrap"
                >
                  <span>GitHub</span>
                  <ArrowUpRight size={14} />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-world px-4 py-2.5 bg-[#FFF8E7] hover:bg-[#D4F0FC] text-[#1C1B29] font-sans text-sm font-bold whitespace-nowrap"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Landscape Hills + Blooming Pixel Flowers */}
      <div className="relative z-10 w-full pointer-events-none select-none" aria-hidden="true">
        {/* Flowers perched along the meadow edge */}
        <div
          ref={flowersRef}
          className="max-w-6xl mx-auto px-6 sm:px-14 flex items-end justify-between -mb-4 relative z-20"
        >
          <div className="flex items-end gap-4 sm:gap-8">
            <PixelFlower className="bloom-flower w-6 h-8 sm:w-7 sm:h-10" petalColor="#E3646A" />
            <PixelFlower className="bloom-flower hidden sm:block w-5 h-7" petalColor="#F2B705" centerColor="#C93B43" />
          </div>
          <div className="flex items-end gap-4 sm:gap-8">
            <PixelFlower className="bloom-flower hidden sm:block w-5 h-7" petalColor="#8FD3F4" centerColor="#F2B705" />
            <PixelFlower className="bloom-flower w-6 h-8 sm:w-7 sm:h-10" petalColor="#C93B43" />
          </div>
        </div>

        {/* Hills transitioning cleanly between Monochrome Ink & Lush Meadow Green */}
        <svg
          viewBox="0 0 1440 90"
          className="w-full h-12 sm:h-16 block world-colourable"
          preserveAspectRatio="none"
        >
          <path
            d="M0 90 L0 52 Q 180 10 380 48 T 780 42 T 1180 54 T 1440 34 L1440 90 Z"
            fill="#74BE59"
            stroke="#1C1B29"
            strokeWidth="3"
          />
          <path
            d="M0 90 L0 68 Q 260 40 520 66 T 1040 58 T 1440 68 L1440 90 Z"
            fill="#4B9A4A"
            stroke="#1C1B29"
            strokeWidth="3"
          />
        </svg>

        <div className="h-4 bg-[#2B6134] border-t-2 border-[#1C1B29] world-colourable" />
      </div>
    </section>
  );
};
