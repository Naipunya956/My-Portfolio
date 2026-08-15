import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const FooterSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer
      id="contact"
      className="relative py-28 sm:py-40 px-6 sm:px-10 lg:px-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 font-mono text-xs text-[#111111]/60 border-b border-[#111111]/10 pb-4">
          <span className="text-[#0047AB] font-bold">08/08</span>
          <span>—</span>
          <span className="uppercase tracking-widest text-[#111111]">THE HORIZON &amp; CONTACT</span>
        </div>

        {/* Large Heading & Minimalist Narrative */}
        <div className="space-y-8 max-w-4xl">
          <h2 className="font-serif font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] text-[#111111] tracking-tight uppercase">
            WHAT'S NEXT?
          </h2>

          <div className="font-sans text-xl sm:text-2xl md:text-3xl text-[#111111]/80 font-light leading-relaxed space-y-4 max-w-2xl">
            <p>
              Honestly?
            </p>
            <p>
              I'm still figuring that out.
            </p>
            <p className="text-[#111111] font-normal">
              So I'm building my way toward the answer.
            </p>
          </div>
        </div>

        {/* Minimalist Action Links */}
        <div className="pt-8 flex flex-wrap items-center gap-8 sm:gap-12 font-mono text-xs sm:text-sm">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-1.5 font-bold text-[#111111] hover:text-[#0047AB] transition-colors uppercase tracking-wider underline underline-offset-4 decoration-[#111111]/30 hover:decoration-[#0047AB]"
          >
            <span>GITHUB</span>
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-1.5 font-bold text-[#111111] hover:text-[#0047AB] transition-colors uppercase tracking-wider underline underline-offset-4 decoration-[#111111]/30 hover:decoration-[#0047AB]"
          >
            <span>LINKEDIN</span>
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="group inline-flex items-center gap-1.5 font-bold text-[#111111] hover:text-[#0047AB] transition-colors uppercase tracking-wider underline underline-offset-4 decoration-[#111111]/30 hover:decoration-[#0047AB]"
          >
            <span>EMAIL DIRECT</span>
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-1.5 font-mono text-xs text-[#111111]/60 hover:text-[#0047AB] transition-colors cursor-pointer"
            title="Copy email address"
          >
            {copied ? <Check size={12} className="text-[#0047AB]" /> : <Copy size={12} />}
            <span>{copied ? 'EMAIL COPIED' : PERSONAL_INFO.email}</span>
          </button>
        </div>

        {/* Technical Bottom Annotation */}
        <div className="pt-16 border-t border-[#111111]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-[11px] text-[#111111]/40">
          <div>
            © 2026 NAIPUNYA ADDULA · CRAFTED WITH TYPESCRIPT &amp; VITE
          </div>
          <div>
            NO MASCOTS · NO GENERATED SLOP · PURE CODE &amp; TYPOGRAPHY
          </div>
        </div>
      </div>

      {/* Thin Cobalt Line extending beyond viewport */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0047AB] shadow-[0_0_12px_rgba(0,71,171,0.4)]"
      />
    </footer>
  );
};
