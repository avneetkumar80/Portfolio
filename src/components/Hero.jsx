export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-inner">
        <div className="hero-left" data-reveal="true">
          <div className="pill" aria-label="Status">SYSTEM ONLINE</div>

          <h1 className="hero-title">
            Avneet Kumar
          </h1>
          <p className="hero-subtitle">
            I'm an Aspiring <span className="accent">Data Analytics</span> &amp; <span className="accent-2">ML Engineer</span>
          </p>
          <p className="hero-lead">
            Computer Science Engineering student with experience in data cleaning, KPI visualization, interactive
            Streamlit
            dashboards, and real-time process monitoring with forecasting and anomaly detection.
          </p>

          <div className="cta-row">
            <a className="button primary" href="#projects">View Projects<span className="btn-arrow"
                aria-hidden="true">→</span></a>
            <a className="button" href="#contact">Contact Me</a>
          </div>

          <div className="social-row">
            <a className="chip" href="https://linkedin.com/in/avneetkumar80/" target="_blank"
              rel="noreferrer">LinkedIn</a>
            <a className="chip" href="https://github.com/avneetkumar80" target="_blank" rel="noreferrer">GitHub</a>
            <a className="chip" href="https://avneetkumar.github.io/" target="_blank" rel="noreferrer">Portfolio</a>
          </div>
        </div>

        <div className="hero-right" data-reveal="true">
          <div className="avatar-ring" aria-hidden="true"></div>
          <div className="avatar-wrap">
            <img className="avatar-img" src="./assets/profile.png" alt="Avneet Kumar" />
          </div>
          <div className="status-dot" aria-hidden="true"></div>
        </div>
      </div>
    </section>
  );
}
