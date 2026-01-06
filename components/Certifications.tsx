import type { Dictionary } from '@/lib/i18n/dictionaries';
import { certifications } from '@/lib/data/profile';

interface CertificationsProps {
  dict: Dictionary;
}

export default function Certifications({ dict }: CertificationsProps) {
  return (
    <section id="certifications" className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          {dict.certifications.title}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <div 
              key={cert.id}
              className="border border-gray-200 bg-white p-6 rounded-lg"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {cert.name}
              </h3>
              <p className="text-gray-600">
                {cert.issuer}
              </p>
              {cert.date && (
                <p className="text-gray-500 text-sm mt-2">
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
