import type { Locale } from '@/lib/i18n/config';
import type { Dictionary } from '@/lib/i18n/dictionaries';
import { volunteering } from '@/lib/data/profile';

interface VolunteeringProps {
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

export default function Volunteering({ dict, locale }: VolunteeringProps) {
  return (
    <section id="volunteering" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-12">
          {dict.volunteering.title}
        </h2>
        <div className="space-y-6 sm:space-y-8">
          {volunteering.map((vol) => (
            <div 
              key={vol.id} 
              className="bg-white rounded-xl p-6 sm:p-8 border-l-4 border-green-600 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
                {vol.role[locale]}
              </h3>
              <div className="text-sm sm:text-base text-gray-600 mb-4 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                <span className="font-medium">{vol.organization}</span>
                <span className="hidden sm:inline">•</span>
                <span>
                  {formatDate(vol.period.start, locale)}
                  {' – '}
                  {vol.period.end ? formatDate(vol.period.end, locale) : dict.experience.present}
                </span>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {vol.description[locale]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
