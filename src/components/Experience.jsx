export default function Experience() {
  const experiences = [
    {
      role: "Data Analytics Project Developer",
      org: "Self-directed / Academic",
      date: "Jan 2025 – Present",
      desc: [
        "Developed interactive Streamlit dashboards for coffee sales and pizza store data analysis with real-time KPI visualization.",
        "Integrated Pandas, NumPy, and Matplotlib for data cleaning, transformation, and chart rendering.",
        "Designed Power BI reports with calculated measures, slicers, and drill-through pages for business insights."
      ],
      tags: ["Python", "Streamlit", "Power BI", "Pandas"]
    },
    {
      role: "Software Engineering Intern (Virtual)",
      org: "Coursera / IBM",
      date: "Apr 2025 – May 2025",
      desc: [
        "Completed IBM's Software Engineering Professional Certificate covering agile development, CI/CD, and cloud-native practices.",
        "Built sample microservices using REST APIs and containerized deployments.",
        "Gained hands-on experience with version control, testing frameworks, and DevOps workflows."
      ],
      tags: ["Agile", "REST APIs", "CI/CD", "Cloud"]
    },
    {
      role: "Competitive Programming Enthusiast",
      org: "LeetCode / HackerRank",
      date: "Aug 2023 – Present",
      desc: [
        "Solved 35+ problems on LeetCode across Easy, Medium, and Hard difficulty levels.",
        "Earned SQL Basic and Intermediate certifications on HackerRank.",
        "Practiced DSA concepts: arrays, linked lists, trees, dynamic programming, and sorting algorithms."
      ],
      tags: ["C++", "DSA", "SQL", "Problem Solving"]
    }
  ];

  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-head" data-reveal="true">
          <div className="section-kicker">
            <span className="kicker-line" aria-hidden="true"></span>
            <span>EXPERIENCE</span>
          </div>
          <h2>Work & Experience</h2>
          <p className="muted">Highlights from my professional and project-based journey.</p>
        </div>

        <div className="exp-timeline">
          {experiences.map((exp, idx) => (
            <article className="exp-card" data-reveal="true" key={idx}>
              <div className="exp-dot-line">
                <div className="exp-dot" aria-hidden="true"></div>
                {idx < experiences.length - 1 && <div className="exp-line" aria-hidden="true"></div>}
              </div>
              <div className="exp-content">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <p className="exp-org">{exp.org}</p>
                  </div>
                  <span className="badge">{exp.date}</span>
                </div>
                <ul className="exp-bullets">
                  {exp.desc.map((d, i) => <li key={i}>{d}</li>)}
                </ul>
                <div className="tags">
                  {exp.tags.map(t => <span className="tag" key={t}>{t}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
