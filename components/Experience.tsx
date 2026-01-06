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
    <section id="experience" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-12">
          {dict.experience.title}
        </h2>
        <div className="space-y-8 sm:space-y-12">
          {experiences.map((exp) => (
            <div 
              key={exp.id} 
              className="bg-white rounded-xl p-6 sm:p-8 border-l-4 border-blue-600 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
                {exp.role[locale]}
              </h3>
              <div className="text-sm sm:text-base text-gray-600 mb-4 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                <span className="font-medium">{exp.company}</span>
                <span className="hidden sm:inline">•</span>
                <span>
                  {formatDate(exp.period.start, locale)}
                  {' – '}
                  {exp.period.end ? formatDate(exp.period.end, locale) : dict.experience.present}
                </span>
              </div>
              <ul className="space-y-2.5">
                {exp.responsibilities[locale].map((responsibility, index) => (
                  <li key={index} className="text-sm sm:text-base text-gray-700 flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span>{responsibility}</span>
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
