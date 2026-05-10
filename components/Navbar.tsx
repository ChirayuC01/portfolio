
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3 shadow-lg border-b border-slate-800/60' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-1.5 group font-mono">
          <span className="text-emerald-500 text-lg font-bold">~</span>
          <span className="text-slate-300 group-hover:text-white transition-colors font-semibold tracking-tight">
            chirayu<span className="text-emerald-400">.dev</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-emerald-400 ${
                activeSection === link.href.substring(1)
                  ? 'text-emerald-400'
                  : 'text-slate-400'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="mailto:chirayuchawande01@gmail.com"
            className="px-5 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-lg text-sm font-bold transition-all shadow-lg shadow-emerald-500/20 active:scale-95"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute w-full transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen border-b border-slate-800' : 'max-h-0'}`}>
        <div className="bg-slate-900/95 backdrop-blur-xl p-6 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-slate-300 hover:text-emerald-400 py-2 border-b border-slate-800/50 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="mailto:chirayuchawande01@gmail.com"
            className="mt-2 w-full py-3 bg-emerald-500 text-slate-950 rounded-lg text-center font-bold"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
