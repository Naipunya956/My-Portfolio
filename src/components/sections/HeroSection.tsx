import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-32 pb-20 px-6 sm:px-10 lg:px-16 flex flex-col justify-between border-b border-[#111111]/15"
    >
      {/* Top Edge Metadata & Status Annotation */}
      <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[#111111]/60 tracking-wider">
        <div className="flex items-center gap-2">
          <span className="text-[#0047AB] font-bold">01/08</span>
          <span>—</span>
          <span className="text-[#111111] uppercase font-semibold">
            NAIPUNYA ADDULA / SOFTWARE ENGINEERING
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-[#0047AB] font-mono font-medium">
            [ AVAILABLE FOR BUILDING ]
          </span>
          <span className="hidden sm:inline text-[#111111]/30">|</span>
          <span className="hidden sm:inline">02 / 2026</span>
        </div>
      </div>

      {/* Main Massive Editorial Typography Hero */}
      <div className="my-auto py-12 sm:py-16 max-w-6xl">
        <div className="space-y-6 sm:space-y-8">
          <h1 className="font-serif font-black text-5xl sm:text-7xl md:text-8xl lg:text-[6.75rem] leading-[0.92] tracking-[-0.035em] text-[#111111] uppercase">
            NAIPUNYA<br />
            <span className="text-[#0047AB] italic font-serif font-normal inline-block hover:translate-x-2 transition-transform duration-300">
              ADDULA.
            </span>
          </h1>

          {/* Subheading Narrative */}
          <p className="font-sans text-base sm:text-lg md:text-xl text-[#111111]/75 max-w-2xl leading-relaxed">
            Second-year AIML undergraduate exploring software engineering, AI systems, algorithms, and the messy process of turning ideas into working software.
          </p>

          {/* Direct Action Links */}
          <div className="pt-4 flex flex-wrap items-center gap-6 sm:gap-8 font-mono text-xs sm:text-sm">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 px-5 py-3 bg-[#111111] text-[#F5F1E8] hover:bg-[#0047AB] transition-colors duration-200"
            >
              <span className="font-bold tracking-wider">VIEW MY WORK</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-[#111111] hover:text-[#0047AB] font-bold tracking-wider underline underline-offset-4 decoration-[#111111]/30 hover:decoration-[#0047AB] transition-colors"
            >
              <span>GITHUB</span>
              <ArrowUpRight size={13} />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-[#111111] hover:text-[#0047AB] font-bold tracking-wider underline underline-offset-4 decoration-[#111111]/30 hover:decoration-[#0047AB] transition-colors"
            >
              <span>LINKEDIN</span>
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Technical Annotations Edge Grid */}
      <div className="pt-8 border-t border-[#111111]/10 grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-[11px] text-[#111111]/50">
        <div>
          <span className="text-[#111111]/30 block mb-0.5">DISCIPLINE</span>
          <span className="text-[#111111] font-semibold">AIML &amp; SYSTEMS</span>
        </div>
        <div>
          <span className="text-[#111111]/30 block mb-0.5">LOCATION</span>
          <span className="text-[#111111] font-semibold">{PERSONAL_INFO.location.toUpperCase()}</span>
        </div>
        <div>
          <span className="text-[#111111]/30 block mb-0.5">ETHOS</span>
          <span className="text-[#111111] font-semibold">BUILD / BREAK / LEARN</span>
        </div>
        <div className="text-right sm:text-left">
          <span className="text-[#111111]/30 block mb-0.5">COORDINATE</span>
          <span className="text-[#0047AB] font-bold">18.6715° N, 78.0988° E</span>
        </div>
      </div>
    </section>
  );
};
