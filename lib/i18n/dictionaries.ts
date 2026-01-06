import type { Locale } from './config';

// Type definitions for dictionary structure
export interface Dictionary {
  nav: {
    about: string;
    experience: string;
    projects: string;
    certifications: string;
    volunteering: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
  };
  summary: {
    title: string;
    content: string;
  };
  skills: {
    title: string;
    categories: {
      networking: string;
      monitoring: string;
      infrastructure: string;
    };
  };
  experience: {
    title: string;
    present: string;
  };
  projects: {
    title: string;
    viewProject: string;
  };
  certifications: {
    title: string;
  };
  volunteering: {
    title: string;
  };
  writing: {
    title: string;
    subtitle: string;
  };
  contact: {
    title: string;
    email: string;
    location: string;
    linkedin: string;
  };
}

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  es: () => import('./dictionaries/es.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  return dictionaries[locale]();
};
