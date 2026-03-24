import { useState, useEffect } from 'react';

export default function Contact() {
  const currentYear = new Date().getFullYear();
  const [scrollVisible, setScrollVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  // Show scroll-to-top after user scrolls
  useEffect(() => {
    const handleScroll = () => {
      setScrollVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formsubmit.co/ajax/avneetkumar805@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio Contact from ${formData.name}`,
        }),
      });
      const data = await response.json();
      if (data.success === 'true' || data.success === true) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else if (data.message && data.message.includes('Activation')) {
        setStatus('activate');
        setTimeout(() => setStatus('idle'), 8000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="section-head" data-reveal="true">
          <div className="section-kicker">
            <span className="kicker-line" aria-hidden="true"></span>
            <span>LET'S CONNECT</span>
          </div>
          <h2>Get In Touch</h2>
          <p className="muted">Available for new opportunities, collaborations, and interesting projects.</p>
        </div>

        <div className="contact-layout">
          <div className="contact-grid">
            <div className="contact-item" data-reveal="true">
              <span className="contact-icon">📧</span>
              <span className="contact-label">Email</span>
              <a className="contact-value" href="mailto:avneetkumar805@gmail.com">avneetkumar805@gmail.com</a>
            </div>
            <div className="contact-item" data-reveal="true">
              <span className="contact-icon">📱</span>
              <span className="contact-label">Phone</span>
              <a className="contact-value" href="tel:+919507995686">+91 9507995686</a>
            </div>
            <div className="contact-item" data-reveal="true">
              <span className="contact-icon">💻</span>
              <span className="contact-label">GitHub</span>
              <a className="contact-value" href="https://github.com/avneetkumar80" target="_blank" rel="noreferrer">github.com/avneetkumar80</a>
            </div>
            <div className="contact-item" data-reveal="true">
              <span className="contact-icon">🔗</span>
              <span className="contact-label">LinkedIn</span>
              <a className="contact-value" href="https://linkedin.com/in/avneetkumar80/" target="_blank" rel="noreferrer">linkedin.com/in/avneetkumar80</a>
            </div>
          </div>

          <form className="contact-form" data-reveal="true" onSubmit={handleSubmit}>
            <h3>Send a Message</h3>
            <div className="form-group">
              <input type="text" name="name" placeholder="Your Name" required className="form-input" value={formData.name} onChange={handleChange} />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Your Email" required className="form-input" value={formData.email} onChange={handleChange} />
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Your Message..." required rows="4" className="form-input form-textarea" value={formData.message} onChange={handleChange}></textarea>
            </div>
            <button type="submit" className="button primary" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send Message →'}
            </button>
            {status === 'success' && (
              <p className="form-status success">✅ Message sent successfully! I'll get back to you soon.</p>
            )}
            {status === 'activate' && (
              <p className="form-status activate">📧 Almost there! Check your Gmail for an activation email from FormSubmit and click the activation link. Then try sending again.</p>
            )}
            {status === 'error' && (
              <p className="form-status error">❌ Something went wrong. Please try again or email me directly.</p>
            )}
          </form>
        </div>

        {/* Footer */}
        <footer className="site-footer" data-reveal="true">
          <div className="footer-gradient-line"></div>
          <div className="footer-content">
            <p className="footer-copy">© {currentYear} Avneet Kumar. Built with React &amp; Vite.</p>
            <div className="footer-socials">
              <a href="https://linkedin.com/in/avneetkumar80/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
              <a href="https://github.com/avneetkumar80" target="_blank" rel="noreferrer" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
              </a>
              <a href="https://leetcode.com/u/xWUWlV65OV/" target="_blank" rel="noreferrer" aria-label="LeetCode">⚡</a>
            </div>
            <button className={`scroll-top-btn ${scrollVisible ? 'visible' : ''}`} onClick={scrollToTop} aria-label="Scroll to top" type="button">↑</button>
          </div>
        </footer>
      </div>
    </section>
  );
}
