# Naipunya Addula — Portfolio

Personal portfolio site showcasing software engineering projects, AI/ML experiments, research, hackathons, and technical work.

## About

Naipunya Addula is a second-year AI/ML undergraduate at Kakatiya Institute of Technology and Sciences for Women (KITW) who learns by building — turning ideas into software, exploring AI systems, and figuring things out one project (and bug) at a time.

The site is a single-page, editorial-style portfolio built around a blueprint/grid aesthetic, with a custom cursor, animated section transitions, and a few playful interactive widgets embedded alongside the usual project and experience listings.

## Sections

- **Hero** — name, tagline, intro
- **About** — bio and core characteristics
- **Projects** — featured builds, each with tech stack, highlights, and links
- **Research** — papers, technical writing, and architectural notes
- **Experience** — roles, organizations, and key contributions
- **Skills** — categorized skill groups
- **Journey** — a timeline of hackathons, fellowships, and milestones
- **Footer** — contact and social links

## Interactive extras

- **Pocket Cheerleader widget** — a small mood-based affirmation generator embedded in the site, referencing a separate full Gemini-powered project
- **Interactive Terminal** — a simulated terminal component
- **Voxel Sandbox** — a small 3D/voxel playground element
- **Geometric cursor** and **blueprint grid lines** for the overall visual style

## Tech stack

- **Framework:** React 19, TypeScript, Vite 6
- **Styling:** Tailwind CSS 4
- **Animation:** Motion (Framer Motion), GSAP
- **Extras:** Lucide icons, canvas-confetti

This is a static frontend site — there's no backend server here, though `@google/genai` and `express` are listed as dependencies (carried over from the AI Studio project scaffold) and aren't used at runtime.

## Project structure

```
src/
  App.tsx                                  Page shell, section order, active-section tracking
  main.tsx                                 React entry point
  types.ts                                 Shared TypeScript types (Project, ResearchItem, etc.)
  data/
    portfolioData.ts                       All portfolio content — projects, research, experience, skills, journey
  components/
    navigation/
      EditorialNav.tsx                     Section navigation
    sections/
      HeroSection.tsx
      AboutSection.tsx
      ProjectsSection.tsx
      ResearchSection.tsx
      ExperienceSection.tsx
      SkillsSection.tsx
      JourneySection.tsx
      FooterSection.tsx
    world/
      InteractiveCheerleader.tsx           Pocket Cheerleader mood-affirmation widget
      InteractiveTerminal.tsx              Simulated terminal
      VoxelSandbox.tsx                     Small 3D/voxel playground
    cursor/
      GeometricCursor.tsx                  Custom cursor
    grid/
      BlueprintGridLines.tsx               Background grid styling
```

## Prerequisites

- Node.js v18+

## Setup

**1. Install dependencies**

```bash
npm install
```

**2. Run the app locally**

```bash
npm run dev
```

This starts Vite at `http://localhost:3000`.

## Available scripts

- `npm run dev` — run the app locally in development mode
- `npm run build` — build the site for production
- `npm run preview` — preview the production build locally
- `npm run lint` — type-check the project with `tsc --noEmit`
- `npm run clean` — remove build output

## Updating content

All portfolio content — projects, research items, experience, skills, and journey milestones — lives in `src/data/portfolioData.ts`. Edit the arrays there to add, remove, or update entries; the section components render straight from this data file.

## Links

- GitHub: https://github.com/Naipunya956
- LinkedIn: https://www.linkedin.com/in/naipunya-addula-669606369

## Notes

- This project was originally scaffolded in Google AI Studio.

## Screenshot

<img width="1914" height="899" alt="Image" src="https://github.com/user-attachments/assets/38ce5440-ef9e-4e05-bbf9-9353fdc9cb44" />
