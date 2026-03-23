export default function Skills() {
  const skills = [
    { name: "C++", i1: "#f97316", i2: "#f59e0b", icon: "C++" },
    { name: "Python", i1: "#38bdf8", i2: "#6366f1", icon: "Py" },
    { name: "JavaScript", i1: "#f472b6", i2: "#a78bfa", icon: "JS" },
    { name: "HTML & CSS", i1: "#22c55e", i2: "#0ea5e9", icon: "</>" },
    { name: "Node.js", i1: "#fb7185", i2: "#f97316", icon: "Node" },
    { name: "Streamlit", i1: "#06b6d4", i2: "#818cf8", icon: "ST" },
    { name: "NumPy", i1: "#60a5fa", i2: "#22d3ee", icon: "NP" },
    { name: "Pandas", i1: "#34d399", i2: "#60a5fa", icon: "PD" },
    { name: "scikit-learn", i1: "#a78bfa", i2: "#f472b6", icon: "SK" },
    { name: "Tkinter", i1: "#22d3ee", i2: "#06b6d4", icon: "Tk" },
    { name: "OpenCV", i1: "#10b981", i2: "#f59e0b", icon: "CV" },
    { name: "MS Excel", i1: "#fbbf24", i2: "#22d3ee", icon: "XL" },
    { name: "Power BI", i1: "#06b6d4", i2: "#a78bfa", icon: "PB" },
    { name: "Problem Solving", i1: "#818cf8", i2: "#34d399", icon: "Solv" },
    { name: "Quick Learner", i1: "#22c55e", i2: "#06b6d4", icon: "QL" },
    { name: "Adaptability", i1: "#f472b6", i2: "#60a5fa", icon: "ML" },
    { name: "Time Management", i1: "#f59e0b", i2: "#22d3ee", icon: "Time" },
  ];

  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-head" data-reveal="true">
          <div className="section-kicker">
            <span className="kicker-line" aria-hidden="true"></span>
            <span>TECHNICAL EXCELLENCE</span>
          </div>
          <h2>Skills &amp; Tools</h2>
          <p className="muted">
            A specialized toolkit focused on data science, machine learning, dashboards, and automation.
          </p>
        </div>

        <div className="skills-grid" aria-label="Skill tiles">
          {skills.map((s, idx) => (
            <div className="skill-tile" data-reveal="true" key={idx}>
              <div className="skill-icon" style={{ '--i1': s.i1, '--i2': s.i2 }} aria-hidden="true">{s.icon}</div>
              <div className="skill-name">{s.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
