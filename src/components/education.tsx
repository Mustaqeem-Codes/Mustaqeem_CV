"use client";

import { GraduationCap, Award, ExternalLink } from "lucide-react";

type Education = {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  keyCourses: string[];
};

type Certification = {
  title: string;
  issuer: string;
  date: string;
  verificationUrl: string;
};

export const educationData: Education = {
  degree: "BS Computer Science",
  institution: "University of Engineering and Technology (UET) Lahore",
  location: "Lahore, Pakistan",
  duration: "2024 — 2028",
  keyCourses: [
    "Data Structures & Algorithms",
    "Operating Systems",
    "Database Systems",
    "Computer Networks",
    "Software Engineering"
  ]
};

export const certificationsData: Certification[] = [
  {
    title: "DSA Fundamentals",
    issuer: "SimpliLearn",
    date: "2025",
    verificationUrl: "https://simpli-web.app.link/e/0TjDhRMZk1b"
  },
  {
    title: "AI Prompt Engineering ",
    issuer: "Coursera",
    date: "2025",
    verificationUrl: "https://coursera.org/share/aee71241cf07e18ebe9a553bf6ec6bef"
  }
];

export default function CredentialVault() {
  return (
    <section id="education" className="w-full bg-black px-6 py-16 md:py-24">
      <h1 className="text-3xl font-bold text-white mb-8 text-center">Education & Certifications</h1>
      <div className="max-w-6xl mx-auto">
        {/* Grid: Education left, Certifications right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Education Card */}
          <div className="group relative border border-[#1e293b] rounded-xl p-8 transition-all duration-200 hover:border-blue-600 hover:shadow-[0_0_0_4px_rgba(37,99,235,0.1)] bg-white/[0.02]">
            {/* Header */}
            <div className="flex items-center gap-2 mb-4 text-gray-400">
              <GraduationCap size={18} />
              <span className="text-sm tracking-wide">Education</span>
            </div>

            <h3 className="text-xl font-semibold text-white">
              {educationData.degree}
            </h3>
            <p className="text-gray-300 mt-1">{educationData.institution}</p>
            <p className="text-sm text-gray-500 mt-2">
              {educationData.location} • {educationData.duration}
            </p>

            {/* Key Courses */}
            <div className="mt-6 flex flex-wrap gap-2">
              {educationData.keyCourses.map((course) => (
                <span
                  key={course}
                  className="text-xs px-3 py-1 rounded-full border border-[#1e293b] bg-white/5 text-gray-300"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>

          {/* Certifications Stack */}
          <div className="flex flex-col gap-4">
            {certificationsData.map((cert) => (
              <div
                key={cert.title}
                className="group relative border border-[#1e293b] rounded-xl p-6 transition-all duration-200 hover:border-blue-600 hover:shadow-[0_0_0_4px_rgba(37,99,235,0.1)] bg-white/[0.02]"
              >
                <div className="flex items-center gap-2 mb-2 text-gray-400">
                  <Award size={16} />
                  <span className="text-sm">Certification</span>
                </div>

                <h4 className="text-base font-semibold text-white">
                  {cert.title}
                </h4>
                <p className="text-sm text-gray-400 mt-1">
                  {cert.issuer} • {cert.date}
                </p>

                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Verify Credential
                  <ExternalLink size={12} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}