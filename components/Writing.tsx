import type { Locale } from '@/lib/i18n/config';
import type { Dictionary } from '@/lib/i18n/dictionaries';
import { articles } from '@/lib/data/profile';

interface WritingProps {
  dict: Dictionary;
  locale: Locale;
}

export default function Writing({ dict, locale }: WritingProps) {
  // Show placeholder if no articles yet
  if (articles.length === 0) {
    return (
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {dict.writing.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12">
            {dict.writing.subtitle}
          </p>
          <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
            <p className="text-base sm:text-lg text-gray-600">
              {locale === 'es' 
                ? 'Artículos técnicos próximamente' 
                : 'Technical articles coming soon'}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {dict.writing.title}
        </h2>
        <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12">
          {dict.writing.subtitle}
        </p>
        <div className="space-y-6 sm:space-y-8">
          {articles.map((article) => (
            <article 
              key={article.id} 
              className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 hover:shadow-lg hover:border-gray-300 transition-all duration-300"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                {article.title[locale]}
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm mb-3">
                {new Date(article.date).toLocaleDateString(
                  locale === 'es' ? 'es-MX' : 'en-US',
                  { year: 'numeric', month: 'long', day: 'numeric' }
                )}
              </p>
              <p className="text-sm sm:text-base text-gray-700">
                {article.excerpt[locale]}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
