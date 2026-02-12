import { Project } from '@/data/project';
import Link from 'next/link';
import Image from 'next/image';

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link href={`/projects/${project.id}`} className="group">
      <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300">
        
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={project.image || '/images/placeholder-project.jpg'}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            {project.title}
          </h3>

          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 mb-4">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech, i) => (
              <span
                key={i}
                className="text-xs px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-xs text-gray-500">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};