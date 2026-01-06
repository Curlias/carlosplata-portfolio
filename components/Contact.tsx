import type { Dictionary } from '@/lib/i18n/dictionaries';
import { profile } from '@/lib/data/profile';

interface ContactProps {
  dict: Dictionary;
}

export default function Contact({ dict }: ContactProps) {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-12">
          {dict.contact.title}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">
              {dict.contact.email}
            </h3>
            <a 
              href={`mailto:${profile.email}`}
              className="text-sm sm:text-base text-blue-600 hover:text-blue-800 break-all transition-colors"
            >
              {profile.email}
            </a>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">
              {dict.contact.linkedin}
            </h3>
            <a 
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-base text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1"
            >
              linkedin.com/in/carlohpl
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">
              {dict.contact.location}
            </h3>
            <p className="text-sm sm:text-base text-gray-700">
              {profile.location}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
