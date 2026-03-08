'use client';
import {
  SiReact,
  SiHtml5,
  SiJavascript,
  SiPostgresql,
  SiMongodb,
  SiCplusplus,
  SiPython,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
} from "react-icons/si";
import { TbBinaryTree, TbBrandCSharp, TbBrandCss3 } from "react-icons/tb";
import { Monitor, Server, Code, Brain, Database } from "lucide-react";

type Level = "Proficient" | "Familiar" | "Exploring";

type TechItem = {
  name: string;
  icon: any;
  level: Level;
};

type Category = {
  icon: any;
  items: TechItem[];
};

export const techMatrix: Record<string, Category> = {
  Frontend: {
    icon: Monitor,
    items: [
      { name: "React", icon: SiReact, level: "Proficient" },
      { name: "JavaScript", icon: SiJavascript, level: "Familiar" },
      { name: "HTML", icon: SiHtml5, level: "Proficient" },
      { name: "CSS", icon: TbBrandCss3, level: "Proficient" }
    ]
  },

  "Backend & Databases": {
    icon: Server,
    items: [
      { name: "C#", icon: TbBrandCSharp, level: "Proficient" },
      { name: "Oracle SQL", icon: Database, level: "Proficient" },
      { name: "PostgreSQL", icon: SiPostgresql, level: "Familiar" }
    ]
  },

  "Programming Languages": {
    icon: Code,
    items: [
      { name: "C++", icon: SiCplusplus, level: "Proficient" },
      { name: "Python", icon: SiPython, level: "Proficient" },
      { name: "Assembly Language", icon: SiMongodb, level: "Familiar" }
    ]
  },

  "Core CS": {
    icon: TbBinaryTree,
    items: [
      { name: "Data Structures & Algorithms", icon: TbBinaryTree, level: "Proficient" },
      { name: "Design & Analysis of Algorithms", icon: TbBinaryTree, level: "Proficient" }
    ]
  },

  "AI / Machine Learning": {
    icon: Brain,
    items: [
      { name: "NumPy", icon: SiNumpy, level: "Exploring" },
      { name: "Pandas", icon: SiPandas, level: "Exploring" },
      { name: "Scikit-learn", icon: SiScikitlearn, level: "Exploring" }
    ]
  }
};
// Map level to dot color
const levelDotColor: Record<Level, string> = {
  Proficient: "#2563EB", // cobalt
  Familiar: "#64748B",   // muted slate
  Exploring: "#94A3B8",  // lighter slate
};

export default function TechMatrix() {
  return (
      <section id="tech-stack" className="tech-matrix-section bg-black border 5px solid green">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">
          Technology Matrix
        </h1>
      <div className="tech-matrix-container">
        {/* Grid of categories */}
        <div className="categories-grid">
          {Object.entries(techMatrix).map(([category, data]) => {
            const Icon = data.icon;
            return (
              <div key={category} className="category-card">
                {/* Category Header */}
                <div className="category-header">
                  <Icon size={18} className="category-icon" />
                  <h3 className="category-title">{category}</h3>
                </div>

                {/* Tech items grid */}
                <div className="tech-grid">
                  {data.items.map((tech) => {
                    const Logo = tech.icon;
                    return (
                      <div key={tech.name} className="tech-card">
                        <Logo size={16} className="tech-icon" />
                        <span className="tech-name">{tech.name}</span>
                        <span
                          className="level-dot"
                          style={{ backgroundColor: levelDotColor[tech.level] }}
                          title={`${tech.level} – ${
                            tech.level === "Proficient"
                              ? "Production Ready"
                              : tech.level === "Familiar"
                              ? "Working Knowledge"
                              : "Currently Learning"
                          }`}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .tech-matrix-section {
          width: 100%;
          background: black; /* deep navy */
          padding: 4rem 1.5rem;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .tech-matrix-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        /* Categories grid – responsive, min 250px per category */
        .categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .category-card {
          border: 1px solid #1e293b; /* slate border */
          border-radius: 0.75rem;
          padding: 1.25rem;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          background: transparent;
        }

        .category-card:hover {
          border-color: #2563eb; /* cobalt */
          box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1); /* faint glow */
        }

        .category-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .category-icon {
          color: #64748b; /* muted slate */
        }

        .category-title {
          color: #f8fafc; /* off-white */
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 0.025em;
          text-transform: uppercase;
        }

        /* Tech items grid – each item as a micro‑card */
        .tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 0.75rem;
        }

        .tech-card {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 0.75rem;
          border: 1px solid #1e293b;
          border-radius: 0.5rem;
          background: transparent;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          cursor: default;
          color: #f8fafc;
          font-size: 0.875rem;
        }

        .tech-card:hover {
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }

        .tech-icon {
          color: #64748b;
          flex-shrink: 0;
        }

        .tech-name {
          flex: 1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .level-dot {
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 50%;
          flex-shrink: 0;
          transition: transform 0.2s ease;
        }

        .tech-card:hover .level-dot {
          transform: scale(1.2);
        }

        /* Optional: Add subtle hover effect on dot */
      `}</style>
    </section>
  );
}