"use client";

import { ExternalLink, Github, Play, FolderCode } from "lucide-react";

type Project = {
  title: string;
  description: string[];
  tech: string[];
  type: "web" | "desktop" | "console";
  liveUrl?: string;
  repoUrl?: string;
  demoUrl?: string;
  year: string;
};

// Extend experience data into projects with appropriate metadata
const projects: Project[] = [
  {
    title: "MediConnect - Online Clinic System",
    description: [
      "Developed 20+ React components for a humanitarian aid platform, integrating C# backend APIs with MongoDB-backed services.",
      "In Prgress | Under development",
    ],
    tech: ["React", "Node.js", "PostgreSQL"],
    type: "web",
    liveUrl: "https://medi-connect-health.vercel.app/",
    year: "2026",
  },
  {
    title: "Flood Aid Platform",
    description: [
      "Developed 20+ React components for a humanitarian aid platform, integrating C# backend APIs with MongoDB-backed services.",
      "Implemented donation workflows, user contact interfaces, and responsive UI layouts to support aid requests and donor interactions.",
    ],
    tech: ["React", "C#", "MongoDB"],
    type: "web",
    liveUrl: "https://flood-aid-94zg.vercel.app/",
    repoUrl: "#",
    year: "2026",
  },
  {
    title: "DSA Insight",
    description: [
      "Built a React-based algorithm visualization platform demonstrating arrays, stacks, queues, hashing, and linked lists.",
      "Engineered interactive UI animations to illustrate algorithm operations and state transitions during execution.",
    ],
    tech: ["React", "JavaScript"],
    type: "web",
    liveUrl: "https://dsa-insight.vercel.app/",
    repoUrl: "https://github.com/Mustaqeem-Codes/DSA_Insight",
    year: "2026",
  },
  {
    title: "Collaborative Whiteboard",
    description: [
      "Built a real-time collaborative whiteboard using TCP socket communication supporting up to 50 concurrent users.",
      "Designed client–server synchronization logic to maintain consistent drawing state across connected participants.",
    ],
    tech: ["C#", "WinForms", "TCP Sockets"],
    type: "desktop",
    repoUrl: "https://github.com/Mustaqeem-Codes/Collaborative-White-Board",
    demoUrl: "#",
    year: "2026",
  },
  {
    title: "Job Portal System",
    description: [
      "Developed a multi-role job portal using C# WinForms and Oracle SQL enabling employers to publish listings and candidates to submit applications.",
      "Implemented role-based access control, database CRUD operations, and input validation.",
    ],
    tech: ["C#", "WinForms", "Oracle SQL"],
    type: "desktop",
    repoUrl: "https://github.com/Mustaqeem-Codes/Job_Portal_Management_System",
    demoUrl: "#",
    year: "2025",
  },
  {
    title: "Number Guess Game",
    description: [
      "Developed a console-based number guessing game using Python with random number generation and user input handling.",
      "Structured modular functions for game flow control and input validation.",
    ],
    tech: ["Python"],
    type: "console",
    repoUrl: "https://github.com/Mustaqeem-Codes/Number_Guess_Game",
    year: "2025",
  },
  {
    title: "Airline Management System",
    description: [
      "Engineered a 2.6K LOC airline management system in C++ with 5 operational modules: Staff, Flights, Reservations, Seat Allocation, and Authentication.",
      "Implemented 28+ functions enabling flight search by ID, passenger name, and staff identifier.",
      "Built full CRUD data persistence across 5 structured text files using file I/O operations.",
    ],
    tech: ["C++", "File I/O"],
    type: "console",
    repoUrl: "https://github.com/Mustaqeem-Codes/Airline_Management_System",
    year: "2024",
  },
];

export default function ProjectSection() {
  return (
    <section id="projects" className="w-full bg-black px-6 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Featured Projects
        </h2>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group flex flex-col h-full border border-gray-800 rounded-xl bg-gray-900 p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-900/20"
            >
              {/* Project Header */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-blue-900/30 text-blue-300 rounded-md border border-blue-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-400">{project.year}</p>
              </div>

              {/* Description */}
              <div className="flex-1 mb-6">
                <ul className="space-y-2">
                  {project.description.map((point, i) => (
                    <li key={i} className="text-sm text-gray-300 flex gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons - Auto-aligned bottom */}
              <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-gray-800">
                {project.type === "web" ? (
                  <>
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#2563EB] text-white text-sm font-medium rounded-lg hover:bg-[#1D4ED8] transition-colors"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-400 text-sm font-medium rounded-lg cursor-default">
                        <FolderCode size={16} />
                        Case Study
                      </span>
                    )}
                    {project.repoUrl ? (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 border border-gray-700 text-gray-200 text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        <Github size={16} />
                        Source Code
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-400 text-sm font-medium rounded-lg cursor-default">
                        <FolderCode size={16} />
                        In Development
                      </span>
                    )}
                  </>
                ) : (
                  <>
                    {project.repoUrl ? (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#2563EB] text-white text-sm font-medium rounded-lg hover:bg-[#1D4ED8] transition-colors"
                      >
                        <Github size={16} />
                        View Repository
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-400 text-sm font-medium rounded-lg cursor-default">
                        <FolderCode size={16} />
                        Case Study
                      </span>
                    )}
                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 border border-gray-700 text-gray-200 text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        <Play size={16} />
                        Watch Demo
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-400 text-sm font-medium rounded-lg cursor-default">
                        <FolderCode size={16} />
                        In Development
                      </span>
                    )}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}