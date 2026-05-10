
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-20">
      <div className="flex items-center gap-4 mb-3">
        <div className="h-px w-12 bg-accent-500" />
        <span className="text-accent-500 font-black text-xs uppercase tracking-[0.3em]">
          {title}
        </span>
      </div>
      <h2 className="text-4xl md:text-5xl font-extrabold text-white max-w-2xl leading-[1.1]">
        {subtitle}
      </h2>
    </div>
  );
};

export default SectionHeader;
