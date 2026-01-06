import type { Locale } from '@/lib/i18n/config';

// Professional profile types
export interface Profile {
  name: string;
  title: Record<Locale, string>;
  location: string;
  email: string;
  linkedin: string;
  languages: Language[];
}

export interface Language {
  name: Record<Locale, string>;
  level: Record<Locale, string>;
}

export interface Skill {
  category: Record<Locale, string>;
  items: Record<Locale, string[]>;
}

export interface Experience {
  id: string;
  role: Record<Locale, string>;
  company: string;
  period: {
    start: string;
    end: string | null; // null means present
  };
  responsibilities: Record<Locale, string[]>;
  isISP?: boolean;
}

export interface Project {
  id: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  technologies: string[];
  link?: string;
  github?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date?: string;
}

export interface Volunteering {
  id: string;
  role: Record<Locale, string>;
  organization: string;
  period: {
    start: string;
    end: string | null;
  };
  description: Record<Locale, string>;
}

export interface Education {
  degree: Record<Locale, string>;
  institution: string;
  period: {
    start: string;
    end: string | null;
  };
}

export interface Article {
  id: string;
  title: Record<Locale, string>;
  excerpt: Record<Locale, string>;
  date: string;
  slug: string;
}
