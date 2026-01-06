'use client';

import type { Dictionary } from '@/lib/i18n/dictionaries';
import type { Locale } from '@/lib/i18n/config';
import { useState, useEffect } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import MobileMenu from './MobileMenu';

interface NavigationProps {
  dict: Dictionary;
  locale: Locale;
}

export default function Navigation({ dict, locale }: NavigationProps) {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Update active section
      const sections = ['about', 'experience', 'projects', 'certifications', 'volunteering', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      // Update scroll state for shadow effect
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const navItems = [
    { id: 'about', label: dict.nav.about },
    { id: 'experience', label: dict.nav.experience },
    { id: 'projects', label: dict.nav.projects },
    { id: 'certifications', label: dict.nav.certifications },
    { id: 'volunteering', label: dict.nav.volunteering },
    { id: 'contact', label: dict.nav.contact },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 bg-white z-50 transition-shadow duration-300 ${
        isScrolled ? 'shadow-md' : 'border-b border-gray-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-lg font-bold text-gray-900 hover:text-gray-600 transition-colors"
          >
            Carlos Plata
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeSection === item.id
                    ? 'text-gray-900 bg-gray-100'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="ml-4 pl-4 border-l border-gray-300">
              <LanguageSwitcher currentLocale={locale} />
            </div>
          </div>

          {/* Mobile Menu */}
          <MobileMenu dict={dict} locale={locale} />
        </div>
      </div>
    </nav>
  );
}
