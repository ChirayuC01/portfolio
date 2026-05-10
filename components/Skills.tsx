
import React from 'react';
import SectionHeader from './SectionHeader';
import { SKILLS } from '../data';

const Skills: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader
        title="Technical Stack"
        subtitle="The tools I use to ship real products."
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-14">
        {SKILLS.map((group, idx) => (
          <div key={idx} className="flex flex-col gap-3">
            <h4 className="font-mono text-[11px] uppercase tracking-widest text-emerald-400 border-b border-emerald-500/15 pb-2">
              {group.category}
            </h4>
            <div className="flex flex-col gap-1.5">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1.5 bg-slate-900 border border-slate-800 text-slate-400 text-xs font-mono rounded-md hover:border-emerald-500/40 hover:text-emerald-300 transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Terminal tagline */}
      <div className="border-t border-slate-800/60 pt-8">
        <p className="font-mono text-sm text-slate-600">
          <span className="text-emerald-600">&gt;</span>{' '}
          stack built for shipping, not for show
          <span className="inline-block w-[2px] h-[0.9em] bg-emerald-500/50 ml-1 align-middle animate-blink" />
        </p>
      </div>
    </div>
  );
};

export default Skills;
