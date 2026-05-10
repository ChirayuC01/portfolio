
import React from 'react';
import SectionHeader from './SectionHeader';
import { SKILLS } from '../data';

const Skills: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader 
        title="Technical Stack" 
        subtitle="The tools and technologies I use to bring ideas to life." 
      />
      
      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
        {SKILLS.map((group, idx) => (
          <div key={idx} className="flex flex-col gap-4">
            <h4 className="text-xs uppercase tracking-widest font-black text-accent-500 border-b border-accent-500/20 pb-2">
              {group.category}
            </h4>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-3 py-1.5 bg-slate-900 border border-slate-800 text-slate-300 text-sm font-medium rounded-lg hover:border-accent-500 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 p-8 bg-gradient-to-r from-accent-600/10 to-indigo-600/10 rounded-3xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl">
          <h4 className="text-2xl font-bold mb-3">Focused on Practical Skills</h4>
          <p className="text-slate-400">
            I prioritize real-world application over buzzwords. My stack is built around efficiency, scalability, and developer productivity, enabling me to ship high-quality products faster.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
            {['Production-Ready', 'Scalable Architecture', 'Responsive Design', 'API Optimization'].map(badge => (
              <span key={badge} className="px-4 py-2 bg-slate-950/50 rounded-full border border-slate-800 text-xs font-bold text-slate-300">
                {badge}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
