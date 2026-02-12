'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  FaGithub,
  FaGlobe,
  FaArrowLeft,
  FaGitlab,
  FaTimes,
  FaDownload,
} from 'react-icons/fa';
import { myProjects } from '@/data/project';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = myProjects.find((p) => p.id === id);

  const [isZoomOpen, setIsZoomOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ESC to close modal
  useEffect(() => {
    if (!isZoomOpen) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsZoomOpen(false);
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isZoomOpen]);

  if (!project) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <p className="text-lg font-semibold">Project not found</p>
        <Link href="/#projects" className="mt-4 text-blue-600 flex items-center gap-2">
          <FaArrowLeft /> Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      {/* Back */}
      <Link
        href="/#projects"
        className="text-sm text-gray-500 flex items-center gap-2 mb-6 hover:text-blue-600"
      >
        <FaArrowLeft /> Back to Projects
      </Link>

      {/* Card */}
      <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow">
        {/* Image */}
        <div className="relative h-64 md:h-80 group">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />

          {/* Zoom Button */}
          <button
            onClick={() => setIsZoomOpen(true)}
            className="absolute inset-0 flex items-center justify-center
              bg-black/0 group-hover:bg-black/40 transition"
          >
          </button>
        </div>

        {/* Content */}
        <div className="p-4 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {project.title}
          </h1>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900
                  text-blue-800 dark:text-blue-200 rounded-full text-xs sm:text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Description */}
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-base md:text-lg">{project.description}</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Features</h2>
            <ul className="list-disc pl-5 space-y-2">
              {project.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">
              Challenges & Solutions
            </h2>
            <p>{project.challenges}</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Results</h2>
            <p>{project.results}</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4 mt-10">
            {project.webUrl && (
              <a
                href={project.webUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2
                  bg-gray-800 text-white rounded-lg hover:bg-gray-700"
              >
                <FaGlobe /> View Website
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2
                  bg-gray-800 text-white rounded-lg hover:bg-gray-700"
              >
                <FaGithub /> View Code
              </a>
            )}
            {project.gitlabUrl && (
              <a
                href={project.gitlabUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2
                  bg-gray-800 text-white rounded-lg hover:bg-gray-700"
              >
                <FaGitlab /> View Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2
                  bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                <FaGlobe /> Live Demo
              </a>
            )}
            {project.prototypeUrl && (
              <a
                href={project.prototypeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2
                  bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                <FaGlobe /> View Prototype
              </a>
            )}
            {project.downloadAppUrl && (
              <a
                href={project.downloadAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2
                  bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                <FaDownload /> Download App
              </a>
            )}
          </div>
        </div>
      </div>

      {/* ZOOM MODAL */}
      {isZoomOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setIsZoomOpen(false)}
        >
          <button
            className="absolute top-6 right-6 text-white text-2xl"
            onClick={() => setIsZoomOpen(false)}
          >
            <FaTimes />
          </button>

          <div
            className="relative w-[90vw] h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}