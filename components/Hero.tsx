
import React from 'react';
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-emerald-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-emerald-900/20 rounded-full blur-[140px]" />
      
      <div className="max-w-5xl w-full text-center z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/50 backdrop-blur-md border border-slate-800 text-slate-400 text-xs font-medium mb-8 animate-fade-in shadow-xl">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Available for new opportunities
        </div>

        <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight mb-6 text-white drop-shadow-2xl">
          Building <span className="text-gradient">Production-Ready</span> <br className="hidden md:block" /> Full-Stack Solutions
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-medium backdrop-blur-[2px]">
          I'm <span className="text-slate-100">Chirayu Chawande</span>. A software engineer focused on scaling high-impact web and mobile applications with modern tech stacks.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 bg-white text-slate-950 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-slate-200 transition-all shadow-xl shadow-white/10 active:scale-95 group"
          >
            View Projects
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 bg-slate-900/80 backdrop-blur-md text-white rounded-full font-bold text-lg flex items-center justify-center gap-2 border border-slate-800 hover:border-slate-700 transition-all active:scale-95 shadow-lg"
          >
            Contact Me
          </a>
        </div>

        <div className="flex items-center justify-center gap-6 text-slate-500">
          <a href="https://github.com/ChirayuC01" target="_blank" className="hover:text-accent-400 transition-colors drop-shadow-lg">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/chirayu-chawande-218347206" target="_blank" className="hover:text-accent-400 transition-colors drop-shadow-lg">
            <Linkedin size={24} />
          </a>
          <div className="w-px h-6 bg-slate-800 mx-2" />
          <button className="flex items-center gap-2 text-sm font-medium hover:text-white transition-colors">
            <Download size={18} />
            Resume
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 opacity-50">
        <span className="text-[10px] uppercase tracking-widest font-bold">Explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-slate-500 to-transparent animate-pulse-slow" />
      </div>
    </div>
  );
};

export default Hero;
