import React from 'react';

export const JourneySection: React.FC = () => {
  const milestones = [
    {
      year: '2025',
      title: 'Machine Learning exploration',
      detail: 'Started B.Tech AIML at KITW (8.7 CGPA). Deep-dived into CS foundations, algorithms, and AI theory.',
      isCurrent: false,
    },
    {
      year: '2026',
      title: 'Global Hack Week',
      detail: 'Major League Hacking initiative — shipping rapid technical prototypes and collaborating with international developers.',
      isCurrent: false,
    },
    {
      year: '2026',
      title: 'Girls Who Yap Fellowship',
      detail: 'Technical discussions, peer engineering mentorship, and collaborative problem solving for women in tech.',
      isCurrent: false,
    },
    {
      year: '2026',
      title: 'AWS Student Builder Group',
      detail: 'Content & Operations Lead — organizing cloud workshops, curriculum, and hands-on AWS labs at KITW.',
      isCurrent: false,
    },
    {
      year: '2026',
      title: 'Projects + Research',
      detail: 'Published research papers on Zenodo (DOIs: 10.5281/zenodo.21757843 · 10.5281/zenodo.19649379 · 10.5281/zenodo.16963924) and built PyCraft & Pocket Cheerleader.',
      isCurrent: false,
    },
    {
      year: 'NOW',
      title: 'Still building.',
      detail: 'Targeting high-impact open source contributions, production-grade agentic systems, and learning one project at a time.',
      isCurrent: true,
    },
  ];

  return (
    <section
      id="journey"
      className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-16 border-b border-[#111111]/15"
    >
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-[#111111]/10 pb-6">
          <div className="flex items-center gap-3 font-mono text-xs text-[#111111]/60">
            <span className="text-[#0047AB] font-bold">07/08</span>
            <span>—</span>
            <span className="uppercase tracking-widest text-[#111111]">CHRONOLOGY &amp; PROGRESSION</span>
          </div>
          <span className="font-mono text-xs text-[#111111]/40">
            HORIZONTAL SEQUENCE // 2025–PRESENT
          </span>
        </div>

        {/* Section Title */}
        <div className="space-y-4 max-w-3xl">
          <h2 className="font-serif font-black text-4xl sm:text-6xl md:text-7xl leading-tight text-[#111111] tracking-tight">
            SO FAR.
          </h2>
          <p className="font-sans text-lg sm:text-xl text-[#111111]/70 font-light">
            A single continuous timeline of technical explorations, hackathons, and systems built.
          </p>
        </div>

        {/* Desktop Horizontal Editorial Sequence / Mobile Vertical Sequence */}
        <div className="relative pt-6">
          {/* Thin Horizontal Black Guide Line (Desktop) */}
          <div className="hidden lg:block absolute top-[58px] left-0 right-0 h-[1px] bg-[#111111]/20 z-0" />

          {/* Grid of Milestones */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#F5F1E8] border border-[#111111]/20 lg:border-none lg:p-0 space-y-4 relative flex flex-col justify-between"
              >
                {/* Timeline Node */}
                <div className="flex items-center gap-3">
                  <div
                    className={`w-3 h-3 ${
                      m.isCurrent ? 'bg-[#0047AB] ring-4 ring-[#DCE7F5]' : 'bg-[#111111]'
                    }`}
                  />
                  <span
                    className={`font-mono text-sm font-bold tracking-wider ${
                      m.isCurrent ? 'text-[#0047AB]' : 'text-[#111111]'
                    }`}
                  >
                    {m.year}
                  </span>
                </div>

                <div className="space-y-2 pt-2">
                  <h3
                    className={`font-serif font-bold text-lg leading-snug ${
                      m.isCurrent ? 'text-[#0047AB]' : 'text-[#111111]'
                    }`}
                  >
                    {m.title}
                  </h3>
                  <p className="font-sans text-xs text-[#111111]/70 leading-relaxed">
                    {m.detail}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#111111]/10 font-mono text-[10px] text-[#111111]/40">
                  STEP 0{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
