import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check } from 'lucide-react';
import { PUBLICATIONS } from '../../data/portfolioData';
import { PublicationCover } from '../world/PublicationCovers';

export const ResearchSection: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyDoi = (id: string, doiUrl: string) => {
    navigator.clipboard.writeText(doiUrl);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const featured = PUBLICATIONS[0];
  const secondary = PUBLICATIONS.slice(1);

  return (
    <section
      id="research"
      className="world-colourable relative py-20 sm:py-28 px-4 sm:px-8 bg-journal-grid border-b-2 border-[#1C1B29]"
    >
      <div className="max-w-6xl mx-auto space-y-14">
        {/* Editorial Section Heading */}
        <div className="reveal-up flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-[#1C1B29] pb-6">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#C93B43]">
              Research Archive
            </span>
            <h2 className="mt-2 font-serif font-extrabold text-4xl sm:text-5xl text-[#1C1B29] tracking-tight text-balance">
              Published Papers &amp; Reflections
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-[#4D4C60] max-w-sm">
            Three publications archived on Zenodo.
          </p>
        </div>

        {/* Featured Publication 01 — Asymmetric Horizontal Journal Spread */}
        <article className="reveal-up frame-world bg-[#FFF8E7] p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <PublicationCover variant={featured.coverVariant} number={featured.number} />
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              {/* Unboxed typographic metadata */}
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[#4D4C60]">
                <span className="font-bold text-[#2563EB]">Publication {featured.number}</span>
                <span aria-hidden="true">·</span>
                <span>{featured.date}</span>
                <span aria-hidden="true">·</span>
                <span>{featured.platform}</span>
              </div>

              <h3 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-[#1C1B29] leading-tight text-balance">
                {featured.title}
              </h3>

              <p className="font-sans text-base text-[#4D4C60] leading-relaxed max-w-xl">
                {featured.summary}
              </p>
            </div>

            <div className="pt-4 border-t border-[#1C1B29]/15 flex flex-wrap items-center justify-between gap-4">
              <span className="font-mono text-xs text-[#4D4C60]">
                DOI: {featured.doi}
              </span>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => handleCopyDoi(featured.id, featured.doiUrl)}
                  className="inline-flex items-center gap-1.5 px-3 py-2 border-2 border-[#1C1B29] bg-[#FFF8E7] hover:bg-[#F3E8CE] font-mono text-xs font-bold text-[#1C1B29] cursor-pointer whitespace-nowrap"
                >
                  {copiedId === featured.id ? (
                    <>
                      <Check size={13} className="text-[#2B6134]" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>Copy DOI</span>
                    </>
                  )}
                </button>

                <a
                  href={featured.doiUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-world px-5 py-2 bg-[#2563EB] hover:bg-[#1C1B29] text-[#FFF8E7] font-sans text-sm font-bold whitespace-nowrap"
                >
                  <span>Read Publication</span>
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* Publications 02 & 03 — Side-by-Side Archival Monograph Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {secondary.map((pub) => (
            <article
              key={pub.id}
              className="reveal-up frame-world bg-[#FFF8E7] p-6 sm:p-7 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-5">
                <PublicationCover variant={pub.coverVariant} number={pub.number} />

                <div className="space-y-2.5">
                  <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[#4D4C60]">
                    <span className="font-bold" style={{ color: pub.accentColor }}>
                      Publication {pub.number}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{pub.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{pub.platform}</span>
                  </div>

                  <h3 className="font-serif font-bold text-2xl text-[#1C1B29] leading-snug text-balance">
                    {pub.title}
                  </h3>

                  <p className="font-sans text-sm sm:text-base text-[#4D4C60] leading-relaxed">
                    {pub.summary}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#1C1B29]/15 flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => handleCopyDoi(pub.id, pub.doiUrl)}
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-[#4D4C60] hover:text-[#1C1B29] cursor-pointer whitespace-nowrap"
                >
                  {copiedId === pub.id ? (
                    <>
                      <Check size={13} className="text-[#2B6134]" />
                      <span className="font-bold text-[#2B6134]">DOI Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>{pub.doi}</span>
                    </>
                  )}
                </button>

                <a
                  href={pub.doiUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-world px-4 py-2 bg-[#FFF8E7] hover:bg-[#C93B43] hover:text-[#FFF8E7] text-[#1C1B29] font-sans text-sm font-bold whitespace-nowrap"
                >
                  <span>Read Publication</span>
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
