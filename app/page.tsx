"use client";

import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaArrowRight,
  FaInstagram,
  FaWhatsapp,
  FaGitlab,
} from "react-icons/fa";
import { ProjectCard } from "@/components/ProjectCard";
import { myProjects } from "@/data/project";
import { useState, useEffect } from "react";

// const SkillGroup = ({
//   title,
//   items,
// }: {
//   title: string;
//   items: string[];
// }) => {
//   return (
//     <div>
//       <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
//         {title}
//       </h3>

//       <div className="flex flex-wrap gap-3">
//         {items.map((item) => (
//           <span
//             key={item}
//             className="
//               bg-white dark:bg-gray-800
//               border border-gray-200 dark:border-gray-700
//               text-gray-700 dark:text-gray-300
//               px-4 py-2 rounded-lg text-sm font-medium
//               hover:shadow-md transition
//             "
//           >
//             {item}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// };

const SkillGroup = ({
  title,
  items,
}: {
  title: string;
  description?: string;
  items: string[];
}) => {
  return (
    <div className="
      bg-white dark:bg-gray-800
      border border-gray-200 dark:border-gray-700
      rounded-xl p-6
      hover:-translate-y-1 hover:shadow-lg
      transition-all
    ">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
        {title}
      </h3>

      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="
              px-3 py-1.5
              text-sm font-medium
              rounded-lg
              bg-gray-100 dark:bg-gray-700
              text-gray-700 dark:text-gray-300
            "
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

const certifications = [
  {
    id: "cert-hacktiv8-fsj",
    title: "Hacktiv8",
    issuer: "Fullstack JavaScript",
    issuedAt: "2024-04-01",
    displayDate: "Issued April 2024",
    link: "https://drive.google.com/file/d/1RzuvwieIDY-ggVZ-wi5vi92LjzTsQo4N/view",
  },
  {
    id: "cert-hackerrank-js",
    title: "Hackerrank",
    issuer: "Problem Solving, JavaScript, NodeJS, SQL, CSS, React",
    issuedAt: "2024-04-01",
    displayDate: "Issued April – June 2024",
    link: "https://drive.google.com/drive/folders/1zxUqWz8-UgjfP5W1VaWwE9e5vx4mihDy",
  },
  {
    id: "cert-ug-oop",
    title: "Universitas Gunadarma",
    issuer: "Occupation of Object Programmer",
    issuedAt: "2023-09-01",
    displayDate: "Issued September 2023 • Expired September 2026",
    link: "https://drive.google.com/file/d/1J22hUwlKa61hwK5JAbAxQcRPfLo93I4F/view",
  },
  {
    id: "cert-binar-android",
    title: "Binar Academy",
    issuer: "Android Engineering",
    issuedAt: "2023-02-01",
    displayDate: "Issued February 2023",
    link: "https://drive.google.com/file/d/1zMmnh6xMQcUttjwRzNd26kNyYl3d82Xl/view",
  },
  {
    id: "cert-ug-xml",
    title: "Universitas Gunadarma",
    issuer: "XML Programming Language",
    issuedAt: "2022-11-01",
    displayDate: "Issued November 2022",
    link: "https://drive.google.com/file/d/1C6c39KRMIyuu7C0ZzOXoAGVTpfU5jdic/view",
  },
  {
    id: "cert-ug-html",
    title: "Universitas Gunadarma",
    issuer: "Building Website using HTML 5",
    issuedAt: "2022-10-01",
    displayDate: "Issued October 2022",
    link: "https://drive.google.com/file/d/1ZZcuzLPVNRGPxfV0Tw010sjHuXVQbDEn/view",
  },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle intersection observer to update active section
  useEffect(() => {
    const sections = ["home", "about", "tech stack", "projects", "contact"];

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setMobileMenuOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
      {/* Navigation for single page */}
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-gray-200/50 dark:border-gray-800/50 rounded-b-lg shadow-sm mb-8">
        <div className="w-full mx-auto px-10 py-4 flex justify-between items-center">
          {/* Logo / Name */}
          <button
            onClick={() => scrollToSection("home")}
            className="text-lg font-extrabold tracking-tight text-gray-900 dark:text-white hover:text-blue-600 transition"
          >
            Adam Rizqi Romadhon
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {["about", "tech stack", "projects", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`relative text-sm font-medium capitalize transition
                  ${
                    activeSection === section
                      ? "text-blue-600"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600"
                  }
                `}
              >
                {section}

                {/* Active underline */}
                {activeSection === section && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-blue-600 rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 dark:border-gray-700"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden px-4 pb-4">
            <div className="rounded-2xl bg-white dark:bg-gray-900 shadow-lg border border-gray-200 dark:border-gray-800 p-4 space-y-3">
              {["about", "tech stack", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition
                    ${
                      activeSection === section
                        ? "bg-blue-50 text-blue-600 dark:bg-blue-950"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }
                  `}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-[90vh] flex flex-col justify-center py-20 overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center px-4">
          {/* Text Column */}
          <div className="order-2 md:order-1">
            <span className="inline-block mb-3 text-sm font-medium text-blue-600">
              👋 Hello, welcome to my portfolio
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
              I&apos;m{" "}
              <span className="text-blue-600">Adam Rizqi Romadhon</span>
            </h1>

            <h2 className="text-xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
              Back End Developer
            </h2>

            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl leading-relaxed">
              Backend Developer specializing in building scalable and reliable
              microservices using
              <span className="font-medium text-gray-800 dark:text-gray-200"> NestJS</span>,
              <span className="font-medium text-gray-800 dark:text-gray-200"> PostgreSQL</span>,
              and
              <span className="font-medium text-gray-800 dark:text-gray-200"> RabbitMQ</span>.
              Passionate about clean architecture and maintainable systems.
            </p>

            {/* Tech Pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {["NestJS", "PostgreSQL", "Prisma", "RabbitMQ", "Microservices"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full bg-blue-50 text-blue-600 dark:bg-blue-950"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                onClick={() => scrollToSection("projects")}
                className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all flex items-center gap-2 cursor-pointer font-medium"
              >
                View Projects <FaArrowRight />
              </a>

              <a
                onClick={() => scrollToSection("contact")}
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all cursor-pointer font-medium"
              >
                Contact Me
              </a>

              <a
                href="https://docs.google.com/document/d/1Nmbkh7MU7lk-lulJAUZrvt8fUDvox0qaiaAth2l6vCY/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 font-medium"
              >
                <FaDownload /> View CV
              </a>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative w-full flex justify-center order-1 md:order-2 mb-10 md:mb-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl ring-4 ring-blue-500">
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-blue-600/20 blur-2xl rounded-full -z-10" />

              <Image
                src="/images/adam.png"
                alt="Adam Rizqi Romadhon"
                width={320}
                height={320}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-10 scroll-mt-20">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-10">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* LEFT - ABOUT TEXT */}
          <div className="space-y-6 border-l-4 border-blue-600 pl-6">
            {/* Quick Info */}
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium">
                📍 Indonesia
              </span>
              <span className="px-4 py-2 rounded-full bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm font-medium">
                💼 Backend Developer
              </span>
              <span className="px-4 py-2 rounded-full bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm font-medium">
                ⚙️ Microservices
              </span>
            </div>

            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 text-justify">
              I have a bachelor's degree in informatics engineering and work as a
              {" "}
              <span className="font-medium text-gray-800 dark:text-gray-200">
                Backend Developer
              </span>{" "}
               in Indonesia. I specialize in developing backend systems that address actual business issues that are scalable, dependable, and maintainable.
            </p>

            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 text-justify">
              I began my technological adventure by developing mobile applications, which gave me a better understanding of user-oriented thinking, clean architecture, and organized code. I eventually moved into backend programming and had a keen interest in business logic implementation, system architecture, and API development.
            </p>

            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 text-justify">
              In a microservices setting, I've worked professionally with
              {" "}
              <span className="font-medium text-gray-800 dark:text-gray-200">NestJS</span>,{" "}
              <span className="font-medium text-gray-800 dark:text-gray-200">Node.js</span>,{" "}
              <span className="font-medium text-gray-800 dark:text-gray-200">PostgreSQL</span>,{" "}
              and{" "}
              <span className="font-medium text-gray-800 dark:text-gray-200">RabbitMQ.</span>{" "}
              I have experience in RESTful API development, asynchronous communication, transactional data management, and database architecture.
            </p>

            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 text-justify">
              I appreciate working with cross-functional teams to create scalable and reliable systems, and I appreciate clear, understandable, and well-tested code. I'm now working to increase my knowledge of distributed systems, performance optimization, and backend architecture.
            </p>
          </div>

          {/* RIGHT - EDUCATION & EXPERIENCE */}
          <div className="space-y-10">
            {/* Education */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Education
              </h3>

              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 transition hover:-translate-y-1 hover:shadow-lg">
                  <h4 className="font-bold">Hacktiv8</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Full Stack JavaScript Immersive Program
                  </p>
                  <p className="text-sm text-gray-500">
                    Jan 2024 – Apr 2024 · Jakarta
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 transition hover:-translate-y-1 hover:shadow-lg">
                  <h4 className="font-bold">Gunadarma University</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Bachelor of Informatics Engineering
                  </p>
                  <p className="text-sm text-gray-500">
                    2019 – 2023 · Depok
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    GPA: 3.80 / 4.00
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 transition hover:-translate-y-1 hover:shadow-lg">
                  <h4 className="font-bold">Binar Academy</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Android Engineering
                  </p>
                  <p className="text-sm text-gray-500">
                    Oct 2022 – Feb 2023 · Online
                  </p>
                </div>
              </div>
            </div>

            <div className="h-px bg-gray-200 dark:bg-gray-700 my-8" />

            {/* Work Experience */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Work Experience
              </h3>

              <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 space-y-3 transition hover:-translate-y-1 hover:shadow-lg">
                <h4 className="font-bold">PT. Kabtour Media Indonesia</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Backend Developer
                </p>
                <p className="text-sm text-gray-500">
                  Jan 2025 – Jan 2026
                </p>

                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>
                    Designed and maintained multiple backend microservices (transaction, wallet, promotion, location, cart, messaging) using NestJS.
                  </li>
                  <li>
                    Built and optimized REST APIs with PostgreSQL, Prisma ORM, and database transactions to ensure data consistency.
                  </li>
                  <li>
                    Implemented asynchronous service-to-service communication using RabbitMQ.
                  </li>
                  <li>
                    Wrote unit tests using Jest to maintain service reliability.
                  </li>
                  <li>
                    Contributed to CI/CD pipelines using GitHub Actions and containerized services with Docker Compose.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" className="py-10 px-10 scroll-mt-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Backend Tech Stack
        </h2>

        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mb-10">
          Technologies and tools I use to design, build, and maintain scalable backend systems and microservices.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SkillGroup
            title="Backend Development"
            items={[
              "Node.js",
              "NestJS",
              "JavaScript",
              "TypeScript",
              "REST API Design",
              "DTO Validation"
            ]}
          />

          <SkillGroup
            title="Architecture & System Design"
            items={[
              "Microservices Architecture",
              "Event-driven Architecture",
              "Message Queue (RabbitMQ)",
              "Service-to-Service Communication",
            ]}
          />

          <SkillGroup
            title="Database & Persistence"
            items={[
              "PostgreSQL",
              "Prisma ORM",
              "Type ORM",
              "Data Modeling",
              "Query Optimization",
            ]}
          />

          <SkillGroup
            title="Tools & Collaboration"
            items={[
              "Git",
              "Jest",
              "Docker",
              "Postman",
              "Insomnia",
              "ClickUp",
            ]}
          />
        </div>
      </section>

      <div className="mt-2 px-10 pb-16">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
          Certifications
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[...certifications]
            .sort(
              (a, b) =>
                new Date(b.issuedAt).getTime() -
                new Date(a.issuedAt).getTime()
            )
            .map((cert) => (
              <div
                key={cert.id}
                className="
                  bg-white dark:bg-gray-800
                  p-6 rounded-xl
                  border border-gray-200 dark:border-gray-700
                  hover:-translate-y-1 hover:shadow-lg
                  transition-all
                ">
                <h4 className="font-semibold text-base text-gray-900 dark:text-white">
                  {cert.title}
                </h4>

                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  {cert.issuer}
                </p>

                <p className="text-sm text-gray-500 mt-2">
                  {cert.displayDate}
                </p>

                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-4 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    View Certificate →
                  </a>
                )}
              </div>
            ))}
        </div>
      </div>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 md:px-10 scroll-mt-30">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {myProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 scroll-mt-20 px-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Contact Me
        </h2>

        <p className="text-gray-600 dark:text-gray-400 max-w mb-10">
          Get in touch with me right now to talk about how I can support you in achieving your objectives.
        </p>

        <div className="grid grid-cols-1 gap-8">
          {/* LEFT - Contact Info */}
          <div className="space-y-6">
            {/* Availability */}
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm font-medium">
                🟢 Open to Work
              </span>
              <span className="text-sm text-gray-500">
                Backend
              </span>
              <span className="text-sm text-gray-500">
                Frontend
              </span>
              <span className="text-sm text-gray-500">
                FullStack
              </span>
            </div>
            {/* Email */}
            <a
              href="mailto:adamrizqi.arr@gmail.com"
              className="
                flex items-center gap-4
                bg-white dark:bg-gray-800
                border border-gray-200 dark:border-gray-700
                rounded-xl p-5
                hover:-translate-y-1 hover:shadow-lg
                transition-all
              "
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600">
                📧
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium text-gray-800 dark:text-gray-200 break-all">
                  adamrizqi.arr@gmail.com
                </p>
              </div>
            </a>

            {/* Phone / WhatsApp */}
            <a
              href="https://wa.me/6281280362230"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-4
                bg-white dark:bg-gray-800
                border border-gray-200 dark:border-gray-700
                rounded-xl p-5
                hover:-translate-y-1 hover:shadow-lg
                transition-all
              "
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-green-50 dark:bg-green-900/30 text-green-600">
                <FaWhatsapp size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">WhatsApp</p>
                <p className="font-medium text-gray-800 dark:text-gray-200">
                  Click Here to Chat
                </p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/adam-rizqi-romadhon-6962b51bb/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-4
                bg-white dark:bg-gray-800
                border border-gray-200 dark:border-gray-700
                rounded-xl p-5
                hover:-translate-y-1 hover:shadow-lg
                transition-all
              "
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600">
                  <FaLinkedin size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">LinkedIn</p>
                <p className="font-medium text-gray-800 dark:text-gray-200">
                  Click Here to See My Profile
                </p>
              </div>
            </a>

            {/* Location */}
            <a
              href="https://maps.app.goo.gl/KzpZfmkRY4BeoCYu5"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-4
                bg-white dark:bg-gray-800
                border border-gray-200 dark:border-gray-700
                rounded-xl p-5
                hover:-translate-y-1 hover:shadow-lg
                transition-all
              "
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-50 dark:bg-purple-900/30 text-purple-600">
                📍
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium text-gray-800 dark:text-gray-200">
                  Depok, Jawa Barat, Indonesia
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200 dark:border-gray-800 mt-16 px-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Adam Rizqi Romadhon. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/aaridhon19"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition-colors"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://gitlab.com/aaridhon19"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition-colors"
            >
              <FaGitlab size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/adam-rizqi-romadhon-6962b51bb/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://www.instagram.com/aa_ridhon19/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition-colors"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://wa.me/6281280362230"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition-colors"
            >
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
