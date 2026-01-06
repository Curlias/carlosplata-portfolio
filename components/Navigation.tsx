'use client';

import type { Dictionary } from '@/lib/i18n/dictionaries';
import type { Locale } from '@/lib/i18n/config';
import { Home, Briefcase, Award, Heart, Mail } from 'lucide-react';
import { NavBar } from '@/components/ui/tubelight-navbar';

interface NavigationProps {
  dict: Dictionary;
  locale: Locale;
}

export default function Navigation({ dict, locale }: NavigationProps) {
  const navItems = [
    { name: dict.nav.about, url: '#about', icon: Home },
    { name: dict.nav.experience, url: '#experience', icon: Briefcase },
    { name: dict.nav.certifications, url: '#certifications', icon: Award },
    { name: dict.nav.volunteering, url: '#volunteering', icon: Heart },
    { name: dict.nav.contact, url: '#contact', icon: Mail },
  ];

  return <NavBar items={navItems} locale={locale} />;
}
