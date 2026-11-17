import React from 'react';
import { Award } from 'lucide-react';
import { EXPERIENCES, ACHIEVEMENTS } from '../../data/portfolioData';

const BrandEmblem: React.FC<{ emblem: 'google' | 'doradao' | 'aws' }> = ({ emblem }) => {
  if (emblem === 'google') {
    return (
      <svg viewBox="0 0 32 32" className="w-9 h-9" aria-hidden="true">
        <rect x="2" y="2" width="28" height="28" fill="#D4F0FC" stroke="#1C1B29" strokeWidth="2" />
        <circle cx="16" cy="16" r="8" fill="#2563EB" stroke="#1C1B29" strokeWidth="2" />
        <rect x="16" y="14" width="9" height="4" fill="#F2B705" stroke="#1C1B29" strokeWidth="1.5" />
      </svg>
    );
  }
  if (emblem === 'doradao') {
    return (
      <svg viewBox="0 0 32 32" className="w-9 h-9" aria-hidden="true">
        <rect x="2" y="2" width="28" height="28" fill="#DFEFD8" stroke="#1C1B29" strokeWidth="2" />
        <polygon points="16,6 25,16 16,26 7,16" fill="#4B9A4A" stroke="#1C1B29" strokeWidth="2" />
        <rect x="13" y="13" width="6" height="6" fill="#F2B705" stroke="#1C1B29" strokeWidth="1.5" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 32 32" className="w-9 h-9" aria-hidden="true">
      <rect x="2" y="2" width="28" height="28" fill="#FDE4DC" stroke="#1C1B29" strokeWidth="2" />
      <path d="M 8 18 L 16 9 L 24 18 Z" fill="#C93B43" stroke="#1C1B29" strokeWidth="2" />
      <path d="M 7 22 Q 16 26 25 22" fill="none" stroke="#1C1B29" strokeWidth="2.5" />
    </svg>
  );
};

export const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="world-colourable relative py-20 sm:py-28 px-4 sm:px-8 bg-[#FAF5E6] border-b-2 border-[#1C1B29]"
    >
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Part 1: Experience */}
        <div className="space-y-10">
          <div className="reveal-up flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-[#1C1B29] pb-6">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#2B6134]">
                Community &amp; Leadership
              </span>
              <h2 className="mt-2 font-serif font-extrabold text-4xl sm:text-5xl text-[#1C1B29] tracking-tight">
                Experience
              </h2>
            </div>
            <p className="font-sans text-sm sm:text-base text-[#4D4C60]">
              Student ambassador and community roles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {EXPERIENCES.map((item) => (
              <div
                key={item.id}
                className="reveal-up frame-world bg-[#FFF8E7] p-6 sm:p-7 flex flex-col justify-between space-y-6 hover:-translate-y-1 transition-transform duration-200"
              >
                <div className="flex items-start justify-between gap-4">
                  <BrandEmblem emblem={item.emblem} />
                  {item.period && (
                    <span className="font-mono text-xs font-bold text-[#4D4C60]">
                      {item.period}
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  <span
                    className="font-mono text-xs font-bold tracking-widest block"
                    style={{ color: item.brandColor }}
                  >
                    {item.org}
                  </span>
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#1C1B29] leading-snug">
                    {item.role}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: Achievements */}
        <div className="space-y-10">
          <div className="reveal-up flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-[#1C1B29] pb-6">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#C93B43]">
                Milestones &amp; Recognition
              </span>
              <h2 className="mt-2 font-serif font-extrabold text-3xl sm:text-4xl text-[#1C1B29] tracking-tight">
                Achievements
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {ACHIEVEMENTS.map((ach) => (
              <div
                key={ach.id}
                className="reveal-up lg:col-span-7 frame-world bg-[#FFF8E7] p-6 sm:p-8 flex items-start gap-5"
              >
                <div className="w-12 h-12 shrink-0 bg-[#F2B705] border-2 border-[#1C1B29] flex items-center justify-center">
                  <Award size={22} className="text-[#1C1B29]" />
                </div>

                <div className="space-y-2">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#C93B43]">
                    {ach.event}
                  </span>
                  <h3 className="font-serif font-bold text-2xl text-[#1C1B29]">
                    {ach.recognition}
                  </h3>
                  {ach.project && (
                    <p className="font-sans text-sm sm:text-base text-[#4D4C60]">
                      For <span className="font-semibold text-[#1C1B29]">{ach.project}</span>
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* Intentional open slot for upcoming certifications & awards */}
            <div className="reveal-up lg:col-span-5 border-2 border-dashed border-[#1C1B29]/35 bg-[#FFF8E7]/60 p-6 sm:p-8 flex flex-col justify-center">
              <span className="font-mono text-xs font-bold text-[#4D4C60] uppercase tracking-wider">
                Certifications &amp; Future Honors
              </span>
              <p className="mt-2 font-sans text-sm text-[#4D4C60] leading-relaxed">
                Reserved for upcoming certifications, hackathons, and recognitions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
