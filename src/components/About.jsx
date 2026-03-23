export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-head" data-reveal="true">
          <div className="section-kicker">
            <span className="kicker-line" aria-hidden="true"></span>
            <span>GET TO KNOW ME</span>
          </div>
          <h2>About Me</h2>
          <div style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'var(--color-text-muted, #9ca3af)', textAlign: 'left', marginTop: '1.5rem' }}>
            <p style={{ marginBottom: '1rem' }}>
              I am a passionate Computer Science undergraduate at Lovely Professional University, with a strong
              interest in data analytics, software development, and problem-solving. I enjoy turning raw data into
              meaningful insights and building practical applications that solve real-world problems.
            </p>
            <p style={{ marginBottom: '1rem' }}>
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
        </div>
      </div>
    </section>
  );
}
