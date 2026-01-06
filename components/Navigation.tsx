'use client';

import type { Dictionary } from '@/lib/i18n/dictionaries';
import type { Locale } from '@/lib/i18n/config';
import { Home, Briefcase, Award, Heart, Mail, Languages } from 'lucide-react';
import { NavBar } from '@/components/ui/tubelight-navbar';
import MobileMenu from './MobileMenu';

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

  return (
    <>
      {/* Desktop Tubelight Navbar with Language Switcher */}
      <div className="hidden md:block">
        <NavBar items={navItems} locale={locale} />
      </div>

      {/* Mobile Fallback Navigation */}
      <nav className="md:hidden fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-lg font-bold text-foreground hover:text-primary transition-colors"
            >
              Carlos Plata
            </button>
            
            <div className="flex items-center gap-2">
              <MobileMenu dict={dict} locale={locale} />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
