import { Outlet, NavLink } from 'react-router-dom';
import { useState, useCallback } from 'react';

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
      isActive
        ? 'bg-gradient-to-r from-[#00ffff]/20 to-[#10a5f5]/20 text-[#00ffff] shadow-[0_0_12px_rgba(0,255,255,0.15)]'
        : 'text-[#8ba3b8] hover:text-[#00dbff] hover:bg-white/5'
    }`;

  return (
    <div className="flex flex-col min-h-screen bg-[#060e1a]">
      {/* ── NAVBAR ── */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#0c1a2e]/80 border-b border-[rgba(0,219,255,0.12)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <NavLink to="/" className="flex items-center gap-3 group" onClick={closeMenu}>
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#00ffff] to-[#0859c6] flex items-center justify-center shadow-lg shadow-[#00ffff]/20 group-hover:shadow-[#00ffff]/40 transition-shadow duration-300">
                <i className="bi bi-robot text-white text-lg"></i>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#00ffff] to-[#0859c6] opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300 -z-10"></div>
              </div>
              <div>
                <h1 className="text-lg font-display font-bold text-white leading-tight">GenAI LLM</h1>
                <p className="text-[10px] text-[#5a7a94] tracking-widest uppercase font-medium">Chat Bots</p>
              </div>
            </NavLink>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-2">
              <NavLink to="/" className={navLinkClass} end>
                <i className="bi bi-house-door"></i> Home
              </NavLink>
              <NavLink to="/chat" className={navLinkClass}>
                <i className="bi bi-chat-dots"></i> Chat
              </NavLink>
              <NavLink to="/about" className={navLinkClass}>
                <i className="bi bi-info-circle"></i> About
              </NavLink>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden p-2 rounded-lg text-[#8ba3b8] hover:text-[#00ffff] hover:bg-white/5 transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <i className={`bi ${mobileMenuOpen ? 'bi-x-lg' : 'bi-list'} text-xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[rgba(0,219,255,0.08)] bg-[#0c1a2e]/95 backdrop-blur-xl animate-[fadeIn_200ms_ease]">
            <div className="px-4 py-3 space-y-1">
              <NavLink to="/" className={navLinkClass} end onClick={closeMenu}>
                <i className="bi bi-house-door"></i> Home
              </NavLink>
              <NavLink to="/chat" className={navLinkClass} onClick={closeMenu}>
                <i className="bi bi-chat-dots"></i> Chat
              </NavLink>
              <NavLink to="/about" className={navLinkClass} onClick={closeMenu}>
                <i className="bi bi-info-circle"></i> About
              </NavLink>
            </div>
          </div>
        )}
      </nav>

      {/* ── PAGE CONTENT ── */}
      <main className="flex-1 flex flex-col min-h-0">
        <Outlet />
      </main>
    </div>
  );
}
