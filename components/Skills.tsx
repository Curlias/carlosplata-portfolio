import type { Locale } from '@/lib/i18n/config';
import type { Dictionary } from '@/lib/i18n/dictionaries';
import { skills } from '@/lib/data/profile';

interface SkillsProps {
  dict: Dictionary;
  locale: Locale;
}

export default function Skills({ dict, locale }: SkillsProps) {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          {dict.skills.title}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                {skill.category[locale]}
              </h3>
              <ul className="space-y-2">
                {skill.items[locale].map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-700">
                    • {item}
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
