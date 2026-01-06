import type { Locale } from '@/lib/i18n/config';
import type { Dictionary } from '@/lib/i18n/dictionaries';
import { experiences } from '@/lib/data/profile';

interface ExperienceProps {
  dict: Dictionary;
  locale: Locale;
}

function formatDate(dateString: string, locale: Locale): string {
  const [year, month] = dateString.split('-');
  const date = new Date(parseInt(year), parseInt(month) - 1);
  
  return date.toLocaleDateString(locale === 'es' ? 'es-MX' : 'en-US', {
    year: 'numeric',
    month: 'long',
  });
}

export default function Experience({ dict, locale }: ExperienceProps) {
  return (
    <section id="experience" className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          {dict.experience.title}
        </h2>
        <div className="space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="border-l-4 border-gray-300 pl-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {exp.role[locale]}
              </h3>
              <div className="text-gray-600 mb-4">
                <span className="font-medium">{exp.company}</span>
                {' • '}
                <span>
                  {formatDate(exp.period.start, locale)}
                  {' – '}
                  {exp.period.end ? formatDate(exp.period.end, locale) : dict.experience.present}
                </span>
              </div>
              <ul className="space-y-2">
                {exp.responsibilities[locale].map((responsibility, index) => (
                  <li key={index} className="text-gray-700">
                    • {responsibility}
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
