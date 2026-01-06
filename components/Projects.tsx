import type { Locale } from '@/lib/i18n/config';
import type { Dictionary } from '@/lib/i18n/dictionaries';
import { projects } from '@/lib/data/profile';

interface ProjectsProps {
  dict: Dictionary;
  locale: Locale;
}

export default function Projects({ dict, locale }: ProjectsProps) {
  // Show placeholder if no projects yet
  if (projects.length === 0) {
    return (
      <section id="projects" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            {dict.projects.title}
          </h2>
          <p className="text-gray-600 text-center py-12">
            {locale === 'es' 
              ? 'Proyectos técnicos próximamente' 
              : 'Technical projects coming soon'}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          {dict.projects.title}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="border border-gray-200 p-6 rounded-lg hover:border-gray-400 transition-colors"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {project.title[locale]}
              </h3>
              <p className="text-gray-700 mb-4">
                {project.description[locale]}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded"
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
                      className="text-blue-600 hover:text-blue-800"
                    >
                      {dict.projects.viewProject} →
                    </a>
                  )}
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      GitHub →
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
