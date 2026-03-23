import { useState, useEffect } from 'react';

export default function Header({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Smooth scroll
  useEffect(() => {
    const handleScroll = (e) => {
      const target = e.target;
      const a = target.closest("a[href^='#']");
      if (!a) return;
      const href = a.getAttribute("href");
      if (!href || href === "#") return;
      
      const section = document.querySelector(href);
      if (!section) return;
      
      e.preventDefault();
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    };
    
    document.addEventListener("click", handleScroll);
    return () => document.removeEventListener("click", handleScroll);
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#home" aria-label="Avneet Kumar home">
            <span className="brand-mark" aria-hidden="true">
              <span className="brand-console">AK</span>
            </span>
            <span className="brand-name">Avneet Kumar</span>
          </a>

          <button 
            className="nav-toggle" 
            type="button" 
            aria-label="Open menu" 
            aria-expanded={menuOpen} 
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span aria-hidden="true">Menu</span>
          </button>

          <nav className="nav" aria-label="Primary" data-open={menuOpen ? "true" : "false"}>
            <ul className="nav-list">
              <li><a className="nav-link" href="#home">Home</a></li>
              <li><a className="nav-link" href="#about">About</a></li>
              <li><a className="nav-link" href="#skills">Skills</a></li>
              <li><a className="nav-link" href="#projects">Projects</a></li>
              <li><a className="nav-link" href="#competitive">Competitive</a></li>
              <li><a className="nav-link" href="#education">Education</a></li>
              <li><a className="nav-link" href="#certificates">Certificates</a></li>
              <li><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </nav>

          <button className="icon-button theme-toggle" type="button" onClick={toggleTheme} aria-label="Toggle theme">
            <span className="icon" aria-hidden="true">{theme === 'dark' ? '☼' : '☾'}</span>
          </button>
        </div>
      </header>
    </>
  );
}
