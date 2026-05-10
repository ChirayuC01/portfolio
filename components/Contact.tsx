import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SectionHeader from "./SectionHeader";
import {
  Mail,
  Linkedin,
  Github,
  Send,
  Phone,
  CheckCircle,
  AlertCircle,
  Loader,
} from "lucide-react";

const SERVICE_ID = "service_3ubrdk8";
const TEMPLATE_ID = "template_bgrrjwc";
const PUBLIC_KEY = "UnKPQiND2Ym30ku9r";

type Status = "idle" | "sending" | "success" | "error";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");
    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY,
      );
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-emerald-500/60 text-slate-100 text-sm placeholder-slate-600 transition-all disabled:opacity-50";

  const isSending = status === "sending";

  return (
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader
        title="Contact"
        subtitle="Let's build something exceptional together."
      />

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Left — info */}
        <div>
          <p className="text-slate-400 text-lg leading-relaxed mb-10">
            I'm open to full-time roles as a{" "}
            <span className="text-slate-200 font-semibold">
              Full-Stack Developer
            </span>
            . If you have a product that needs building — or a team that needs
            someone who ships — let's talk.
          </p>

          <div className="space-y-4">
            <a
              href="mailto:chirayuchawande01@gmail.com"
              className="flex items-center gap-4 p-4 bg-slate-900/60 border border-slate-800 rounded-xl group hover:border-emerald-500/40 transition-all"
            >
              <div className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-lg group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all">
                <Mail size={20} />
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-0.5">
                  Email
                </div>
                <div className="text-sm font-semibold text-slate-200">
                  chirayuchawande01@gmail.com
                </div>
              </div>
            </a>

            <a
              href="tel:+919325474337"
              className="flex items-center gap-4 p-4 bg-slate-900/60 border border-slate-800 rounded-xl group hover:border-emerald-500/40 transition-all"
            >
              <div className="p-2.5 bg-slate-800 text-slate-400 rounded-lg group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all">
                <Phone size={20} />
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-0.5">
                  Phone
                </div>
                <div className="text-sm font-semibold text-slate-200">
                  +91 93254 74337
                </div>
              </div>
            </a>

            <div className="flex gap-3 pt-2">
              <a
                href="https://linkedin.com/in/chirayu-chawande-218347206"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-slate-900/60 border border-slate-800 rounded-xl text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all font-mono text-xs"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a
                href="https://github.com/ChirayuC01"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-slate-900/60 border border-slate-800 rounded-xl text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all font-mono text-xs"
              >
                <Github size={16} />
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Right — form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-5 bg-slate-900/40 border border-slate-800 rounded-2xl p-8"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                Full Name
              </label>
              <input
                type="text"
                name="from_name"
                placeholder="Jane Smith"
                required
                disabled={isSending}
                className={inputClass}
              />
            </div>
            <div className="space-y-1.5">
              <label className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                Email
              </label>
              <input
                type="email"
                name="from_email"
                placeholder="jane@company.com"
                required
                disabled={isSending}
                className={inputClass}
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              placeholder="Opportunity / Collaboration"
              required
              disabled={isSending}
              className={inputClass}
            />
          </div>

          <div className="space-y-1.5">
            <label className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
              Message
            </label>
            <textarea
              rows={5}
              name="message"
              placeholder="Tell me about the project or role..."
              required
              disabled={isSending}
              className={`${inputClass} resize-none`}
            />
          </div>

          {/* Status feedback */}
          {status === "success" && (
            <div className="flex items-center gap-2.5 px-4 py-3 bg-emerald-500/10 border border-emerald-500/25 rounded-lg text-emerald-400 text-sm font-mono">
              <CheckCircle size={16} className="shrink-0" />
              Message sent — I'll get back to you soon.
            </div>
          )}
          {status === "error" && (
            <div className="flex items-center gap-2.5 px-4 py-3 bg-red-500/10 border border-red-500/25 rounded-lg text-red-400 text-sm font-mono">
              <AlertCircle size={16} className="shrink-0" />
              Something went wrong. Try emailing me directly.
            </div>
          )}

          <button
            type="submit"
            disabled={isSending}
            className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-60 disabled:cursor-not-allowed text-slate-950 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-emerald-500/15 group"
          >
            {isSending ? (
              <>
                <Loader size={16} className="animate-spin" />
                Sending…
              </>
            ) : (
              <>
                Send Message
                <Send
                  size={16}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
