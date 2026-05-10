
import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3 shadow-lg border-b border-slate-800' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="p-2 bg-accent-600 rounded-lg group-hover:bg-accent-500 transition-colors">
            <Terminal size={20} className="text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight hidden sm:block">
            Chirayu <span className="text-accent-400">Chawande</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent-400 ${
                activeSection === link.href.substring(1) ? 'text-accent-400' : 'text-slate-400'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="mailto:chirayuchawande01@gmail.com"
            className="px-5 py-2.5 bg-accent-600 hover:bg-accent-500 text-white rounded-full text-sm font-semibold transition-all shadow-lg shadow-accent-600/20 active:scale-95"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-slate-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute w-full transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen border-b border-slate-800' : 'max-h-0'}`}>
        <div className="bg-slate-900/95 backdrop-blur-xl p-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-slate-300 hover:text-accent-400 py-2 border-b border-slate-800/50"
            >
              {link.name}
            </a>
          ))}
          <a
            href="mailto:chirayuchawande01@gmail.com"
            className="w-full py-3 bg-accent-600 text-white rounded-xl text-center font-semibold"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
