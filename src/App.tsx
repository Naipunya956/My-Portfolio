import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { WorldNav } from './components/navigation/WorldNav';
import { ColourExplosion, ColourExplosionHandle } from './components/world/ColourExplosion';
import { HeroSection } from './components/sections/HeroSection';
import { WorldMarqueeDivider } from './components/world/WorldMarqueeDivider';
import { AboutSection } from './components/sections/AboutSection';
import { ResearchSection } from './components/sections/ResearchSection';
import { LabSection } from './components/sections/LabSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { ContactSection } from './components/sections/ContactSection';
import { StarCollectorGame } from './components/game/StarCollectorGame';

gsap.registerPlugin(ScrollTrigger);

export function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isColoured, setIsColoured] = useState<boolean>(false);
  const [isGameOpen, setIsGameOpen] = useState<boolean>(false);

  const rootRef = useRef<HTMLDivElement | null>(null);
  const explosionRef = useRef<ColourExplosionHandle | null>(null);

  // Trigger the signature full-screen Colour Explosion from CLICK ME coordinates
  const handleTriggerColourExplosion = (originX: number, originY: number) => {
    if (explosionRef.current) {
      explosionRef.current.triggerBurst(originX, originY, () => {
        setIsColoured(true);
      });
    } else {
      setIsColoured(true);
    }
  };

  // Toggle between Monochrome and Colour anytime via HUD switch without forcing replay
  const handleToggleColour = () => {
    setIsColoured((prev) => !prev);
  };

  // Track active navigation section on scroll
  useEffect(() => {
    const sections = ['hero', 'about', 'research', 'lab', 'experience', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP + ScrollTrigger choreography (respects prefers-reduced-motion)
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
        // Staggered Hero entrance
        gsap.from('.hero-stagger', {
          y: 22,
          opacity: 0,
          duration: 0.75,
          stagger: 0.09,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
        });

        // Subtle scroll-linked parallax clouds in Hero
        gsap.to('.hero-parallax-slow', {
          y: -36,
          ease: 'none',
          scrollTrigger: {
            trigger: '#hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });

        gsap.to('.hero-parallax-fast', {
          y: -64,
          ease: 'none',
          scrollTrigger: {
            trigger: '#hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });

        // Scroll-triggered reveals across sections (compositor-only y + opacity)
        const revealElements = gsap.utils.toArray<HTMLElement>('.reveal-up');
        revealElements.forEach((el) => {
          gsap.from(el, {
            y: 24,
            opacity: 0,
            duration: 0.65,
            ease: 'power2.out',
            clearProps: 'transform,opacity',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              once: true,
            },
          });
        });
      }, rootRef);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <div
      ref={rootRef}
      data-world={isColoured ? 'colour' : 'mono'}
      className="world-shell min-h-screen bg-[#FFF8E7] text-[#1C1B29] overflow-x-hidden"
    >
      {/* Fullscreen Colour Explosion Wave & Pixel Particle Canvas */}
      <ColourExplosion ref={explosionRef} />

      {/* Integrated Floating Game-HUD Navigation */}
      <WorldNav
        activeSection={activeSection}
        isColoured={isColoured}
        onToggleColour={handleToggleColour}
        onOpenGame={() => setIsGameOpen(true)}
      />

      <main>
        <HeroSection
          isColoured={isColoured}
          onTriggerColour={handleTriggerColourExplosion}
          onOpenGame={() => setIsGameOpen(true)}
        />

        <WorldMarqueeDivider
          variant="crimson"
          items={[
            'Naipunya Addula',
            'AI & ML Student',
            'Software Development',
            'Zenodo Research',
          ]}
        />

        <AboutSection />

        <ResearchSection />

        <WorldMarqueeDivider
          variant="meadow"
          items={[
            'The Lab',
            'Experimental Workspace',
            'Future Builds',
            'Pixel Canvas',
          ]}
        />

        <LabSection />

        <ExperienceSection />

        <ContactSection onOpenGame={() => setIsGameOpen(true)} />
      </main>

      {/* Isolated Optional 2D Platformer Mini-Game */}
      <StarCollectorGame
        isOpen={isGameOpen}
        onClose={() => setIsGameOpen(false)}
      />
    </div>
  );
}

export default App;
