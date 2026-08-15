import React, { useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { RESEARCH_ITEMS } from '../../data/portfolioData';
import { ResearchItem } from '../../types';

export const ResearchSection: React.FC = () => {
  const [selectedManuscript, setSelectedManuscript] = useState<ResearchItem | null>(null);

  return (
    <section
      id="research"
      className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-16 border-b border-[#111111]/15"
    >
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-[#111111]/10 pb-6">
          <div className="flex items-center gap-3 font-mono text-xs text-[#111111]/60">
            <span className="text-[#0047AB] font-bold">04/08</span>
            <span>—</span>
            <span className="uppercase tracking-widest text-[#111111]">INQUIRIES &amp; SCHOLARSHIP</span>
          </div>
          <span className="font-mono text-xs text-[#111111]/40">
            RESEARCH NOTEBOOK // 03 INQUIRIES
          </span>
        </div>

        {/* Section Title */}
        <div className="space-y-4 max-w-3xl">
          <h2 className="font-serif font-black text-4xl sm:text-6xl md:text-7xl leading-tight text-[#111111] tracking-tight">
            QUESTIONS I'VE<br />BEEN THINKING ABOUT.
          </h2>
          <p className="font-sans text-lg sm:text-xl text-[#111111]/70 font-light">
            A research notebook translated into technical writing, algorithmic analyses, and published scholarship.
          </p>
        </div>

        {/* Editorial Research Notebook Layout with Thin Rules */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {RESEARCH_ITEMS.map((item, idx) => {
            const isPublished = Boolean(item.doi);
            return (
              <div
                key={item.id}
                onClick={() => setSelectedManuscript(item)}
                className="group cursor-pointer p-8 bg-[#F5F1E8] border border-[#111111]/20 hover:border-[#0047AB] transition-all flex flex-col justify-between space-y-8 relative"
              >
                {/* Top Corner Metadata */}
                <div className="flex items-start justify-between border-b border-[#111111]/10 pb-3">
                  <span className="font-mono text-xs font-bold text-[#0047AB]">
                    0{idx + 1}
                  </span>
                  <span className="font-mono text-[10px] uppercase text-[#111111]/50 tracking-wider">
                    {isPublished ? 'PUBLISHED PAPER' : 'ESSAY / INQUIRY'}
                  </span>
                </div>

                {/* Main Heading */}
                <div className="space-y-4">
                  <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#111111] group-hover:text-[#0047AB] transition-colors leading-tight">
                    {item.title}
                  </h3>

                  {/* DOI if Published */}
                  {item.doi && (
                    <div className="font-mono text-[11px] text-[#0047AB] font-bold border-l-2 border-[#0047AB] pl-2">
                      DOI: {item.doi}
                    </div>
                  )}

                  <p className="font-sans text-sm text-[#111111]/70 leading-relaxed line-clamp-3">
                    {item.summary}
                  </p>
                </div>

                {/* Bottom Metadata & Action */}
                <div className="pt-4 border-t border-[#111111]/10 flex items-center justify-between font-mono text-xs text-[#111111]/50">
                  <span>{item.date}</span>
                  <span className="text-[#111111] group-hover:text-[#0047AB] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>READ NOTE</span>
                    <span>→</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Manuscript Reader Modal */}
      {selectedManuscript && (
        <div className="fixed inset-0 z-50 bg-[#111111]/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="bg-[#F5F1E8] border-2 border-[#111111] max-w-2xl w-full p-8 sm:p-10 shadow-2xl relative max-h-[88vh] overflow-y-auto space-y-8">
            {/* Close Button */}
            <button
              onClick={() => setSelectedManuscript(null)}
              className="absolute top-6 right-6 p-2 text-[#111111] hover:text-[#0047AB] border border-[#111111]/20 hover:border-[#0047AB] transition-colors"
              aria-label="Close manuscript reader"
            >
              <X size={16} />
            </button>

            {/* Header */}
            <div className="space-y-2 border-b border-[#111111]/15 pb-4 pr-8">
              <div className="flex items-center gap-2 font-mono text-xs text-[#0047AB] font-bold">
                <span>{selectedManuscript.doi ? 'PUBLISHED RESEARCH SCHOLARSHIP' : 'TECHNICAL WRITING & INQUIRY'}</span>
                <span>//</span>
                <span>{selectedManuscript.date}</span>
              </div>
              <h3 className="font-serif font-black text-3xl sm:text-4xl text-[#111111] leading-tight">
                {selectedManuscript.title}
              </h3>
            </div>

            {/* Published DOI Banner */}
            {selectedManuscript.doi && (
              <div className="p-4 bg-white/70 border border-[#0047AB] flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs">
                <span className="text-[#111111] font-bold">
                  OPEN RESEARCH REPOSITORY: ZENODO
                </span>
                <a
                  href={selectedManuscript.doiUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0047AB] text-white font-bold hover:bg-[#003380] transition-colors self-start sm:self-auto"
                >
                  <span>DOI: {selectedManuscript.doi}</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            )}

            {/* Abstract */}
            <div className="space-y-2 font-sans">
              <span className="font-mono text-[10px] text-[#111111]/50 uppercase tracking-widest block font-bold">
                ABSTRACT &amp; THEORETICAL PROBLEM:
              </span>
              <p className="text-base text-[#111111] leading-relaxed">
                {selectedManuscript.summary}
              </p>
            </div>

            {/* Core Insights */}
            <div className="space-y-3 font-mono text-xs">
              <span className="text-[10px] text-[#111111]/50 uppercase tracking-widest block font-bold">
                KEY TECHNICAL INVESTIGATIONS:
              </span>
              <ul className="space-y-2">
                {selectedManuscript.keyInsights.map((insight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-[#111111]/85">
                    <span className="text-[#0047AB] font-bold select-none">▪</span>
                    <span className="font-sans text-sm">{insight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags Matrix */}
            <div className="flex flex-wrap gap-2 pt-2 border-t border-[#111111]/10 font-mono text-xs">
              {selectedManuscript.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 bg-white/60 border border-[#111111]/15 text-[#111111]"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-[#111111]/15 flex items-center justify-between font-mono text-xs">
              <span className="text-[#111111]/50">NAIPUNYA ADDULA</span>
              <button
                onClick={() => setSelectedManuscript(null)}
                className="px-4 py-2 bg-[#111111] text-[#F5F1E8] hover:bg-[#0047AB] transition-colors font-bold"
              >
                CLOSE NOTE
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
