import type { Locale } from '@/lib/i18n/config';
import type { Dictionary } from '@/lib/i18n/dictionaries';
import { skills } from '@/lib/data/profile';

interface SkillsProps {
  dict: Dictionary;
  locale: Locale;
}

export default function Skills({ dict, locale }: SkillsProps) {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-12">
          {dict.skills.title}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg hover:border-gray-300 transition-all duration-300"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
                {skill.category[locale]}
              </h3>
              <ul className="space-y-2.5">
                {skill.items[locale].map((item, itemIndex) => (
                  <li key={itemIndex} className="text-sm sm:text-base text-gray-700 flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
