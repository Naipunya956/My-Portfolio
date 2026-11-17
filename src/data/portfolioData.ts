import { PublicationItem, ExperienceEntry, AchievementEntry } from '../types';

export const PERSONAL_INFO = {
  name: 'Naipunya Addula',
  headline: 'AI & ML STUDENT · DEVELOPER · RESEARCHER',
  openingIntro:
    "Somewhere between ideas and experiments, there's a little world I'm building.",
  aboutSummary:
    'I am an undergraduate AI & ML student interested in software development, machine learning, research and building useful things.',
  degree: 'B.Tech in AI & ML',
  institution: 'Kakatiya Institute of Technology and Science for Women',
  focusAreas: [
    'Software Development',
    'Machine Learning',
    'Research',
    'Useful Tools',
  ],
  github: 'https://github.com/Naipunya956',
  linkedin: 'https://www.linkedin.com/in/naipunya-addula-669606369/',
  email: 'naipunyaaddula@gmail.com',
  closingNote: 'Thanks for spending a little time in my world.',
};

export const PUBLICATIONS: PublicationItem[] = [
  {
    id: 'ai-chatbots-context',
    number: '01',
    title: 'How AI Chatbots Remember Context?',
    date: 'August 2, 2026',
    platform: 'Zenodo',
    doi: '10.5281/zenodo.21757843',
    doiUrl: 'https://doi.org/10.5281/zenodo.21757843',
    summary:
      'Notes on how conversational AI systems track and carry context across interactions.',
    coverVariant: 'context',
    accentColor: '#2563EB',
  },
  {
    id: 'constraints-vs-freedom',
    number: '02',
    title: 'Do Constraints Increase Creativity More Than Freedom?',
    date: 'April 19, 2026',
    platform: 'Zenodo',
    doi: '10.5281/zenodo.19649379',
    doiUrl: 'https://doi.org/10.5281/zenodo.19649379',
    summary:
      'Exploring how boundaries shape creative problem solving.',
    coverVariant: 'constraints',
    accentColor: '#C93B43',
  },
  {
    id: 'domingos-reflection',
    number: '03',
    title: 'Reflection on A Few Useful Things to Know About Machine Learning',
    date: 'August 27, 2025',
    platform: 'Zenodo',
    doi: '10.5281/zenodo.16963924',
    doiUrl: 'https://doi.org/10.5281/zenodo.16963924',
    summary:
      'A concise reflection on key lessons from Pedro Domingos’ paper.',
    coverVariant: 'reflection',
    accentColor: '#2B6134',
  },
];

export const EXPERIENCES: ExperienceEntry[] = [
  {
    id: 'google-ambassador',
    org: 'GOOGLE',
    role: 'Google Student Ambassador',
    period: '2026',
    brandColor: '#2563EB',
    emblem: 'google',
  },
  {
    id: 'doradao-fellow',
    org: 'DORADAO',
    role: 'DoraDAO Fellow',
    brandColor: '#4B9A4A',
    emblem: 'doradao',
  },
  {
    id: 'aws-builder-group',
    org: 'AWS',
    role: 'AWS Student Builder Group — Content & Operations Lead',
    brandColor: '#C93B43',
    emblem: 'aws',
  },
];

export const ACHIEVEMENTS: AchievementEntry[] = [
  {
    id: 'dorahacks-2',
    event: 'DoraHacks 2.0',
    recognition: 'Top 100 recognition for De-Clutter, Re-Green.',
  },
];
