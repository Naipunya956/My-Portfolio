import React, { useState, useEffect } from 'react';
import { GeometricCursor } from './components/cursor/GeometricCursor';
import { BlueprintGridLines } from './components/grid/BlueprintGridLines';
import { EditorialNav } from './components/navigation/EditorialNav';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ResearchSection } from './components/sections/ResearchSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { JourneySection } from './components/sections/JourneySection';
import { FooterSection } from './components/sections/FooterSection';

export function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const sections = ['hero', 'about', 'work', 'research', 'experience', 'skills', 'journey', 'contact'];
    
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

  return (
    <div className="min-h-screen bg-[#F5F1E8] text-[#111111] bg-blueprint-grain relative overflow-x-hidden selection:bg-[#DCE7F5] selection:text-[#0047AB]">
      {/* Interactive Micro-Geometric Cursor Particle System */}
      <GeometricCursor />

      {/* Thin Architectural Blueprint Grid Lines System */}
      <BlueprintGridLines />

      {/* Editorial Navigation Header */}
      <EditorialNav activeSection={activeSection} />

      {/* Main Structural Container */}
      <main className="relative z-10 max-w-7xl mx-auto border-x border-[#111111]/15 bg-[#F5F1E8]/90">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ResearchSection />
        <ExperienceSection />
        <SkillsSection />
        <JourneySection />
        <FooterSection />
      </main>
    </div>
  );
}

export default App;
