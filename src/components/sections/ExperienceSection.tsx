import React from 'react';
import { EXPERIENCE_ITEMS, PROGRAMS } from '../../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const exp = EXPERIENCE_ITEMS[0];
  const tags = ['AWS', 'CLOUD', 'AI / ML', 'DEVELOPER TOOLS', 'COMMUNITY', 'WORKSHOPS'];

  return (
    <section
      id="experience"
      className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-16 border-b border-[#111111]/15"
    >
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-[#111111]/10 pb-6">
          <div className="flex items-center gap-3 font-mono text-xs text-[#111111]/60">
            <span className="text-[#0047AB] font-bold">05/08</span>
            <span>—</span>
            <span className="uppercase tracking-widest text-[#111111]">LEADERSHIP &amp; COMMUNITY</span>
          </div>
          <span className="font-mono text-xs text-[#111111]/40">
            EXPERIENCE &amp; INITIATIVES
          </span>
        </div>

        {/* =========================================================================
            EXPERIENCE: BEYOND THE CODE
           ========================================================================= */}
        <div className="space-y-12">
          <div className="space-y-4 max-w-3xl">
            <h2 className="font-serif font-black text-4xl sm:text-6xl md:text-7xl leading-tight text-[#111111] tracking-tight">
              BEYOND THE CODE.
            </h2>
            <p className="font-sans text-lg sm:text-xl text-[#111111]/70 font-light">
              Organizing student workshops, technical curriculum drafting, and engineering community operations.
            </p>
          </div>

          {/* Editorial Information System Grid */}
          <div className="p-8 sm:p-12 bg-[#F5F1E8] border border-[#111111]/25 space-y-8">
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 border-b border-[#111111]/15 pb-6">
              <div className="space-y-1">
                <span className="font-mono text-xs text-[#0047AB] font-bold tracking-wider uppercase block">
                  {exp.organization}
                </span>
                <h3 className="font-serif font-black text-3xl sm:text-4xl text-[#111111]">
                  {exp.role}
                </h3>
              </div>
              <div className="font-mono text-xs text-[#111111]/60 md:text-right">
                <span className="block font-bold text-[#111111]">{exp.period}</span>
                <span>{exp.location}</span>
              </div>
            </div>

            <p className="font-sans text-base sm:text-lg text-[#111111]/85 max-w-3xl leading-relaxed">
              "{exp.description}"
            </p>

            {/* Editorial Focus Areas Information Matrix */}
            <div className="pt-6 border-t border-[#111111]/15 space-y-3">
              <span className="font-mono text-[10px] text-[#111111]/50 uppercase tracking-widest block font-bold">
                OPERATIONAL DOMAINS &amp; CURRICULUM:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {tags.map((t) => (
                  <div
                    key={t}
                    className="p-3 bg-white/60 border border-[#111111]/15 font-mono text-xs text-[#111111] font-bold text-center"
                  >
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            PROGRAMS: PLACES I'VE BUILT
           ========================================================================= */}
        <div className="space-y-12 pt-8 border-t border-[#111111]/15">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
            <h3 className="font-serif font-black text-3xl sm:text-5xl text-[#111111] tracking-tight">
              PLACES I'VE BUILT.
            </h3>
            <span className="font-mono text-xs text-[#111111]/40 uppercase">
              HACKATHONS &amp; FELLOWSHIPS
            </span>
          </div>

          {/* Connected Thin Architectural Line Sequence */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {PROGRAMS.map((prog, idx) => (
              <div
                key={prog.id}
                className="p-6 bg-[#F5F1E8] border border-[#111111]/20 flex flex-col justify-between space-y-6 relative group hover:border-[#0047AB] transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-[#111111]/40 border-b border-[#111111]/10 pb-2">
                    <span className="text-[#0047AB] font-bold">0{idx + 1}</span>
                    <span className="uppercase">{prog.category}</span>
                  </div>

                  <h4 className="font-serif font-bold text-xl text-[#111111] group-hover:text-[#0047AB] transition-colors leading-snug">
                    {prog.name}
                  </h4>

                  <p className="font-sans text-xs text-[#111111]/75 leading-relaxed">
                    {prog.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#111111]/10 font-mono text-[10px] uppercase text-[#111111]/50 tracking-wider">
                  [{prog.badgeText}]
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
