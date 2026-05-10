
import React from 'react';
import { ArrowRight, Github, Linkedin, Download, Terminal } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-emerald-900/15 rounded-full blur-[160px] pointer-events-none" />

      {/* Faint background code grid */}
      <pre
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden text-[10px] leading-5 text-emerald-500/[0.04] font-mono select-none pointer-events-none px-8 py-8 whitespace-pre-wrap break-all"
      >
        {`const buildFeature = async (spec: Spec): Promise<Result> => {
  const schema = await db.schema.validate(spec);
  const service = new FeatureService({ rbac: true, audit: true });
  return service.deploy(schema);
};

interface AuthPayload { sub: string; role: Role; tenant: string; }
const sign = (p: AuthPayload) => jwt.sign(p, SECRET, { expiresIn: '15m' });
const refresh = (token: string) => verifyAndRotate(token, REFRESH_SECRET);

export async function encryptVault(master: string, data: string) {
  const key = await pbkdf2(master, SALT, 310000, 32, 'sha256');
  const iv = crypto.getRandomValues(new Uint8Array(12));
  return aesGcmEncrypt(key, iv, data);
}

const promoterDashboard = createRoute({ method: 'GET', path: '/dashboard',
  middleware: [authenticate, rbac('promoter')],
  handler: async (req) => batchQuery(req.tenant),
});`.repeat(6)}
      </pre>

      <div className="max-w-4xl w-full z-10">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/60 backdrop-blur-md border border-slate-800 text-slate-400 text-xs font-mono mb-10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          available for new opportunities
        </div>

        {/* Terminal prompt line */}
        <div className="flex items-center gap-2 mb-3">
          <Terminal size={14} className="text-emerald-500" />
          <span className="font-mono text-emerald-400 text-sm tracking-wide">$ whoami</span>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-4 leading-[1.05]">
          Chirayu Chawande
          <span className="inline-block w-[3px] h-[0.85em] bg-emerald-400 ml-2 align-middle animate-blink" />
        </h1>

        {/* Role line */}
        <p className="font-mono text-slate-400 text-base md:text-lg mb-3 tracking-wide">
          <span className="text-slate-600">// </span>Full-Stack Developer &nbsp;&middot;&nbsp; Mumbai, India
        </p>

        {/* One-liner */}
        <p className="text-slate-300 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
          I ship production-grade web and mobile applications — from Play Store deployments to zero-knowledge auth systems and multi-tenant SaaS platforms.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12">
          <a
            href="#projects"
            className="flex items-center gap-2 px-7 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-lg transition-all active:scale-95 shadow-lg shadow-emerald-500/20 group"
          >
            View Work
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-7 py-3.5 bg-transparent border border-slate-700 hover:border-emerald-500/60 text-slate-300 hover:text-white font-semibold rounded-lg transition-all active:scale-95"
          >
            Contact
          </a>
        </div>

        {/* Social row */}
        <div className="flex items-center gap-5 text-slate-500">
          <a
            href="https://github.com/ChirayuC01"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm font-mono hover:text-emerald-400 transition-colors"
          >
            <Github size={18} />
            GitHub
          </a>
          <div className="w-px h-4 bg-slate-800" />
          <a
            href="https://linkedin.com/in/chirayu-chawande-218347206"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm font-mono hover:text-emerald-400 transition-colors"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
          <div className="w-px h-4 bg-slate-800" />
          <a
            href="https://drive.google.com/file/d/10EhUj5ulpPXyG1JNMX_eE9sM5C_vpuy3/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm font-mono hover:text-emerald-400 transition-colors"
          >
            <Download size={18} />
            Resume
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
        <span className="font-mono text-[10px] uppercase tracking-widest">scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-slate-600 to-transparent animate-pulse-slow" />
      </div>
    </div>
  );
};

export default Hero;
