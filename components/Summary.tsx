import type { Dictionary } from '@/lib/i18n/dictionaries';

interface SummaryProps {
  dict: Dictionary;
}

export default function Summary({ dict }: SummaryProps) {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          {dict.summary.title}
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          {dict.summary.content}
        </p>
      </div>
    </section>
  );
}
