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
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {dict.writing.title}
          </h2>
          <p className="text-gray-600 mb-12">
            {dict.writing.subtitle}
          </p>
          <p className="text-gray-600 text-center py-12">
            {locale === 'es' 
              ? 'Artículos técnicos próximamente' 
              : 'Technical articles coming soon'}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {dict.writing.title}
        </h2>
        <p className="text-gray-600 mb-12">
          {dict.writing.subtitle}
        </p>
        <div className="space-y-8">
          {articles.map((article) => (
            <article key={article.id} className="border-b border-gray-200 pb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {article.title[locale]}
              </h3>
              <p className="text-gray-500 text-sm mb-3">
                {new Date(article.date).toLocaleDateString(
                  locale === 'es' ? 'es-MX' : 'en-US',
                  { year: 'numeric', month: 'long', day: 'numeric' }
                )}
              </p>
              <p className="text-gray-700">
                {article.excerpt[locale]}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
