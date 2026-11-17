import React, { useState } from 'react';
import { Menu, X, Palette, Sparkles } from 'lucide-react';

interface WorldNavProps {
  activeSection: string;
  isColoured: boolean;
  onToggleColour: () => void;
  onOpenGame: () => void;
}

const NAV_LINKS = [
  { id: 'hero', label: 'HOME', href: '#hero' },
  { id: 'about', label: 'ABOUT', href: '#about' },
  { id: 'research', label: 'RESEARCH', href: '#research' },
  { id: 'lab', label: 'THE LAB', href: '#lab' },
  { id: 'experience', label: 'EXPERIENCE', href: '#experience' },
  { id: 'contact', label: 'CONTACT', href: '#contact' },
];

export const WorldNav: React.FC<WorldNavProps> = ({
  activeSection,
  isColoured,
  onToggleColour,
  onOpenGame,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-3 left-0 right-0 z-40 px-3 sm:px-6 pointer-events-none">
      <div
        className={`pointer-events-auto max-w-6xl mx-auto px-3 sm:px-5 h-12 flex items-center justify-between gap-4 border-2 border-[#1C1B29] shadow-[4px_4px_0_#1C1B29] transition-colors duration-500 ${
          isColoured ? 'bg-[#FFF8E7]/95' : 'bg-[#FAF9F6]/95'
        }`}
      >
        {/* Zone 1: World Signpost Wordmark */}
        <a
          href="#hero"
          className="font-serif font-bold text-sm sm:text-base tracking-tight text-[#1C1B29] whitespace-nowrap shrink-0"
        >
          Naipunya Addula
        </a>

        {/* Zone 2: Integrated Game-HUD Links */}
        <nav aria-label="World map navigation" className="hidden lg:flex items-center gap-5">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`relative py-0.5 font-mono text-xs font-bold tracking-wider whitespace-nowrap shrink-0 transition-colors ${
                  isActive
                    ? isColoured
                      ? 'text-[#C93B43]'
                      : 'text-[#1C1B29]'
                    : 'text-[#1C1B29]/65 hover:text-[#1C1B29]'
                }`}
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className={`absolute left-0 right-0 -bottom-1 h-[2.5px] transition-transform duration-200 origin-left ${
                    isColoured ? 'bg-[#C93B43]' : 'bg-[#1C1B29]'
                  } ${isActive ? 'scale-x-100' : 'scale-x-0'}`}
                />
              </a>
            );
          })}
        </nav>

        {/* Zone 3: World Colour Switch + Optional Mini-Game Trigger */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={onToggleColour}
            title={isColoured ? 'Switch to monochrome world' : 'Switch to colour world'}
            aria-label={isColoured ? 'Switch to monochrome mode' : 'Switch to colour mode'}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 border-2 border-[#1C1B29] font-mono text-[11px] font-bold cursor-pointer whitespace-nowrap transition-colors ${
              isColoured
                ? 'bg-[#D4F0FC] text-[#1C1B29] hover:bg-[#F2B705]'
                : 'bg-[#1C1B29] text-[#FAF9F6] hover:bg-[#4D4C60]'
            }`}
          >
            <Palette size={12} />
            <span>{isColoured ? 'Colour' : 'Mono'}</span>
          </button>

          <button
            type="button"
            onClick={onOpenGame}
            className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-1 border-2 border-[#1C1B29] font-mono text-[11px] font-bold cursor-pointer whitespace-nowrap transition-colors ${
              isColoured
                ? 'bg-[#F2B705] text-[#1C1B29] hover:bg-[#C93B43] hover:text-[#FFF8E7]'
                : 'bg-[#FAF9F6] text-[#1C1B29] hover:bg-[#E8E6E1]'
            }`}
          >
            <Sparkles size={12} />
            <span>Play Game</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center w-8 h-8 border-2 border-[#1C1B29] bg-[#FFF8E7] text-[#1C1B29] cursor-pointer"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile World Map Drawer */}
      {mobileOpen && (
        <div className="pointer-events-auto lg:hidden max-w-6xl mx-auto mt-2 bg-[#FFF8E7] border-2 border-[#1C1B29] shadow-[4px_4px_0_#1C1B29] p-3 space-y-1">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center justify-between px-3 py-2 font-mono text-xs font-bold border-b border-[#1C1B29]/10 ${
                  isActive
                    ? isColoured
                      ? 'bg-[#D4F0FC] text-[#C93B43]'
                      : 'bg-[#E8E6E1] text-[#1C1B29]'
                    : 'text-[#1C1B29]/80'
                }`}
              >
                <span>{link.label}</span>
              </a>
            );
          })}
          <button
            type="button"
            onClick={() => {
              setMobileOpen(false);
              onOpenGame();
            }}
            className="w-full mt-2 py-2 px-3 bg-[#F2B705] border-2 border-[#1C1B29] font-mono text-xs font-bold text-[#1C1B29] text-center cursor-pointer"
          >
            ♡ PLAY A LITTLE GAME
          </button>
        </div>
      )}
    </header>
  );
};
