"use client";

import {
  CalendarClock,
  ArrowUp,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { SiX } from "react-icons/si";

type FooterData = {
  email: string;
  calendlyUrl: string;
  lastUpdated: Date;
  socialLinks: {
    linkedin: string;
    github: string;
    x: string;
  };
};

export const footerData: FooterData = {
  email: "mustaqeem.uet@gmail.com",
  calendlyUrl: "mailto:mustaqeem.uet@gmail.com",
  lastUpdated: new Date("2026-03-01"),
  socialLinks: {
    github: "https://github.com/Mustaqeem-Codes",
    linkedin: "https://www.linkedin.com/in/muhammadmustaqeem-webdev/",
    x: "https://x.com/MustaqeemCodes",
  },
};

export default function ConversionFooter() {
  const formattedDate = footerData.lastUpdated.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const primaryLink =
    footerData.calendlyUrl !== "#"
      ? footerData.calendlyUrl
      : `mailto:${footerData.email}`;

  return (
    <footer id="contact" className="w-full bg-black pt-32 pb-16">
      <div className="h-px w-full bg-[#1e293b] mb-16" />

      <div className="max-w-3xl mx-auto px-6 flex flex-col items-center text-center gap-10">

        {/* Final prompt */}
        <h2 className="text-2xl md:text-3xl font-semibold text-white">
          Let’s build something meaningful.
        </h2>

        {/* Primary CTA */}
        <a
          href={primaryLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
        >
          Start a Conversation
        </a>

        {/* Social icons */}
        <div className="flex items-center gap-6">
          <a
            href={`mailto:${footerData.email}`}
            title={footerData.email}
            className="text-gray-400 hover:text-blue-400 transition"
          >
            <Mail size={18} />
          </a>

          <a
            href={footerData.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#0A66C2] transition"
          >
            <Linkedin size={18} />
          </a>

          <a
            href={footerData.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <Github size={18} />
          </a>

          <a
            href={footerData.socialLinks.x}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <SiX size={16} />
          </a>
        </div>

        {/* Metadata */}
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <CalendarClock size={14} />
          Last updated: {formattedDate}
        </div>

        {/* Back to top */}
        <button
          onClick={scrollTop}
          className="mt-6 flex items-center justify-center w-10 h-10 rounded-full border border-[#1e293b] text-gray-400 hover:border-blue-600 hover:text-white transition"
        >
          <ArrowUp size={16} />
        </button>

      </div>
    </footer>
  );
}