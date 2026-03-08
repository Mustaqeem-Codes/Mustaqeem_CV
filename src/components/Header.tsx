"use client";

import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Glassmorphic Navbar with Deep Navy */}
      <nav className="bg-[#0F172A]/80 backdrop-blur-xl border-b border-[#1e293b] px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Left: Brand */}
          <div className="text-2xl font-bold tracking-tight text-white">
            MUHAMMAD MUSTAQEEM
          </div>

          {/* Center: Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
            {["Home", "Tech Stack", "Projects", "Education", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="relative transition-colors duration-300 hover:text-blue-600 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Right: CTA Button (desktop) */}
          <a
            href="/Mustaqeem_CV.pdf"
            download
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg bg-[#2563EB] text-white hover:bg-[#1D4ED8] transition-colors shadow-lg shadow-blue-500/20"
          >
            Download Resume
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col gap-1.5   p-2 rounded-lg border border-[#1e293b] hover:border-white/30 transition"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-white transition-transform duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-transform duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden bg-[#0F172A]/90 backdrop-blur-xl border-b border-[#1e293b] overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-64 py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 text-sm font-medium text-zinc-300">
          {["Home", "Tech Stack", "Experience", "Projects"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="relative transition-colors duration-300 hover:text-blue-600 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="/Mustaqeem_CV.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg bg-[#2563EB] text-white hover:bg-[#1D4ED8] transition-colors shadow-lg shadow-blue-500/20"
              onClick={() => setIsMenuOpen(false)}
            >
              Download Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}