import React from "react";
import { Github, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/60 py-10 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <span className="font-mono text-slate-500 text-sm">
          <span className="text-emerald-500">~</span> chirayu
          <span className="text-emerald-400">.dev</span>
        </span>

        {/* <p className="font-mono text-xs text-slate-600">
          &copy; {year} &middot; Built with React &amp; TypeScript
        </p> */}

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/ChirayuC01"
            target="_blank"
            rel="noreferrer"
            className="text-slate-600 hover:text-emerald-400 transition-colors"
          >
            <Github size={16} />
          </a>
          <a
            href="https://linkedin.com/in/chirayu-chawande-218347206"
            target="_blank"
            rel="noreferrer"
            className="text-slate-600 hover:text-emerald-400 transition-colors"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
