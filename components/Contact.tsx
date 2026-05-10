
import React from 'react';
import SectionHeader from './SectionHeader';
import { Mail, Linkedin, Github, Send, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader 
        title="Get In Touch" 
        subtitle="Let's build something exceptional together." 
      />
      
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h3 className="text-3xl font-bold mb-6">Let's connect and <br />discuss your project</h3>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed">
            I'm currently looking for new opportunities as a <span className="text-slate-200">Full-Stack Developer</span>. If you're looking for someone who can take a product from idea to production-ready deployment, let's talk.
          </p>

          <div className="space-y-6">
            <a href="mailto:chirayuchawande01@gmail.com" className="flex items-center gap-4 p-4 bg-slate-900 border border-slate-800 rounded-2xl group hover:border-accent-500 transition-all">
              <div className="p-3 bg-accent-600/10 text-accent-400 rounded-xl group-hover:bg-accent-600 group-hover:text-white transition-all">
                <Mail size={24} />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email Me</div>
                <div className="text-lg font-bold text-slate-200">chirayuchawande01@gmail.com</div>
              </div>
            </a>

            <a href="tel:9325474337" className="flex items-center gap-4 p-4 bg-slate-900 border border-slate-800 rounded-2xl group hover:border-accent-500 transition-all">
              <div className="p-3 bg-indigo-600/10 text-indigo-400 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <Phone size={24} />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Call Me</div>
                <div className="text-lg font-bold text-slate-200">+91 9325474337</div>
              </div>
            </a>

            <div className="flex gap-4 pt-4">
              <a href="https://linkedin.com/in/chirayu-chawande-218347206" target="_blank" className="p-4 bg-slate-900 border border-slate-800 rounded-2xl text-slate-400 hover:text-accent-400 hover:border-accent-400 transition-all">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/ChirayuC01" target="_blank" className="p-4 bg-slate-900 border border-slate-800 rounded-2xl text-slate-400 hover:text-accent-400 hover:border-accent-400 transition-all">
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>

        <form className="space-y-6 bg-slate-900/50 p-8 rounded-3xl border border-slate-800" onSubmit={(e) => e.preventDefault()}>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Full Name</label>
              <input 
                type="text" 
                placeholder="John Doe"
                className="w-full px-5 py-4 bg-slate-950 border border-slate-800 rounded-xl focus:outline-none focus:border-accent-500 text-slate-100 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Email Address</label>
              <input 
                type="email" 
                placeholder="john@example.com"
                className="w-full px-5 py-4 bg-slate-950 border border-slate-800 rounded-xl focus:outline-none focus:border-accent-500 text-slate-100 transition-all"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Subject</label>
            <input 
              type="text" 
              placeholder="Opportunity Discussion"
              className="w-full px-5 py-4 bg-slate-950 border border-slate-800 rounded-xl focus:outline-none focus:border-accent-500 text-slate-100 transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Message</label>
            <textarea 
              rows={5} 
              placeholder="Tell me about your project..."
              className="w-full px-5 py-4 bg-slate-950 border border-slate-800 rounded-xl focus:outline-none focus:border-accent-500 text-slate-100 transition-all resize-none"
            />
          </div>
          <button className="w-full py-4 bg-accent-600 hover:bg-accent-500 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-accent-600/20 group">
            Send Message
            <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
