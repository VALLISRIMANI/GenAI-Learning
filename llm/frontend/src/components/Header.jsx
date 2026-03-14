import { useEffect, useState } from "react";

export default function Header({ toggleSidebar }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Check local storage or system preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.setAttribute("data-theme", savedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.body.setAttribute("data-theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <header className="app-header">
      <div className="app-title">
        <button 
          className="mobile-sidebar-toggle" 
          onClick={toggleSidebar}
          aria-label="Toggle Sidebar"
        >
          <i className="fas fa-bars"></i>
        </button>
        <i className="fas fa-sparkles"></i> 
        GenAI LLM Chat Bots
      </div>
      
      <button 
        className="theme-toggle-btn"
        onClick={toggleTheme}
        aria-label="Toggle Theme"
      >
        {theme === "light" ? (
          <><i className="fas fa-moon"></i> Dark</>
        ) : (
          <><i className="fas fa-sun"></i> Light</>
        )}
      </button>
    </header>
  );
}
