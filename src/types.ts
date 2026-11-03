export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
  downloadUrl?: string;
  featured?: boolean;
  status?: string;
  isPrivate?: boolean;
  image?: string;
  category?: 'csharp' | 'web' | 'ai' | 'gamedev';
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  companyUrl?: string;
  description: string;
  skills: string[];
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
