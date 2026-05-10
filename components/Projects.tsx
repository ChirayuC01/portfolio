
import React from 'react';
import SectionHeader from './SectionHeader';
import { PROJECTS } from '../data';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader
        title="Featured Projects"
        subtitle="Selected work that demonstrates technical depth."
      />

      <div className="grid md:grid-cols-2 gap-6">
        {PROJECTS.map((project, idx) => (
          <div
            key={idx}
            className="group flex flex-col bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden hover:border-emerald-500/30 transition-all duration-300"
          >
            {/* Accent strip */}
            <div className="h-[2px] bg-gradient-to-r from-emerald-500/60 via-emerald-400/30 to-transparent" />

            <div className="p-7 flex flex-col flex-1">
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors leading-tight">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 shrink-0">
                  {project.link && project.link !== '#' && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 text-slate-500 hover:text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition-all"
                      title="Live demo"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                  {project.githubLink && project.githubLink !== '#' && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 text-slate-500 hover:text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition-all"
                      title="Source code"
                    >
                      <Github size={16} />
                    </a>
                  )}
                </div>
              </div>

              {/* Stack tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400/80 font-mono text-[10px] uppercase tracking-wider rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">
                {project.description}
              </p>

              {/* Features */}
              <ul className="space-y-1.5 border-t border-slate-800/60 pt-4">
                {project.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-500">
                    <span className="text-emerald-500 mt-0.5 shrink-0 font-mono">›</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="https://github.com/ChirayuC01"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all font-mono text-sm"
        >
          <Github size={16} />
          github.com/ChirayuC01
        </a>
      </div>
    </div>
  );
};

export default Projects;
