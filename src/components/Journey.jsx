export default function Journey() {
  const milestones = [
    {
      year: "2020",
      title: "Matriculation Completed",
      detail: "Paramount Academy, Silaut Bimal, Muzaffarpur, Bihar — Percentage: 56.4%",
      icon: "🎓"
    },
    {
      year: "2022",
      title: "Intermediate Completed",
      detail: "Laxmi Rajdeo School, Muzaffarpur, Bihar — Percentage: 65%",
      icon: "📜"
    },
    {
      year: "2023",
      title: "Started B.Tech at LPU",
      detail: "Lovely Professional University, Phagwara, Punjab — Computer Science & Engineering",
      icon: "🏫"
    },
    {
      year: "2024",
      title: "First Data Project",
      detail: "Built interactive Coffee Sales Dashboard with Streamlit — first deep dive into data analytics",
      icon: "📊"
    },
    {
      year: "2025",
      title: "Certifications & Growth",
      detail: "Earned Oracle AI Foundations, Coursera Software Engineering, HackerRank SQL — broadened technical horizon",
      icon: "🏆"
    },
    {
      year: "2026",
      title: "Building My Future",
      detail: "Continuing B.Tech (CGPA: 6.03) — actively building portfolio, solving DSA problems, and exploring ML",
      icon: "🚀"
    }
  ];

  return (
    <section className="section" id="journey">
      <div className="container">
        <div className="section-head" data-reveal="true">
          <div className="section-kicker">
            <span className="kicker-line" aria-hidden="true"></span>
            <span>MY JOURNEY</span>
          </div>
          <h2>Academic Journey</h2>
          <p className="muted">A timeline of my academic milestones, achievements, and growth.</p>
        </div>

        <div className="journey-timeline">
          {milestones.map((m, idx) => (
            <div className="journey-item" data-reveal="true" key={idx}>
              <div className="journey-year-col">
                <span className="journey-year">{m.year}</span>
              </div>
              <div className="journey-track">
                <div className="journey-node">
                  <span className="journey-icon">{m.icon}</span>
                </div>
                {idx < milestones.length - 1 && <div className="journey-connector" aria-hidden="true"></div>}
              </div>
              <div className="journey-card">
                <h3 className="journey-title">{m.title}</h3>
                <p className="journey-detail">{m.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
