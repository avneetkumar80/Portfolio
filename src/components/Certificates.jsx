import { useState, useRef } from 'react';

const certs = [
  {
    title: "Cloud Infrastructure Certified AI Foundations Associate",
    issuer: "Oracle",
    date: "Aug 2025",
    desc: "Foundational certificate covering AI concepts, machine learning workflows, and Oracle Cloud AI services.",
    link: "https://drive.google.com/file/d/1WEE9VBYODP_6ZfBnXLzhgYD69FlaeYYa/view?usp=drive_link",
    color: "#f97316"
  },
  {
    title: "Software Engineering",
    issuer: "Coursera (IBM)",
    date: "May 2025",
    desc: "Professional certificate covering agile development, CI/CD pipelines, cloud-native practices, and software engineering best practices.",
    link: "https://www.coursera.org/account/accomplishments/verify/JM25T522CSL6",
    color: "#10b981"
  },
  {
    title: "SQL (Basic & Intermediate)",
    issuer: "HackerRank",
    date: "Sep 2025",
    desc: "Verified SQL proficiency covering complex queries, joins, subqueries, window functions, and database management.",
    link: "https://www.hackerrank.com/certificates/6bc68e896727",
    color: "#22d3ee"
  }
];

export default function Certificates() {
  const [index, setIndex] = useState(0);
  const slideCount = certs.length;

  const next = () => setIndex((index + 1) % slideCount);
  const prev = () => setIndex((index - 1 + slideCount) % slideCount);

  let startX = useRef(0);
  let isDown = useRef(false);

  const onPointerDown = (e) => {
    isDown.current = true;
    startX.current = e.clientX;
  };
  
  const onPointerUp = (e) => {
    if (!isDown.current) return;
    isDown.current = false;
    const dx = e.clientX - startX.current;
    if (Math.abs(dx) < 40) return;
    if (dx < 0) next();
    else prev();
  };

  return (
    <section className="section" id="certificates">
      <div className="container">
        <div className="section-head section-head--center" data-reveal="true">
          <div className="section-kicker">
            <span className="kicker-line" aria-hidden="true"></span>
            <span>CREDENTIALS</span>
            <span className="kicker-line" aria-hidden="true"></span>
          </div>
          <h2>Verified <span className="accent">Certificates</span></h2>
          <p className="muted">Industry-recognized certifications validating my technical expertise.</p>
        </div>

        <div className="carousel" data-reveal="true">
          <button className="carousel-btn" type="button" aria-label="Previous certificate" onClick={prev}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          
          <div 
            className="carousel-viewport" 
            aria-label="Certificate slider"
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
          >
            <div className="carousel-track" style={{ transform: `translateX(${-index * 100}%)` }}>
              {certs.map((cert, i) => (
                <div className="project-slide" key={i}>
                  <div className="cert-card-carousel" style={{ '--cert-color': cert.color }}>
                    <div className="cert-carousel-accent" aria-hidden="true"></div>
                    <div className="cert-carousel-icon">🏅</div>
                    <h3 className="cert-carousel-title">{cert.title}</h3>
                    <div className="cert-carousel-meta">
                      <span className="cert-issuer">{cert.issuer}</span>
                      <span className="badge">{cert.date}</span>
                    </div>
                    <p className="cert-carousel-desc">{cert.desc}</p>
                    <a className="button small primary" href={cert.link} target="_blank" rel="noreferrer">
                      Verify Certificate →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="carousel-btn" type="button" aria-label="Next certificate" onClick={next}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>

        <div className="carousel-dots" data-reveal="true">
          {certs.map((_, idx) => (
            <button 
              key={idx} 
              type="button" 
              className={`carousel-dot ${idx === index ? 'active' : ''}`} 
              aria-label={`Go to certificate ${idx + 1}`} 
              onClick={() => setIndex(idx)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
