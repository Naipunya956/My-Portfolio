export interface PublicationItem {
  id: string;
  number: string;
  title: string;
  date: string;
  platform: 'Zenodo';
  doi: string;
  doiUrl: string;
  summary: string;
  coverVariant: 'context' | 'constraints' | 'reflection';
  accentColor: string;
}

export interface ExperienceEntry {
  id: string;
  org: string;
  role: string;
  period?: string;
  brandColor: string;
  emblem: 'google' | 'doradao' | 'aws';
}

export interface AchievementEntry {
  id: string;
  event: string;
  recognition: string;
  project?: string;
}
