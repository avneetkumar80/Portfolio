const certs = [
  {
    title: "Cloud Infrastructure Certified AI Foundations Associate",
    issuer: "Oracle",
    date: "Aug 2025",
    desc: "AI concepts, ML workflows, and Oracle Cloud AI services.",
    link: "https://drive.google.com/file/d/1WEE9VBYODP_6ZfBnXLzhgYD69FlaeYYa/view?usp=drive_link",
    color: "#f97316"
  },
  {
    title: "Software Engineering",
    issuer: "Coursera (IBM)",
    date: "May 2025",
    desc: "Agile development, CI/CD, cloud-native practices.",
    link: "https://www.coursera.org/account/accomplishments/verify/JM25T522CSL6",
    color: "#10b981"
  },
  {
    title: "SQL (Basic & Intermediate)",
    issuer: "HackerRank",
    date: "Sep 2025",
    desc: "Complex queries, joins, subqueries, window functions.",
    link: "https://www.hackerrank.com/certificates/6bc68e896727",
    color: "#22d3ee"
  }
];

export default function Certificates() {
  return (
    <section className="section" id="certificates">
      <div className="container">
        <div className="section-head section-head--center" data-reveal="true">
          <div className="section-kicker">
            <span className="kicker-line" aria-hidden="true"></span>
            <span>CREDENTIALS</span>
            <span className="kicker-line" aria-hidden="true"></span>
          </div>
          <h2>Certificates & <span className="accent">Achievements</span></h2>
          <p className="muted">Industry-recognized certifications validating my expertise.</p>
        </div>

        <div className="scroll-row" data-reveal="true">
          {certs.map((cert, i) => (
            <div className="scroll-card cert-scroll-card" key={i} style={{ '--cert-color': cert.color }}>
              <div className="cert-accent-bar" aria-hidden="true"></div>
              <div className="cert-scroll-icon">🏅</div>
              <h3 className="cert-scroll-title">{cert.title}</h3>
              <div className="cert-scroll-meta">
                <span className="cert-issuer">{cert.issuer}</span>
                <span className="badge">{cert.date}</span>
              </div>
              <p className="cert-scroll-desc">{cert.desc}</p>
              <a className="button small primary" href={cert.link} target="_blank" rel="noreferrer">
                Verify →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
