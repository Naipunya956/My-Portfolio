import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { InteractiveCheerleader } from '../world/InteractiveCheerleader';
import { VoxelSandbox } from '../world/VoxelSandbox';
import { InteractiveTerminal } from '../world/InteractiveTerminal';

export const ProjectsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');

  return (
    <section
      id="work"
      className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-16 border-b border-[#111111]/15"
    >
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-[#111111]/10 pb-6">
          <div className="flex items-center gap-3 font-mono text-xs text-[#111111]/60">
            <span className="text-[#0047AB] font-bold">03/08</span>
            <span>—</span>
            <span className="uppercase tracking-widest text-[#111111]">ENGINEERING REPOSITORY</span>
          </div>
          <span className="font-mono text-xs text-[#111111]/40">
            SELECTED WORK // 4 ARTIFACTS
          </span>
        </div>

        {/* Section Title */}
        <div className="space-y-4 max-w-3xl">
          <h2 className="font-serif font-black text-4xl sm:text-6xl md:text-7xl leading-tight text-[#111111] tracking-tight">
            SELECTED WORK
          </h2>
          <p className="font-sans text-lg sm:text-xl text-[#111111]/70 font-light">
            Things I've actually spent time making.
          </p>
        </div>

        {/* Large Editorial Entries Flow */}
        <div className="space-y-32">
          {/* =========================================================================
              PROJECT 01: POCKET CHEERLEADER
             ========================================================================= */}
          <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start pt-8 border-t border-[#111111]/20">
            {/* Left: Metadata & Narrative */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-baseline justify-between border-b border-[#111111]/10 pb-2">
                <span className="font-mono text-4xl sm:text-5xl font-black text-[#0047AB]">
                  01
                </span>
                <span className="font-mono text-xs text-[#111111]/40 uppercase">
                  AI // CONVERSATIONAL
                </span>
              </div>

              <h3 className="font-serif font-black text-3xl sm:text-4xl text-[#111111] leading-tight hover:text-[#0047AB] transition-colors">
                POCKET CHEERLEADER
              </h3>

              <p className="font-sans text-base text-[#111111]/80 leading-relaxed">
                An AI-powered conversational application combining mood detection, personalized responses, mood tracking, affirmation generation and interactive self-care features.
              </p>

              {/* Tech Stack Spec */}
              <div className="space-y-2 pt-2">
                <span className="font-mono text-[10px] text-[#111111]/40 uppercase tracking-widest block font-bold">
                  TECH:
                </span>
                <p className="font-mono text-xs text-[#111111] leading-relaxed">
                  React · TypeScript · Express · Gemini API · Vite · Tailwind CSS
                </p>
              </div>

              {/* Action Link */}
              <div className="pt-4">
                <a
                  href="https://github.com/Naipunya956/Pocket_Cheerleader"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 font-mono text-xs font-bold text-[#111111] hover:text-[#0047AB] transition-colors"
                >
                  <span className="underline underline-offset-4 decoration-[#111111]/30 group-hover:decoration-[#0047AB]">
                    GITHUB REPOSITORY
                  </span>
                  <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform text-[#0047AB]" />
                </a>
              </div>
            </div>

            {/* Right: Restrained Interactive HTML/CSS Mockup */}
            <div className="lg:col-span-7">
              <InteractiveCheerleader />
            </div>
          </article>

          {/* =========================================================================
              PROJECT 02: PYCRAFT
             ========================================================================= */}
          <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start pt-8 border-t border-[#111111]/20">
            {/* Left: Metadata & Narrative */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-baseline justify-between border-b border-[#111111]/10 pb-2">
                <span className="font-mono text-4xl sm:text-5xl font-black text-[#0047AB]">
                  02
                </span>
                <span className="font-mono text-xs text-[#111111]/40 uppercase">
                  GRAPHICS // GAME DEV
                </span>
              </div>

              <h3 className="font-serif font-black text-3xl sm:text-4xl text-[#111111] leading-tight hover:text-[#0047AB] transition-colors">
                PYCRAFT
              </h3>

              <p className="font-sans text-base text-[#111111]/80 leading-relaxed">
                A first-person sandbox game built in Python featuring procedural terrain, block interaction, physics, collision detection and world interaction.
              </p>

              {/* Tech Stack Spec */}
              <div className="space-y-2 pt-2">
                <span className="font-mono text-[10px] text-[#111111]/40 uppercase tracking-widest block font-bold">
                  TECH:
                </span>
                <p className="font-mono text-xs text-[#111111] leading-relaxed">
                  Python · Ursina Engine · 3D Graphics · Procedural Generation · Physics
                </p>
              </div>

              {/* Action Link */}
              <div className="pt-4">
                <a
                  href="https://github.com/Naipunya956/PyCraft"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 font-mono text-xs font-bold text-[#111111] hover:text-[#0047AB] transition-colors"
                >
                  <span className="underline underline-offset-4 decoration-[#111111]/30 group-hover:decoration-[#0047AB]">
                    GITHUB REPOSITORY
                  </span>
                  <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform text-[#0047AB]" />
                </a>
              </div>
            </div>

            {/* Right: Restrained 3D Voxel Sandbox Simulator */}
            <div className="lg:col-span-7">
              <VoxelSandbox />
            </div>
          </article>

          {/* =========================================================================
              PROJECT 03: TERMINAL AI HELPER
             ========================================================================= */}
          <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start pt-8 border-t border-[#111111]/20">
            {/* Left: Metadata & Narrative */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-baseline justify-between border-b border-[#111111]/10 pb-2">
                <span className="font-mono text-4xl sm:text-5xl font-black text-[#0047AB]">
                  03
                </span>
                <span className="font-mono text-xs text-[#111111]/40 uppercase">
                  CLI // DEVELOPER TOOLS
                </span>
              </div>

              <h3 className="font-serif font-black text-3xl sm:text-4xl text-[#111111] leading-tight hover:text-[#0047AB] transition-colors">
                TERMINAL AI HELPER
              </h3>

              <p className="font-sans text-base text-[#111111]/80 leading-relaxed">
                An AI developer tool that translates natural-language requests into terminal commands and requires human confirmation before execution.
              </p>

              {/* Tech Stack Spec */}
              <div className="space-y-2 pt-2">
                <span className="font-mono text-[10px] text-[#111111]/40 uppercase tracking-widest block font-bold">
                  TECH:
                </span>
                <p className="font-mono text-xs text-[#111111] leading-relaxed">
                  Python · AI Agents · Developer Tools · Shell Scripting · Safety Protocol
                </p>
              </div>

              {/* Action Link */}
              <div className="pt-4">
                <a
                  href="https://github.com/Naipunya956"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 font-mono text-xs font-bold text-[#111111] hover:text-[#0047AB] transition-colors"
                >
                  <span className="underline underline-offset-4 decoration-[#111111]/30 group-hover:decoration-[#0047AB]">
                    GITHUB REPOSITORY
                  </span>
                  <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform text-[#0047AB]" />
                </a>
              </div>
            </div>

            {/* Right: Restrained Interactive CLI Terminal */}
            <div className="lg:col-span-7">
              <InteractiveTerminal />
            </div>
          </article>

          {/* =========================================================================
              PROJECT 04: PINGME
             ========================================================================= */}
          <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start pt-8 border-t border-[#111111]/20">
            {/* Left: Metadata & Narrative */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-baseline justify-between border-b border-[#111111]/10 pb-2">
                <span className="font-mono text-4xl sm:text-5xl font-black text-[#0047AB]">
                  04
                </span>
                <span className="font-mono text-xs text-[#111111]/40 uppercase">
                  ACADEMIC // PLATFORM
                </span>
              </div>

              <h3 className="font-serif font-black text-3xl sm:text-4xl text-[#111111] leading-tight hover:text-[#0047AB] transition-colors">
                PINGME
              </h3>

              <p className="font-sans text-base text-[#111111]/80 leading-relaxed">
                A student-focused platform designed to centralize announcements, deadlines and important updates in one distraction-free interface.
              </p>

              {/* Tech Stack Spec */}
              <div className="space-y-2 pt-2">
                <span className="font-mono text-[10px] text-[#111111]/40 uppercase tracking-widest block font-bold">
                  TECH:
                </span>
                <p className="font-mono text-xs text-[#111111] leading-relaxed">
                  React · TypeScript · Node.js · Express · Tailwind CSS
                </p>
              </div>

              {/* Action Link */}
              <div className="pt-4">
                <a
                  href="https://github.com/Naipunya956"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 font-mono text-xs font-bold text-[#111111] hover:text-[#0047AB] transition-colors"
                >
                  <span className="underline underline-offset-4 decoration-[#111111]/30 group-hover:decoration-[#0047AB]">
                    GITHUB REPOSITORY
                  </span>
                  <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform text-[#0047AB]" />
                </a>
              </div>
            </div>

            {/* Right: Restrained Campus Feed Mockup */}
            <div className="lg:col-span-7 bg-[#F5F1E8] border border-[#111111]/25 text-[#111111] font-mono text-xs">
              <div className="bg-[#111111] text-[#F5F1E8] px-4 py-2.5 flex items-center justify-between border-b border-[#111111]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#0047AB] inline-block" />
                  <span className="font-bold tracking-wider text-[11px]">
                    PINGME // CENTRALIZED_CAMPUS_FEED
                  </span>
                </div>
                <span className="text-[10px] text-[#999999]">LIVE_STREAM</span>
              </div>

              <div className="p-5 sm:p-6 space-y-3">
                <div className="p-3.5 bg-white/60 border border-[#111111]/15 space-y-1">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-[#0047AB] font-bold">[URGENT] AIML LAB SUBMISSION</span>
                    <span className="text-[#111111]/40">TODAY // 23:59 IST</span>
                  </div>
                  <p className="font-sans text-xs text-[#111111]/80">
                    Transformer attention mechanism analysis and KV-cache notebook submissions.
                  </p>
                </div>

                <div className="p-3.5 bg-white/60 border border-[#111111]/15 space-y-1">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-[#111111] font-bold">AWS CLOUD WORKSHOP REGISTRATION</span>
                    <span className="text-[#111111]/40">THIS WEEK</span>
                  </div>
                  <p className="font-sans text-xs text-[#111111]/80">
                    Hands-on compute primitives, IAM permissions, and serverless architectures.
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between text-[11px] text-[#111111]/50 border-t border-[#111111]/10">
                  <span>UNIFIED ACADEMIC BROADCASTS</span>
                  <span className="text-[#0047AB] font-bold">ACTIVE FILTER: ALL</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
