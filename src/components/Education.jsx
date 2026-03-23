export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <div className="section-head" data-reveal="true">
          <div className="section-kicker">
            <span className="kicker-line" aria-hidden="true"></span>
            <span>EDUCATION</span>
          </div>
          <h2>Academic Background</h2>
        </div>

        <div className="timeline">
          <div className="time-item" data-reveal="true">
            <div className="time-dot" aria-hidden="true"></div>
            <div className="time-content">
              <h3>Lovely Professional University</h3>
              <p className="muted">Phagwara, Punjab</p>
              <p><strong>Bachelor of Technology</strong> - Computer Science and Engineering</p>
              <p className="muted">CGPA: 6.03 (Present) | Aug 2023 - Present</p>
            </div>
          </div>

          <div className="time-item" data-reveal="true">
            <div className="time-dot" aria-hidden="true"></div>
            <div className="time-content">
              <h3>Laxmi Rajdeo School</h3>
              <p className="muted">Muzaffarpur, Bihar</p>
              <p><strong>Intermediate</strong></p>
              <p className="muted">Percentage: 65% | Apr 2022 - Jun 2023</p>
            </div>
          </div>

          <div className="time-item" data-reveal="true">
            <div className="time-dot" aria-hidden="true"></div>
            <div className="time-content">
              <h3>Paramount Academy</h3>
              <p className="muted">Silaut Bimal, Muzaffarpur, Bihar</p>
              <p><strong>Matriculation</strong></p>
              <p className="muted">Percentage: 56.4% | Apr 2020 - Mar 2021</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
