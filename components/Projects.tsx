import type { Locale } from '@/lib/i18n/config';
import type { Dictionary } from '@/lib/i18n/dictionaries';
import { projects } from '@/lib/data/profile';

interface ProjectsProps {
  dict: Dictionary;
  locale: Locale;
}

export default function Projects({ dict, locale }: ProjectsProps) {
  if (projects.length === 0) {
    return (
      <section id="projects" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-12">
            {dict.projects.title}
          </h2>
          <div className="text-center py-12 bg-gray-50 rounded-xl">
            <p className="text-base sm:text-lg text-gray-600">
              {locale === 'es' 
                ? 'Proyectos técnicos próximamente' 
                : 'Technical projects coming soon'}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-12">
          {dict.projects.title}
        </h2>
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="border border-gray-200 bg-white p-6 rounded-xl hover:shadow-xl hover:border-gray-300 transition-all duration-300"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                {project.title[locale]}
              </h3>
              <p className="text-sm sm:text-base text-gray-700 mb-4">
                {project.description[locale]}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-blue-50 text-blue-700 text-xs sm:text-sm rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {(project.link || project.github) && (
                <div className="flex gap-4 text-sm">
                  {project.link && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 font-medium transition-colors inline-flex items-center gap-1"
                    >
                      {dict.projects.viewProject}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  )}
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 font-medium transition-colors inline-flex items-center gap-1"
                    >
                      GitHub
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
