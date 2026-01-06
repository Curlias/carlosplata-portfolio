import type { Dictionary } from '@/lib/i18n/dictionaries';

interface SummaryProps {
  dict: Dictionary;
}

export default function Summary({ dict }: SummaryProps) {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
          {dict.summary.title}
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
          {dict.summary.content}
        </p>
      </div>
    </section>
  );
}
