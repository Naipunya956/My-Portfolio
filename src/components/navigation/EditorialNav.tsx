import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavProps {
  activeSection: string;
}

export const EditorialNav: React.FC<NavProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'WORK', href: '#work', id: 'work' },
    { label: 'RESEARCH', href: '#research', id: 'research' },
    { label: 'EXPERIENCE', href: '#experience', id: 'experience' },
    { label: 'JOURNEY', href: '#journey', id: 'journey' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 bg-[#F5F1E8] border-b border-[#111111]/15 transition-all duration-200 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
        {/* Monogram / Brand */}
        <a
          href="#hero"
          className="group flex items-center gap-3 font-mono text-sm tracking-widest text-[#111111] font-bold"
        >
          <span className="w-2 h-2 bg-[#0047AB] inline-block" />
          <span className="tracking-tight uppercase">NAIPUNYA</span>
          <span className="text-[11px] text-[#111111]/40 hidden md:inline font-normal">
            / SOFTWARE ENGINEERING
          </span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs tracking-wider">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`relative py-1 transition-colors ${
                  isActive
                    ? 'text-[#0047AB] font-bold'
                    : 'text-[#111111]/70 hover:text-[#111111]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#0047AB]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Status / Quick Action */}
        <div className="hidden lg:flex items-center gap-3 font-mono text-[11px] text-[#111111]/60">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0047AB] animate-pulse" />
          <span className="tracking-tight uppercase text-[#111111]/80 font-medium">
            [ 2026 // OPEN TO BUILD ]
          </span>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-1.5 text-[#111111] border border-[#111111]/20 rounded-none hover:border-[#0047AB] transition-colors"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#F5F1E8] border-b border-[#111111]/20 px-6 py-6 font-mono text-sm space-y-4">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <div key={item.id} className="flex items-center justify-between border-b border-[#111111]/10 pb-2">
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`tracking-wider ${
                    isActive ? 'text-[#0047AB] font-bold' : 'text-[#111111]'
                  }`}
                >
                  {item.label}
                </a>
                {isActive && <span className="text-[10px] text-[#0047AB] font-bold">● ACTIVE</span>}
              </div>
            );
          })}
          <div className="pt-2 text-[11px] text-[#111111]/50 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#0047AB]" />
            <span>NAIPUNYA ADDULA · AIML UNDERGRADUATE</span>
          </div>
        </div>
      )}
    </header>
  );
};
