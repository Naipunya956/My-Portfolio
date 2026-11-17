import React, { useState } from 'react';
import { ArrowUpRight, Mail, Copy, Check, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import {
  PixelCampfire,
  PixelCharacter,
  PixelPineTree,
  PixelStar,
} from '../world/PixelSprites';

interface ContactSectionProps {
  onOpenGame: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenGame }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer
      id="contact"
      className="world-colourable relative pt-24 pb-10 px-4 sm:px-8 overflow-hidden text-[#FFF8E7]"
      style={{
        background: 'linear-gradient(180deg, #262A4C 0%, #4D4573 55%, #C97B74 88%, #E8A67B 100%)',
      }}
    >
      {/* Twinkling Pixel Stars in Dusk Sky */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <div className="animate-twinkle absolute top-10 left-[12%]">
          <PixelStar className="w-3.5 h-3.5" color="#FFF8E7" />
        </div>
        <div className="animate-twinkle absolute top-20 right-[16%]" style={{ animationDelay: '0.8s' }}>
          <PixelStar className="w-4 h-4" color="#F2B705" />
        </div>
        <div className="animate-twinkle absolute top-32 left-[28%]" style={{ animationDelay: '1.4s' }}>
          <PixelStar className="w-3 h-3" color="#D4F0FC" />
        </div>
        <div className="animate-twinkle hidden sm:block absolute top-14 left-[55%]" style={{ animationDelay: '0.4s' }}>
          <PixelStar className="w-3 h-3" color="#FFF8E7" />
        </div>
      </div>

      {/* Main Contact Card */}
      <div className="relative z-20 max-w-4xl mx-auto mb-20">
        <div className="reveal-up bg-[#FFF8E7] text-[#1C1B29] border-2 border-[#1C1B29] shadow-[8px_8px_0_#1C1B29] p-8 sm:p-12 text-center space-y-6">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#C93B43]">
            Contact
          </span>

          <h2 className="font-serif font-extrabold text-3xl sm:text-5xl text-[#1C1B29] tracking-tight text-balance">
            {PERSONAL_INFO.closingNote}
          </h2>

          {/* Direct Verified Links */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-world px-5 py-2.5 bg-[#FFF8E7] hover:bg-[#F2B705] text-[#1C1B29] font-sans text-sm font-bold whitespace-nowrap"
            >
              <span>GitHub</span>
              <ArrowUpRight size={15} />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-world px-5 py-2.5 bg-[#FFF8E7] hover:bg-[#8FD3F4] text-[#1C1B29] font-sans text-sm font-bold whitespace-nowrap"
            >
              <span>LinkedIn</span>
              <ArrowUpRight size={15} />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="btn-world px-5 py-2.5 bg-[#C93B43] hover:bg-[#1C1B29] text-[#FFF8E7] font-sans text-sm font-bold whitespace-nowrap"
            >
              <Mail size={15} />
              <span>Email</span>
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-4 py-2.5 border-2 border-[#1C1B29] bg-[#FAF5E6] hover:bg-[#F3E8CE] font-mono text-xs font-bold text-[#1C1B29] cursor-pointer whitespace-nowrap"
            >
              {copied ? (
                <>
                  <Check size={13} className="text-[#2B6134]" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy size={13} />
                  <span>{PERSONAL_INFO.email}</span>
                </>
              )}
            </button>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={onOpenGame}
              className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#2563EB] hover:text-[#C93B43] cursor-pointer transition-colors"
            >
              <Heart size={13} className="fill-[#C93B43] text-[#C93B43]" />
              <span>PLAY A LITTLE GAME</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scenic Dusk Horizon Ending */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex items-end justify-between px-4 sm:px-10 -mb-1" aria-hidden="true">
          <div className="flex items-end gap-4">
            <PixelPineTree dark className="w-12 h-18 sm:w-16 sm:h-24" />
            <PixelPineTree dark className="hidden sm:block w-10 h-16" />
          </div>

          <div className="flex items-end gap-3 sm:gap-5">
            <PixelCharacter waving className="w-36 sm:w-44 h-auto" />
            <PixelCampfire className="w-12 h-12 sm:w-14 sm:h-14 animate-float-gentle mb-1" />
          </div>

          <div className="hidden sm:flex items-end gap-3">
            <PixelPineTree dark className="w-14 h-20" />
          </div>
        </div>
      </div>

      {/* Ground Strip */}
      <div className="relative z-20 bg-[#1C1B29] border-t-2 border-[#FFF8E7]/20 -mx-4 sm:-mx-8 px-6 sm:px-10 pt-5 pb-2">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-xs text-[#FFF8E7]/75">
          <span>© 2026 {PERSONAL_INFO.name}</span>
          <span>{PERSONAL_INFO.closingNote}</span>
        </div>
      </div>
    </footer>
  );
};
