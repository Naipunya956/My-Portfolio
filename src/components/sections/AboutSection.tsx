import React from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const AboutSection: React.FC = () => {
  const engineeringLoop = [
    'CURIOSITY',
    'EXPERIMENT',
    'BUILD',
    'BREAK',
    'FIX',
    'LEARN',
    'REPEAT',
  ];

  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-16 border-b border-[#111111]/15"
    >
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Section Header with Blueprint Tag */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-[#111111]/10 pb-6">
          <div className="flex items-center gap-3 font-mono text-xs text-[#111111]/60">
            <span className="text-[#0047AB] font-bold">02/08</span>
            <span>—</span>
            <span className="uppercase tracking-widest text-[#111111]">BACKGROUND &amp; CONTEXT</span>
          </div>
          <span className="font-mono text-xs text-[#111111]/40">
            KITW // B.TECH AIML // CGPA: {PERSONAL_INFO.education.cgpa}
          </span>
        </div>

        {/* Large Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Large Narrative Statement */}
          <div className="lg:col-span-8 space-y-8">
            <h2 className="font-serif font-black text-4xl sm:text-6xl md:text-7xl leading-tight text-[#111111] tracking-tight">
              A LITTLE<br />
              CONTEXT.
            </h2>

            <p className="font-sans text-xl sm:text-2xl text-[#111111] leading-relaxed font-light">
              I'm a second-year Artificial Intelligence &amp; Machine Learning undergraduate who learns by building — from AI applications and developer tools to algorithms, technical experiments and everything that breaks before it works.
            </p>

            {/* Academic & Foundation Specs Matrix */}
            <div className="pt-8 border-t border-[#111111]/10 grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-xs">
              <div className="space-y-1">
                <span className="text-[#111111]/40 uppercase text-[10px] block">INSTITUTION</span>
                <p className="text-[#111111] font-semibold leading-snug">
                  Kakatiya Institute of Technology &amp; Science for Women
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-[#111111]/40 uppercase text-[10px] block">DEGREE &amp; TIMELINE</span>
                <p className="text-[#111111] font-semibold">
                  B.Tech AIML (Expected 2029)
                </p>
                <span className="text-[#0047AB] font-bold block">
                  CGPA: 8.7 / 10
                </span>
              </div>

              <div className="space-y-1">
                <span className="text-[#111111]/40 uppercase text-[10px] block">LOCATION &amp; STATUS</span>
                <p className="text-[#111111] font-semibold">
                  India
                </p>
                <span className="text-[#111111]/60 block">
                  Open to Remote Fellowships
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Typographic System Diagram */}
          <div className="lg:col-span-4 p-8 bg-[#F5F1E8] border border-[#111111]/20 relative">
            <div className="font-mono text-[10px] uppercase text-[#111111]/50 tracking-wider mb-6 flex items-center justify-between">
              <span>SYSTEM::LOOP</span>
              <span className="text-[#0047AB] font-bold">STATE_MACHINE</span>
            </div>

            {/* Typographic Flow Diagram without icons */}
            <div className="space-y-2 font-mono text-xs">
              {engineeringLoop.map((step, idx) => {
                const isLast = idx === engineeringLoop.length - 1;
                const isCobalt = step === 'BUILD' || step === 'LEARN';
                return (
                  <div key={step} className="space-y-1">
                    <div className="flex items-center gap-3 py-1">
                      <span className="text-[10px] text-[#111111]/30">0{idx + 1}</span>
                      <span
                        className={`w-1.5 h-1.5 ${
                          isCobalt ? 'bg-[#0047AB]' : 'bg-[#111111]'
                        }`}
                      />
                      <span
                        className={`tracking-widest font-bold ${
                          isCobalt ? 'text-[#0047AB]' : 'text-[#111111]'
                        }`}
                      >
                        {step}
                      </span>
                    </div>

                    {!isLast && (
                      <div className="pl-7 text-[#111111]/30 text-xs font-mono select-none">
                        ↓
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-8 pt-4 border-t border-[#111111]/10 font-mono text-[11px] text-[#111111]/50 leading-normal">
              Continuous empirical refinement through hands-on code execution.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
