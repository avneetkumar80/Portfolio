export default function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="section-head" data-reveal="true">
          <div className="section-kicker">
            <span className="kicker-line" aria-hidden="true"></span>
            <span>LET'S CONNECT</span>
          </div>
          <h2>Contact</h2>
          <p className="muted">Available for new opportunities and collaborations.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-item" data-reveal="true">
            <span className="contact-label">Email</span>
            <a className="contact-value" href="mailto:avneetkumar805@gmail.com">avneetkumar805@gmail.com</a>
          </div>
          <div className="contact-item" data-reveal="true">
            <span className="contact-label">Phone</span>
            <a className="contact-value" href="tel:+919507995686">+91 9507995686</a>
          </div>
          <div className="contact-item" data-reveal="true">
            <span className="contact-label">GitHub</span>
            <a className="contact-value" href="https://github.com/avneetkumar80" target="_blank"
              rel="noreferrer">github.com/avneetkumar80</a>
          </div>
          <div className="contact-item" data-reveal="true">
            <span className="contact-label">LinkedIn</span>
            <a className="contact-value" href="https://linkedin.com/in/avneetkumar80/" target="_blank"
              rel="noreferrer">linkedin.com/in/avneetkumar80</a>
          </div>
        </div>

        <div className="footer" data-reveal="true">
          <p className="muted small">Copyright &copy; <span>{currentYear}</span> Avneet Kumar. Built with React and Vite.
          </p>
        </div>
      </div>
    </section>
  );
}
