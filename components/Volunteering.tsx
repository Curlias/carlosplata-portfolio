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
    <section id="volunteering" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          {dict.volunteering.title}
        </h2>
        <div className="space-y-8">
          {volunteering.map((vol) => (
            <div key={vol.id} className="border-l-4 border-gray-300 pl-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {vol.role[locale]}
              </h3>
              <div className="text-gray-600 mb-4">
                <span className="font-medium">{vol.organization}</span>
                {' • '}
                <span>
                  {formatDate(vol.period.start, locale)}
                  {' – '}
                  {vol.period.end ? formatDate(vol.period.end, locale) : dict.experience.present}
                </span>
              </div>
              <p className="text-gray-700">
                {vol.description[locale]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
