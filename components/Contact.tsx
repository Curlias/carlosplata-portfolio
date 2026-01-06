import type { Dictionary } from '@/lib/i18n/dictionaries';
import { profile } from '@/lib/data/profile';

interface ContactProps {
  dict: Dictionary;
}

export default function Contact({ dict }: ContactProps) {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          {dict.contact.title}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {dict.contact.email}
            </h3>
            <a 
              href={`mailto:${profile.email}`}
              className="text-blue-600 hover:text-blue-800"
            >
              {profile.email}
            </a>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {dict.contact.linkedin}
            </h3>
            <a 
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              linkedin.com/in/carlohpl
            </a>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {dict.contact.location}
            </h3>
            <p className="text-gray-700">
              {profile.location}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
