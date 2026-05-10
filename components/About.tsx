
import React from 'react';
import SectionHeader from './SectionHeader';
import { ShieldCheck, Zap, Layers, Smartphone } from 'lucide-react';

const About: React.FC = () => {
  const strengths = [
    {
      icon: <Zap size={20} className="text-amber-400" />,
      title: "Performance First",
      desc: "Batched queries, composite indexes, connection pool tuning — I care about what happens at scale."
    },
    {
      icon: <ShieldCheck size={20} className="text-emerald-400" />,
      title: "Auth & Security",
      desc: "Two-token JWT, two-layer RBAC, AES-256-GCM client-side encryption, PBKDF2 key derivation."
    },
    {
      icon: <Layers size={20} className="text-sky-400" />,
      title: "Reusable Architecture",
      desc: "Component libraries adopted across 9+ modules. Clean APIs, typed contracts, zero duplication."
    },
    {
      icon: <Smartphone size={20} className="text-violet-400" />,
      title: "Cross-Platform",
      desc: "Web, Android, and iOS from a single React Native codebase. Play Store shipped, EAS Build automated."
    }
  ];

  const stats = [
    { value: "100+", label: "Active app users" },
    { value: "9+", label: "Admin modules" },
    { value: "2", label: "Production deployments" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader
        title="About Me"
        subtitle="Building things that work in production, not just in demos."
      />

      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Bio */}
        <div>
          <p className="text-slate-300 text-lg leading-relaxed mb-5">
            I'm a <span className="text-white font-semibold">Full-Stack Developer</span> currently working as a Jr. Software Developer at{' '}
            <span className="text-emerald-400 font-semibold">BrandTouch & Analytics</span>, Mumbai. I build and ship web and mobile applications across the full stack — from PostgreSQL schemas to React Native screens to Play Store releases.
          </p>
          <p className="text-slate-400 text-base leading-relaxed mb-8">
            My focus areas are API design, auth systems, database performance, and reusable component architecture. I graduated with a BE in IT from Atharva College of Engineering in 2024 and have been in production environments ever since.
          </p>

          {/* Stats */}
          <div className="flex items-center gap-8 mb-8">
            {stats.map((s, i) => (
              <React.Fragment key={i}>
                <div>
                  <div className="text-2xl font-extrabold text-white font-mono">{s.value}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
                </div>
                {i < stats.length - 1 && <div className="w-px h-8 bg-slate-800" />}
              </React.Fragment>
            ))}
          </div>

          {/* Current role badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-lg font-mono text-xs text-emerald-400">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
            </span>
            Jr. Software Developer @ BrandTouch & Analytics
          </div>
        </div>

        {/* Strength cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {strengths.map((s, i) => (
            <div
              key={i}
              className="p-5 bg-slate-900/60 border border-slate-800 rounded-xl hover:border-emerald-500/30 transition-all group"
            >
              <div className="mb-3 p-2 bg-slate-800/60 rounded-lg w-fit group-hover:bg-slate-800 transition-colors">
                {s.icon}
              </div>
              <h4 className="text-sm font-bold text-slate-100 mb-1.5">{s.title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
