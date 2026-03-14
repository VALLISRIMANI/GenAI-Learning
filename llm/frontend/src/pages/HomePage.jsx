import { Link } from 'react-router-dom';
import { useMemo } from 'react';

// Feature cards data — stored as array for O(1) indexed access
const FEATURES = [
  {
    icon: 'bi-robot',
    title: '6 Specialized Bots',
    desc: 'Basic, Career, Code, Tutor, Multimodal, and Temperature Comparison bots — each with specialized system prompts.',
    gradient: 'from-[#00ffff] to-[#10a5f5]',
  },
  {
    icon: 'bi-lightning-charge-fill',
    title: 'Groq & Ollama',
    desc: 'Choose between ultra-fast Groq cloud inference or private local Ollama models. Switch seamlessly mid-conversation.',
    gradient: 'from-[#10a5f5] to-[#0c71e0]',
  },
  {
    icon: 'bi-thermometer-half',
    title: 'Temperature Control',
    desc: 'Fine-tune creativity vs determinism in real-time with a 0.0–1.0 slider. Compare side-by-side with the Temperature Bot.',
    gradient: 'from-[#0c71e0] to-[#0859c6]',
  },
  {
    icon: 'bi-memory',
    title: 'Conversation Memory',
    desc: 'Enable session memory to let bots remember context across messages. Powered by LangChain message history.',
    gradient: 'from-[#0859c6] to-[#00dbff]',
  },
  {
    icon: 'bi-markdown-fill',
    title: 'Rich Markdown Output',
    desc: 'AI responses rendered with full Markdown — headings, lists, code blocks with syntax highlighting, tables & more.',
    gradient: 'from-[#00dbff] to-[#00ffff]',
  },
  {
    icon: 'bi-braces',
    title: 'LangChain Powered',
    desc: 'Built on top of LangChain\'s prompt templates, output parsers, and chain composition for robust AI pipelines.',
    gradient: 'from-[#00ffff] to-[#0c71e0]',
  },
];

export default function HomePage() {
  // Memoize features map to avoid re-creation on every render
  const featureCards = useMemo(() => FEATURES.map((f, i) => (
    <div
      key={i}
      className="group relative bg-[#0f2035]/80 backdrop-blur-sm border border-[rgba(0,219,255,0.1)] rounded-2xl p-6 hover:border-[rgba(0,255,255,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,219,255,0.12)]"
      style={{ animation: `fadeInUp 500ms ease ${i * 80}ms both` }}
    >
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
        <i className={`bi ${f.icon} text-white text-xl`}></i>
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
      <p className="text-[#8ba3b8] text-sm leading-relaxed">{f.desc}</p>
    </div>
  )), []);

  return (
    <div className="flex-1 overflow-y-auto">
      {/* ── HERO ── */}
      <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
        {/* Animated gradient background */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: 'linear-gradient(135deg, #00ffff, #00dbff, #10a5f5, #0c71e0, #0859c6, #10a5f5, #00ffff)',
            backgroundSize: '400% 400%',
            animation: 'gradientShift 12s ease infinite',
          }}
        ></div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,255,255,0.5) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        ></div>

        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#00ffff]/10 rounded-full blur-3xl" style={{ animation: 'float 6s ease-in-out infinite' }}></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#0859c6]/10 rounded-full blur-3xl" style={{ animation: 'float 8s ease-in-out infinite 2s' }}></div>

        <div className="relative max-w-4xl mx-auto px-6 text-center" style={{ animation: 'fadeInUp 600ms ease both' }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00ffff]/10 border border-[#00ffff]/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00ffff] animate-pulse"></span>
            <span className="text-[#00ffff] text-xs font-semibold tracking-wider uppercase">Powered by LangChain</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
            Next-Gen <span className="bg-gradient-to-r from-[#00ffff] via-[#00dbff] to-[#10a5f5] bg-clip-text text-transparent">AI Chat</span> Experience
          </h1>

          <p className="text-lg sm:text-xl text-[#8ba3b8] max-w-2xl mx-auto mb-10 leading-relaxed">
            Interact with 6 specialized AI bots — from coding assistants to career advisors.
            Powered by Groq and Ollama with real-time temperature control and conversation memory.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/chat"
              className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#00ffff] to-[#10a5f5] text-[#060e1a] font-bold text-base shadow-lg shadow-[#00ffff]/20 hover:shadow-[#00ffff]/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              <i className="bi bi-chat-dots-fill"></i>
              Start Chatting
              <i className="bi bi-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-[rgba(0,219,255,0.25)] text-[#00dbff] font-semibold text-base hover:bg-[#00dbff]/10 hover:border-[#00dbff]/40 transition-all duration-300"
            >
              <i className="bi bi-info-circle"></i>
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14" style={{ animation: 'fadeInUp 500ms ease both' }}>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
              Powerful <span className="text-[#00dbff]">Features</span>
            </h2>
            <p className="text-[#8ba3b8] text-lg max-w-xl mx-auto">Everything you need for intelligent AI conversations, built for speed and flexibility.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureCards}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6">
        <div
          className="max-w-4xl mx-auto relative rounded-3xl overflow-hidden p-12 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(0,255,255,0.08), rgba(8,89,198,0.08))',
            border: '1px solid rgba(0,219,255,0.15)',
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div
              className="absolute top-0 left-[-100%] w-[200%] h-full opacity-30"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(0,255,255,0.1), transparent)',
                animation: 'shimmer 4s ease-in-out infinite',
              }}
            ></div>
          </div>

          <div className="relative">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">Ready to explore AI?</h2>
            <p className="text-[#8ba3b8] mb-8 max-w-lg mx-auto">Jump into a conversation with any of our specialized bots. No sign-up required.</p>
            <Link
              to="/chat"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#00ffff] to-[#10a5f5] text-[#060e1a] font-bold shadow-lg shadow-[#00ffff]/20 hover:shadow-[#00ffff]/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              <i className="bi bi-chat-dots-fill"></i>
              Launch Chat
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-8 px-6 border-t border-[rgba(0,219,255,0.08)]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#5a7a94] text-sm">© 2026 GenAI LLM Chat Bots. Built with LangChain + React.</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/VALLISRIMANI" target="_blank" rel="noopener" className="text-[#5a7a94] hover:text-[#00dbff] transition-colors">
              <i className="bi bi-github text-lg"></i>
            </a>
            <a href="https://www.linkedin.com/in/vallisrimani-gudapati-ba7a872a7/" target="_blank" rel="noopener" className="text-[#5a7a94] hover:text-[#00dbff] transition-colors">
              <i className="bi bi-linkedin text-lg"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
