import type { Dictionary } from '@/lib/i18n/dictionaries';
import { certifications } from '@/lib/data/profile';

interface CertificationsProps {
  dict: Dictionary;
}

export default function Certifications({ dict }: CertificationsProps) {
  return (
    <section id="certifications" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-12">
          {dict.certifications.title}
        </h2>
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {certifications.map((cert) => (
            <div 
              key={cert.id}
              className="border border-gray-200 bg-white p-5 sm:p-6 rounded-xl hover:shadow-lg hover:border-gray-300 transition-all duration-300"
            >
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                {cert.name}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                {cert.issuer}
              </p>
              {cert.date && (
                <p className="text-gray-500 text-xs sm:text-sm mt-2">
                  {cert.date}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
