import { Link } from 'react-router-dom';

const TECH_STACK = [
  { icon: 'bi-filetype-jsx', name: 'React 19', desc: 'Modern hooks, lazy loading, memoization' },
  { icon: 'bi-wind', name: 'Tailwind CSS', desc: 'Utility-first styling via CDN' },
  { icon: 'bi-lightning-charge', name: 'Vite', desc: 'Lightning-fast HMR & build tool' },
  { icon: 'bi-diagram-3', name: 'LangChain', desc: 'Prompt templates, chains, memory' },
  { icon: 'bi-server', name: 'FastAPI', desc: 'High-perf Python backend with auto docs' },
  { icon: 'bi-gpu-card', name: 'Groq + Ollama', desc: 'Cloud & local LLM inference providers' },
];

const BOT_INFO = [
  { emoji: '🤖', name: 'Basic Bot', desc: 'General-purpose AI assistant for any topic.' },
  { emoji: '💼', name: 'Career Assistant', desc: 'Careers, skills, jobs, and learning paths.' },
  { emoji: '💻', name: 'Code Assistant', desc: 'Programming help, debugging, best practices.' },
  { emoji: '🎓', name: 'Tutor Bot', desc: 'Step-by-step explanations for beginners.' },
  { emoji: '🧠', name: 'Multimodal Bot', desc: 'Adapts based on context and user intent.' },
  { emoji: '🌡️', name: 'Temperature Bot', desc: 'Compare responses at different temp values.' },
];

export default function AboutPage() {
  return (
    <div className="flex-1 overflow-y-auto">
      {/* Header */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c1a2e] to-[#060e1a]"></div>
        <div className="absolute top-10 right-20 w-64 h-64 bg-[#00ffff]/5 rounded-full blur-3xl" style={{ animation: 'float 7s ease-in-out infinite' }}></div>

        <div className="relative max-w-4xl mx-auto text-center" style={{ animation: 'fadeInUp 500ms ease both' }}>
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
            About <span className="text-[#00dbff]">GenAI LLM Chat Bots</span>
          </h1>
          <p className="text-[#8ba3b8] text-lg max-w-2xl mx-auto leading-relaxed">
            A production-grade AI chat platform built with LangChain and React. 
            Supporting multiple bot personalities, dual LLM providers, and real-time parameter tuning.
          </p>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-8 text-center">
            <i className="bi bi-stack text-[#00dbff] mr-2"></i> Tech Stack
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TECH_STACK.map((t, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-2xl bg-[#0f2035]/70 border border-[rgba(0,219,255,0.08)] hover:border-[rgba(0,255,255,0.2)] transition-all duration-300"
                style={{ animation: `fadeInUp 400ms ease ${i * 60}ms both` }}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00ffff]/15 to-[#0859c6]/15 flex items-center justify-center flex-shrink-0">
                  <i className={`bi ${t.icon} text-[#00dbff] text-lg`}></i>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">{t.name}</h3>
                  <p className="text-xs text-[#8ba3b8] mt-1">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Bots */}
      <section className="py-16 px-6 bg-[#0c1a2e]/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-8 text-center">
            <i className="bi bi-robot text-[#00dbff] mr-2"></i> Available Bots
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BOT_INFO.map((b, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-[#0f2035]/70 border border-[rgba(0,219,255,0.08)] hover:border-[rgba(0,255,255,0.2)] transition-all duration-300 hover:-translate-y-0.5"
                style={{ animation: `fadeInUp 400ms ease ${i * 60}ms both` }}
              >
                <span className="text-2xl">{b.emoji}</span>
                <h3 className="text-sm font-semibold text-white mt-2">{b.name}</h3>
                <p className="text-xs text-[#8ba3b8] mt-1">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white mb-8 text-center">
            <i className="bi bi-diagram-2 text-[#00dbff] mr-2"></i> Architecture
          </h2>
          <div className="rounded-2xl bg-[#0f2035]/70 border border-[rgba(0,219,255,0.1)] p-8 space-y-6">
            {[
              { label: 'Frontend', detail: 'React 19 + Vite + Tailwind CSS + React Router DOM', iconColor: '#00ffff' },
              { label: 'API Layer', detail: 'REST API via chatApi.js → FastAPI /chat endpoint', iconColor: '#00dbff' },
              { label: 'Backend', detail: 'FastAPI + LangChain chains (Prompt → LLM → StrOutputParser)', iconColor: '#10a5f5' },
              { label: 'LLM Providers', detail: 'Groq Cloud (llama-3.3-70b) & Ollama Local (llama3.2:1b)', iconColor: '#0c71e0' },
              { label: 'Memory', detail: 'In-memory defaultdict store with session-based history', iconColor: '#0859c6' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 group">
                <div className="w-3 h-3 rounded-full mt-1.5 flex-shrink-0 group-hover:scale-125 transition-transform" style={{ background: item.iconColor }}></div>
                <div>
                  <h3 className="text-sm font-semibold text-white">{item.label}</h3>
                  <p className="text-xs text-[#8ba3b8] mt-0.5">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-md mx-auto text-center">
          <Link
            to="/chat"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#00ffff] to-[#10a5f5] text-[#060e1a] font-bold shadow-lg shadow-[#00ffff]/20 hover:shadow-[#00ffff]/40 hover:-translate-y-0.5 transition-all duration-300"
          >
            <i className="bi bi-chat-dots-fill"></i>
            Try It Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-6 border-t border-[rgba(0,219,255,0.08)]">
        <p className="text-center text-[#5a7a94] text-sm">© 2026 GenAI LLM Chat Bots. All rights reserved.</p>
      </footer>
    </div>
  );
}
