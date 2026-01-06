import type { Locale } from '@/lib/i18n/config';
import type { Dictionary } from '@/lib/i18n/dictionaries';
import { profile } from '@/lib/data/profile';

interface HeroProps {
  dict: Dictionary;
  locale: Locale;
}

export default function Hero({ dict, locale }: HeroProps) {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-4xl w-full animate-fade-in">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
          {profile.name}
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-700 mb-4 sm:mb-6 leading-relaxed">
          {dict.hero.title}
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed">
          {dict.hero.subtitle}
        </p>
      </div>
    </section>
  );
}
