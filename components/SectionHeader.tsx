
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-16">
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-emerald-500 text-xs tracking-widest uppercase">//</span>
        <span className="font-mono text-emerald-400 text-xs uppercase tracking-[0.25em] font-semibold">
          {title}
        </span>
        <div className="h-px flex-1 bg-emerald-500/15 max-w-[80px]" />
      </div>
      <h2 className="text-4xl md:text-5xl font-extrabold text-white max-w-2xl leading-[1.1]">
        {subtitle}
      </h2>
    </div>
  );
};

export default SectionHeader;
