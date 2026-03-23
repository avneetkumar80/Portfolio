export default function About() {
  const facts = [
    { icon: "📍", label: "Location", value: "Phagwara, Punjab" },
    { icon: "🎓", label: "University", value: "Lovely Professional University" },
    { icon: "💻", label: "Focus", value: "Data Analytics & ML" },
    { icon: "🌐", label: "Languages", value: "English, Hindi" },
  ];

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-head" data-reveal="true">
          <div className="section-kicker">
            <span className="kicker-line" aria-hidden="true"></span>
            <span>GET TO KNOW ME</span>
          </div>
          <h2>About Me</h2>
        </div>

        <div className="about-grid" data-reveal="true">
          <div className="about-text">
            <p>
              I am a passionate Computer Science undergraduate at Lovely Professional University, with a strong
              interest in data analytics, software development, and problem-solving. I enjoy turning raw data into
              meaningful insights and building practical applications that solve real-world problems.
            </p>
            <p>
              With hands-on experience in technologies like C++, Python, and JavaScript, I have developed multiple
              projects including interactive dashboards, data analysis systems, and real-time monitoring tools. I am
              particularly skilled in using tools such as Pandas, NumPy, Streamlit, and Power BI to analyze data and
              present it in a clear, impactful way.
            </p>
            <p>
              I am a quick learner who continuously strives to improve my technical and analytical skills. My goal is
              to build efficient, scalable solutions and grow as a software engineer while contributing to innovative
              and impactful projects.
            </p>
          </div>

          <div className="about-facts">
            {facts.map((f, idx) => (
              <div className="fact-card" key={idx}>
                <span className="fact-icon">{f.icon}</span>
                <div>
                  <span className="fact-label">{f.label}</span>
                  <span className="fact-value">{f.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
