
import React from 'react';
import SectionHeader from './SectionHeader';
import { EXPERIENCES, EDUCATION } from '../data';
import { Briefcase, GraduationCap, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6">
      <SectionHeader 
        title="My Journey" 
        subtitle="A track record of shipping and professional growth." 
      />
      
      <div className="space-y-12">
        {EXPERIENCES.map((exp, idx) => (
          <div key={idx} className="relative pl-12 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-slate-800 group">
            {/* Timeline Dot */}
            <div className="absolute left-[-8px] top-2 w-4 h-4 rounded-full bg-slate-950 border-2 border-accent-500 z-10 group-hover:scale-125 transition-transform" />
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-accent-400 transition-colors flex items-center gap-2">
                  <Briefcase size={20} className="text-slate-500" />
                  {exp.role}
                </h3>
                <div className="text-lg text-slate-300 font-medium">{exp.company}</div>
              </div>
              <div className="flex flex-col md:items-end text-sm text-slate-500 font-medium">
                <span className="flex items-center gap-2">
                  <Calendar size={14} />
                  {exp.period}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin size={14} />
                  {exp.location}
                </span>
              </div>
            </div>

            <ul className="space-y-3 mb-6">
              {exp.highlights.map((item, i) => (
                <li key={i} className="flex gap-3 text-slate-400 leading-relaxed">
                  <CheckCircle2 size={18} className="text-accent-500 shrink-0 mt-1" />
                  {item}
                </li>
              ))}
            </ul>

            {exp.projects && (
              <div className="grid sm:grid-cols-2 gap-4">
                {exp.projects.map((p, i) => (
                  <div key={i} className="p-4 bg-slate-900/50 rounded-xl border border-slate-800/50">
                    <div className="text-sm font-bold text-slate-200 mb-1">{p.name}</div>
                    <p className="text-xs text-slate-500">{p.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-24 border-t border-slate-800 pt-24">
        <h3 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <GraduationCap size={32} className="text-accent-400" />
          Education
        </h3>
        <div className="space-y-8">
          {EDUCATION.map((edu, idx) => (
            <div key={idx} className="p-8 bg-slate-900/50 border border-slate-800 rounded-3xl flex flex-col md:flex-row justify-between gap-6 group hover:border-indigo-500/30 transition-all">
              <div>
                <h4 className="text-xl font-bold text-slate-100 group-hover:text-indigo-400 transition-colors">{edu.degree}</h4>
                <p className="text-slate-400 text-lg mb-2">{edu.institution}</p>
                <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 text-xs font-bold rounded-full border border-indigo-500/20">
                   Score: {edu.score}
                </span>
              </div>
              <div className="flex md:flex-col justify-between md:items-end text-sm text-slate-500 font-bold uppercase tracking-widest">
                <span>Batch</span>
                <span>{edu.period}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
