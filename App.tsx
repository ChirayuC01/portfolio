
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans overflow-x-hidden relative">
      <Navbar activeSection={activeSection} />

      <main className="relative z-10">
        <section id="home">
          <Hero />
        </section>

        <section id="about" className="py-24 bg-slate-900/10 backdrop-blur-sm">
          <div data-animate>
            <About />
          </div>
        </section>

        <section id="skills" className="py-24">
          <div data-animate>
            <Skills />
          </div>
        </section>

        <section id="experience" className="py-24 bg-slate-900/10 backdrop-blur-sm">
          <div data-animate>
            <Experience />
          </div>
        </section>

        <section id="projects" className="py-24">
          <div data-animate>
            <Projects />
          </div>
        </section>

        <section id="contact" className="py-24 bg-slate-900/10 backdrop-blur-sm">
          <div data-animate>
            <Contact />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
