export type ThemeMode = 'dark' | 'light';

export type ProjectCategory = 'ALL' | 'AI VIDEO' | 'COMMERCIAL' | 'PRODUCT ADS' | 'CINEMATIC' | 'AI IMAGES';

export interface ProjectItem {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, 'ALL'>;
  client: string;
  year: string;
  description: string;
  creativeDirection: string;
  thumbnail: string;
  videoUrl?: string;
  mediaType: 'video' | 'image';
  videoDuration?: string;
  aspectRatio: 'wide' | 'vertical' | 'square';
  tools: string[];
  deliverables: string[];
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  highlights: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverable: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  clientName: string;
  role: string;
  company: string;
  project: string;
}
