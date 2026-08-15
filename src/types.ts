export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  tech: string[];
  githubUrl?: string;
  demoUrl?: string;
  status: 'Completed' | 'Active' | 'Experiment';
  accentColor: string;
  category: 'AI / Full Stack' | 'Game Dev / Python' | 'Developer Tools' | 'Web Platform';
}

export interface ResearchItem {
  id: string;
  title: string;
  type: 'Research Paper' | 'Technical Writing & Reflection' | 'Architectural Note';
  doi?: string;
  doiUrl?: string;
  date: string;
  summary: string;
  keyInsights: string[];
  fullNote?: string;
  tags: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  description: string;
  keyContributions: string[];
  focusAreas: string[];
}

export interface ProgramItem {
  id: string;
  name: string;
  category: 'Hackathon' | 'Fellowship' | 'Global Initiative';
  description: string;
  badgeText: string;
  accent: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: string[];
  color: string;
}

export interface JourneyMilestone {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  type: 'hackathon' | 'fellowship' | 'leadership' | 'milestone';
  icon: string;
}
