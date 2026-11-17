import React, { useState } from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { PixelDeskSetup, PixelFlower, PixelPineTree } from '../world/PixelSprites';

const SCREEN_STATES = [
  'reading papers...',
  'building tools...',
  'testing ML ideas...',
];

export const AboutSection: React.FC = () => {
  const [screenIdx, setScreenIdx] = useState(0);
  const [showGuides, setShowGuides] = useState(false);

  return (
    <section
      id="about"
      className="world-colourable relative py-20 sm:py-24 px-4 sm:px-8 overflow-hidden border-b-2 border-[#1C1B29]"
      style={{
        background: 'linear-gradient(180deg, #9BD97B 0%, #63AF56 42%, #448E46 100%)',
      }}
    >
      <svg
        viewBox="0 0 1440 160"
        className="absolute top-0 left-0 w-full h-24 sm:h-32 pointer-events-none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 0 L1440 0 L1440 60 Q 1120 130 740 70 T 0 95 Z"
          fill="#D4F0FC"
          opacity="0.35"
        />
      </svg>

      {/* Environmental Trees & Flowers */}
      <div className="hidden lg:flex items-end gap-3 absolute bottom-4 left-10 pointer-events-none" aria-hidden="true">
        <PixelPineTree className="w-16 h-24" />
        <PixelFlower className="w-6 h-8" petalColor="#F2B705" centerColor="#C93B43" />
      </div>
      <div className="hidden lg:flex items-end gap-3 absolute bottom-5 right-12 pointer-events-none" aria-hidden="true">
        <PixelFlower className="w-6 h-8" petalColor="#E3646A" />
        <PixelPineTree className="w-20 h-28" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: Dashed Canvas Selection Frame */}
          <div className="lg:col-span-7 reveal-up">
            <div
              className={`relative p-5 sm:p-7 border-2 border-dashed transition-colors ${
                showGuides
                  ? 'border-[#F2B705] bg-[#1C1B29]/10'
                  : 'border-[#2563EB] bg-transparent'
              }`}
            >
              <button
                type="button"
                onClick={() => setShowGuides((prev) => !prev)}
                aria-label="Toggle canvas selection guides"
                title="Toggle canvas frame guides"
                className="absolute -top-2 -left-2 w-4 h-4 bg-[#8FD3F4] border-2 border-[#1C1B29] cursor-pointer hover:bg-[#F2B705]"
              />
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-[#8FD3F4] border-2 border-[#1C1B29]" aria-hidden="true" />
              <span className="absolute -bottom-2 -left-2 w-4 h-4 bg-[#8FD3F4] border-2 border-[#1C1B29]" aria-hidden="true" />
              <span className="absolute -bottom-2 -right-2 w-4 h-4 bg-[#8FD3F4] border-2 border-[#1C1B29]" aria-hidden="true" />

              {showGuides && (
                <div className="mb-3 font-mono text-[11px] font-bold text-[#FFF8E7] bg-[#1C1B29] inline-block px-2.5 py-0.5">
                  canvas_frame · about
                </div>
              )}

              <div className="bg-[#FFF8E7] border-2 border-[#1C1B29] shadow-[7px_7px_0_#1C1B29] p-7 sm:p-10 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-baseline justify-between gap-4 border-b-2 border-[#1C1B29]/15 pb-4 mb-5">
                  <h2 className="font-serif font-extrabold text-3xl sm:text-4xl text-[#C93B43] tracking-tight">
                    About
                  </h2>
                  <span className="font-mono text-xs text-[#4D4C60]">
                    {PERSONAL_INFO.degree}
                  </span>
                </div>

                <p className="font-sans text-lg sm:text-xl text-[#1C1B29] leading-relaxed font-medium">
                  {PERSONAL_INFO.aboutSummary}
                </p>

                <p className="mt-4 font-sans text-sm text-[#4D4C60]">
                  {PERSONAL_INFO.institution}.
                </p>

                <div className="mt-5 pt-4 border-t border-[#1C1B29]/15 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs font-bold text-[#1C1B29]">
                  {PERSONAL_INFO.focusAreas.map((area, idx) => (
                    <React.Fragment key={area}>
                      <span>{area}</span>
                      {idx < PERSONAL_INFO.focusAreas.length - 1 && (
                        <span aria-hidden="true" className="text-[#C93B43]">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Illustrated Pixel Desk Setup */}
          <div className="lg:col-span-5 reveal-up flex flex-col items-center">
            <div className="w-full max-w-sm bg-[#FFF8E7] border-2 border-[#1C1B29] shadow-[6px_6px_0_#1C1B29] p-6 flex flex-col items-center text-center">
              <button
                type="button"
                onClick={() => setScreenIdx((prev) => (prev + 1) % SCREEN_STATES.length)}
                className="group cursor-pointer p-2"
                aria-label="Cycle desk monitor activity"
                title="Click desk monitor"
              >
                <PixelDeskSetup className="w-48 h-36 sm:w-56 sm:h-44 group-hover:scale-[1.03] transition-transform" />
              </button>

              <div className="mt-3 w-full border-t-2 border-[#1C1B29]/15 pt-3 flex items-center justify-between gap-4 font-mono text-xs">
                <span className="text-[#1C1B29] font-bold">
                  {SCREEN_STATES[screenIdx]}
                </span>
                <button
                  type="button"
                  onClick={() => setScreenIdx((prev) => (prev + 1) % SCREEN_STATES.length)}
                  className="text-[#2563EB] hover:text-[#C93B43] font-bold cursor-pointer whitespace-nowrap"
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
