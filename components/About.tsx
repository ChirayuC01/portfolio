
import React from 'react';
import SectionHeader from './SectionHeader';
import { ShieldCheck, Zap, Layers, Globe } from 'lucide-react';

const About: React.FC = () => {
  const strengths = [
    {
      icon: <Zap size={24} className="text-amber-400" />,
      title: "Performance First",
      desc: "Optimized UI for performance and accessibility, ensuring smooth user experiences on all devices."
    },
    {
      icon: <ShieldCheck size={24} className="text-emerald-400" />,
      title: "Security & Scale",
      desc: "Implemented secure RBAC systems across mobile and admin platforms, reducing permission issues by 90%."
    },
    {
      icon: <Layers size={24} className="text-accent-400" />,
      title: "Modular Design",
      desc: "Deep focus on component reusability and clean architecture to reduce deployment overhead."
    },
    {
      icon: <Globe size={24} className="text-indigo-400" />,
      title: "Cross-Platform",
      desc: "Expertise in deploying unified solutions for Web, Android, and iOS using React and React Native."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader 
        title="About Me" 
        subtitle="Bridging the gap between complex logic and intuitive design." 
      />
      
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h3 className="text-3xl font-bold mb-6">
            A Full-Stack Developer with a <br />
            <span className="text-accent-400">Production-Ready</span> Mindset.
          </h3>
          <p className="text-slate-400 text-lg leading-relaxed mb-6">
            I specialize in building scalable web and mobile applications using <span className="text-slate-200">React, React Native, Node.js, Prisma, and MongoDB</span>. My professional journey is marked by a track record of delivering real-world impact—from deploying Play Store-ready mobile apps to architecting high-efficiency admin dashboards.
          </p>
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            My approach is simple: write clean, maintainable code that solves real problems. Whether it's integrating complex APIs or optimizing UI for responsiveness, I ensure every line of code adds value to the product.
          </p>
          
          <div className="flex items-center gap-8">
            <div>
              <div className="text-3xl font-bold text-white">2024</div>
              <div className="text-sm text-slate-500">BE Graduate</div>
            </div>
            <div className="w-px h-10 bg-slate-800" />
            <div>
              <div className="text-3xl font-bold text-white">100+</div>
              <div className="text-sm text-slate-500">Active Promoters using my App</div>
            </div>
            <div className="w-px h-10 bg-slate-800" />
            <div>
              <div className="text-3xl font-bold text-white">30%</div>
              <div className="text-sm text-slate-500">Reduced Overhead</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {strengths.map((s, i) => (
            <div key={i} className="p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:border-accent-500/50 transition-all group">
              <div className="mb-4 group-hover:scale-110 transition-transform">{s.icon}</div>
              <h4 className="text-lg font-bold mb-2 text-slate-100">{s.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
