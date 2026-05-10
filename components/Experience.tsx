
import React from 'react';
import SectionHeader from './SectionHeader';
import { EXPERIENCES, EDUCATION } from '../data';
import { MapPin, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <SectionHeader
        title="Experience"
        subtitle="A track record of shipping and professional growth."
      />

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[7px] top-2 bottom-0 w-px bg-slate-800" />

        <div className="space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative pl-10 group">
              {/* Timeline dot */}
              <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full bg-slate-950 border-2 border-emerald-500 z-10 group-hover:border-emerald-400 group-hover:scale-110 transition-all" />

              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="text-slate-300 font-medium text-sm">{exp.company}</div>
                </div>
                <div className="flex flex-col sm:items-end gap-1 text-xs text-slate-500 font-mono shrink-0">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={11} />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={11} />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Highlights */}
              <ul className="space-y-2 mb-4">
                {exp.highlights.map((item, i) => (
                  <li key={i} className="flex gap-2.5 text-slate-400 text-sm leading-relaxed">
                    <span className="text-emerald-500 shrink-0 font-mono mt-0.5">›</span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Project chips */}
              {exp.projects && (
                <div className="grid sm:grid-cols-2 gap-3">
                  {exp.projects.map((p, i) => (
                    <div
                      key={i}
                      className="p-3 bg-slate-900/60 border border-slate-800/60 rounded-lg hover:border-emerald-500/20 transition-colors"
                    >
                      <div className="text-xs font-bold text-emerald-400 mb-1 font-mono">{p.name}</div>
                      <p className="text-xs text-slate-500 leading-relaxed">{p.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mt-20 pt-16 border-t border-slate-800">
        <h3 className="font-mono text-xs uppercase tracking-widest text-emerald-400 mb-8">
          // Education
        </h3>
        {EDUCATION.map((edu, idx) => (
          <div
            key={idx}
            className="flex flex-col sm:flex-row justify-between gap-4 p-6 bg-slate-900/40 border border-slate-800 rounded-xl hover:border-emerald-500/20 transition-all group"
          >
            <div>
              <h4 className="text-base font-bold text-slate-100 group-hover:text-emerald-300 transition-colors mb-1">
                {edu.degree}
              </h4>
              <p className="text-slate-400 text-sm">{edu.institution}</p>
              <span className="inline-block mt-2 px-2.5 py-0.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono rounded">
                {edu.score}
              </span>
            </div>
            <div className="flex sm:flex-col sm:items-end justify-between text-xs text-slate-500 font-mono">
              <span>Batch</span>
              <span className="text-slate-400 font-semibold">{edu.period}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
