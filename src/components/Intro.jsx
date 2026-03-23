import { useEffect, useState } from 'react';

export default function Intro() {
  const [greeting, setGreeting] = useState('');
  const [typedText, setTypedText] = useState('');
  const [isHidden, setIsHidden] = useState(false);
  const [removeOverlay, setRemoveOverlay] = useState(false);

  const fullText = "Initializing Portfolio...";

  useEffect(() => {
    const h = new Date().getHours();
    if (h >= 5 && h < 12) setGreeting("Good Morning");
    else if (h >= 12 && h < 17) setGreeting("Good Afternoon");
    else setGreeting("Good Evening");
    
    const prefersReducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    // Lock scroll initially
    document.documentElement.style.overflow = "hidden";

    const finish = () => {
      setIsHidden(true);
      document.documentElement.style.overflow = ""; // Unlock scroll
      setTimeout(() => setRemoveOverlay(true), 450); // wait for fade out
    };

    if (prefersReducedMotion) {
      setTypedText(fullText);
      setTimeout(finish, 400);
    } else {
      let i = 0;
      const speedMs = 55;
      let timeout;

      const tick = () => {
        if (i <= fullText.length) {
          setTypedText(fullText.slice(0, i));
          i++;
          timeout = setTimeout(tick, speedMs);
        } else {
          timeout = setTimeout(finish, 650);
        }
      };

      timeout = setTimeout(tick, 120);
      return () => clearTimeout(timeout);
    }
  }, []);

  if (removeOverlay) return null;

  return (
    <div className={`intro-overlay ${isHidden ? 'is-hidden' : ''}`} role="status" aria-live="polite">
      <div className="intro-inner">
        <div className="intro-title">{greeting}</div>
        <div className="intro-subtitle">Rise and shine</div>
        <div className="intro-line" aria-label="Initializing portfolio">
          <span className="typing-text">{typedText}</span>
          <span className="typing-cursor" aria-hidden="true">|</span>
        </div>
      </div>
    </div>
  );
}
