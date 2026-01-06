import type { Locale } from '@/lib/i18n/config';
import type { Dictionary } from '@/lib/i18n/dictionaries';
import { profile } from '@/lib/data/profile';

interface HeroProps {
  dict: Dictionary;
  locale: Locale;
}

export default function Hero({ dict, locale }: HeroProps) {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          {profile.name}
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">
          {dict.hero.title}
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl">
          {dict.hero.subtitle}
        </p>
      </div>
    </section>
  );
}
