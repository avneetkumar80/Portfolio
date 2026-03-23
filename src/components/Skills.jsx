import { useState } from 'react';

const skillCategories = {
  "Languages": [
    { name: "C++", level: 75, i1: "#f97316", i2: "#f59e0b", icon: "C++" },
    { name: "Python", level: 80, i1: "#38bdf8", i2: "#6366f1", icon: "Py" },
    { name: "JavaScript", level: 65, i1: "#f472b6", i2: "#a78bfa", icon: "JS" },
    { name: "HTML & CSS", level: 85, i1: "#22c55e", i2: "#0ea5e9", icon: "</>" },
    { name: "SQL", level: 70, i1: "#06b6d4", i2: "#818cf8", icon: "SQL" },
  ],
  "Frameworks & Libraries": [
    { name: "Node.js", level: 55, i1: "#fb7185", i2: "#f97316", icon: "Node" },
    { name: "Streamlit", level: 80, i1: "#06b6d4", i2: "#818cf8", icon: "ST" },
    { name: "NumPy", level: 75, i1: "#60a5fa", i2: "#22d3ee", icon: "NP" },
    { name: "Pandas", level: 82, i1: "#34d399", i2: "#60a5fa", icon: "PD" },
    { name: "scikit-learn", level: 60, i1: "#a78bfa", i2: "#f472b6", icon: "SK" },
    { name: "Tkinter", level: 55, i1: "#22d3ee", i2: "#06b6d4", icon: "Tk" },
    { name: "OpenCV", level: 50, i1: "#10b981", i2: "#f59e0b", icon: "CV" },
  ],
  "Tools & Platforms": [
    { name: "MS Excel", level: 80, i1: "#fbbf24", i2: "#22d3ee", icon: "XL" },
    { name: "Power BI", level: 75, i1: "#06b6d4", i2: "#a78bfa", icon: "PB" },
    { name: "Git", level: 70, i1: "#f97316", i2: "#fb7185", icon: "Git" },
    { name: "VS Code", level: 85, i1: "#38bdf8", i2: "#6366f1", icon: "VS" },
  ],
  "Soft Skills": [
    { name: "Problem Solving", level: 85, i1: "#818cf8", i2: "#34d399", icon: "🧩" },
    { name: "Quick Learner", level: 90, i1: "#22c55e", i2: "#06b6d4", icon: "⚡" },
    { name: "Adaptability", level: 80, i1: "#f472b6", i2: "#60a5fa", icon: "🔄" },
    { name: "Time Management", level: 75, i1: "#f59e0b", i2: "#22d3ee", icon: "⏱️" },
  ]
};

const tabs = Object.keys(skillCategories);

export default function Skills() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

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

        <div className="skill-tabs" data-reveal="true">
          {tabs.map(tab => (
            <button 
              key={tab}
              className={`skill-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
              type="button"
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="skills-grid" aria-label="Skill tiles">
          {skillCategories[activeTab].map((s, idx) => (
            <div className="skill-tile" data-reveal="true" key={`${activeTab}-${idx}`}>
              <div className="skill-icon" style={{ '--i1': s.i1, '--i2': s.i2 }} aria-hidden="true">{s.icon}</div>
              <div className="skill-info">
                <div className="skill-name">{s.name}</div>
                <div className="skill-bar-track">
                  <div 
                    className="skill-bar-fill" 
                    style={{ width: `${s.level}%`, background: `linear-gradient(90deg, ${s.i1}, ${s.i2})` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
