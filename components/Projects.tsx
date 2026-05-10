
import React from 'react';
import SectionHeader from './SectionHeader';
import { PROJECTS } from '../data';
import { ExternalLink, Github, Code2, Rocket } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader 
        title="Featured Projects" 
        subtitle="Selected work that demonstrates my technical depth." 
      />
      
      <div className="grid md:grid-cols-2 gap-10">
        {PROJECTS.map((project, idx) => (
          <div key={idx} className="group bg-slate-900/40 border border-slate-800 rounded-3xl overflow-hidden hover:border-accent-500/30 transition-all flex flex-col">
            <div className="relative h-64 overflow-hidden bg-slate-800 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-600/20 to-indigo-600/20 group-hover:opacity-100 transition-opacity" />
              <Code2 size={80} className="text-slate-700 group-hover:scale-110 transition-transform duration-500" />
              
              <div className="absolute top-6 right-6 flex gap-2">
                {project.link && (
                  <a href={project.link} className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all" title="Live Preview">
                    <ExternalLink size={20} />
                  </a>
                )}
                <a href="https://github.com/ChirayuC01" className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all" title="View Source">
                  <Github size={20} />
                </a>
              </div>
            </div>

            <div className="p-8 flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold group-hover:text-accent-400 transition-colors">{project.title}</h3>
                <Rocket size={20} className="text-slate-700 group-hover:text-accent-500 transition-colors" />
              </div>
              
              <p className="text-slate-400 mb-6 leading-relaxed flex-1">
                {project.description}
              </p>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-slate-800 text-slate-300 text-[10px] font-black uppercase tracking-tighter rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-slate-800/50">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Key Features</h4>
                  <ul className="grid grid-cols-1 gap-2">
                    {project.features.map((f, i) => (
                      <li key={i} className="text-sm text-slate-400 flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-accent-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <a 
          href="https://github.com/ChirayuC01" 
          target="_blank"
          className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 border border-slate-800 rounded-full text-slate-300 hover:text-white hover:border-slate-700 transition-all font-semibold"
        >
          <Github size={20} />
          View More on GitHub
        </a>
      </div>
    </div>
  );
};

export default Projects;
