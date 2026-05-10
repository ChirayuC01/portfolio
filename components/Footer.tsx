
import React from 'react';
import { Terminal, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="border-t border-slate-800 py-12 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-slate-900 rounded-lg">
            <Terminal size={18} className="text-accent-400" />
          </div>
          <span className="font-bold text-lg tracking-tight">
            Chirayu <span className="text-accent-400">Chawande</span>
          </span>
        </div>

        <div className="text-slate-500 text-sm flex items-center gap-1">
          Designed & Built by Chirayu Chawande with <Heart size={14} className="text-red-500 fill-red-500" />
        </div>

        <div className="flex items-center gap-8 text-slate-500 text-sm font-medium">
          <span>&copy; {year} All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
