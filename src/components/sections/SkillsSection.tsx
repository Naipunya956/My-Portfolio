import React from 'react';

export const SkillsSection: React.FC = () => {
  const skillMatrix = [
    {
      category: 'PROGRAMMING LANGUAGES',
      skills: ['Python', 'C', 'JavaScript', 'TypeScript'],
    },
    {
      category: 'WEB & FULL STACK',
      skills: ['React', 'Node.js', 'Express', 'HTML', 'CSS', 'Tailwind CSS', 'Vite'],
    },
    {
      category: 'TOOLS & CLOUD INFRASTRUCTURE',
      skills: ['Git', 'GitHub', 'AWS', 'Supabase', 'Vercel', 'Jupyter', 'Google Colab', 'VS Code'],
    },
    {
      category: 'CORE COMPUTER SCIENCE',
      skills: [
        'Data Structures & Algorithms',
        'Object-Oriented Programming',
        'REST APIs',
        'Database Fundamentals',
      ],
    },
    {
      category: 'AI / MACHINE LEARNING',
      skills: [
        'Machine Learning',
        'AI Agents',
        'Computer Vision',
        'LLM Context Retention',
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-16 border-b border-[#111111]/15"
    >
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-[#111111]/10 pb-6">
          <div className="flex items-center gap-3 font-mono text-xs text-[#111111]/60">
            <span className="text-[#0047AB] font-bold">06/08</span>
            <span>—</span>
            <span className="uppercase tracking-widest text-[#111111]">TECHNICAL STACK</span>
          </div>
          <span className="font-mono text-xs text-[#111111]/40">
            TYPOGRAPHIC MATRIX // NO ARBITRARY PERCENTAGES
          </span>
        </div>

        {/* Section Title */}
        <div className="space-y-4 max-w-3xl">
          <h2 className="font-serif font-black text-4xl sm:text-6xl md:text-7xl leading-tight text-[#111111] tracking-tight">
            CURRENT TOOLKIT.
          </h2>
          <p className="font-sans text-lg sm:text-xl text-[#111111]/70 font-light">
            Tools, languages, and technical disciplines utilized across production applications and research experiments.
          </p>
        </div>

        {/* Typographic Grid Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillMatrix.map((matrix, idx) => (
            <div
              key={matrix.category}
              className="p-8 bg-[#F5F1E8] border border-[#111111]/20 space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between font-mono text-xs border-b border-[#111111]/15 pb-2">
                  <span className="text-[#0047AB] font-bold">0{idx + 1}</span>
                  <span className="text-[#111111]/40 uppercase tracking-wider text-[10px]">
                    DISCIPLINE
                  </span>
                </div>

                <h3 className="font-serif font-bold text-xl text-[#111111] leading-snug">
                  {matrix.category}
                </h3>

                <ul className="space-y-2 pt-2">
                  {matrix.skills.map((skill) => (
                    <li
                      key={skill}
                      className="font-mono text-xs sm:text-sm text-[#111111]/85 flex items-center gap-2 hover:text-[#0047AB] transition-colors"
                    >
                      <span className="text-[#0047AB] text-[10px]">▪</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[#111111]/10 font-mono text-[10px] text-[#111111]/40 uppercase tracking-widest">
                VERIFIED IN CODEBASE
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
