import { useState, useRef } from 'react';

const projectData = [
  {
    title: "Coffee Sales Analysis",
    date: "Nov 2025",
    desc: "This project presents an interactive Coffee Sales Dashboard built using Python to analyze and visualize sales data from a coffee shop, offering clear insights into product performance.",
    image: "https://github.com/user-attachments/assets/856d2776-646d-4e09-b14a-4f399684a240",
    badge: "STREAMLIT",
    tags: ["Python", "Pandas", "NumPy", "Streamlit"],
    github: "https://github.com/avneetkumar80/Coffee-Sales-Analysis",
    preview: null
  },
  {
    title: "Pizza Store Sales Report",
    date: "Dec 2025",
    desc: "Sales analysis and dashboard for a Pizza Store. Provides detailed insights and visualizations for pizza sales data trends.",
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=800",
    badge: "REPORT",
    tags: ["Data Analytics", "Power BI", "Excel"],
    github: "https://github.com/avneetkumar80/Pizza-Store-Sales-Report",
    preview: "https://github.com/avneetkumar80/Pizza-Store-Sales-Report"
  },
  {
    title: "Library Management System",
    date: "Feb 2026",
    desc: "A Library Management System developed using Data Structures and Algorithms concepts to efficiently manage books, users, and transactions.",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=800",
    badge: "C++",
    tags: ["C++", "DSA", "OOP"],
    github: "https://github.com/avneetkumar80/Library-Management-System",
    preview: "https://github.com/avneetkumar80/Library-Management-System"
  }
];

export default function Projects() {
  const [index, setIndex] = useState(0);
  const slideCount = projectData.length;

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
    <section className="section" id="projects">
      <div className="container">
        <div className="section-head" data-reveal="true"
          style={{ textAlign: 'center', maxWidth: 800, marginLeft: 'auto', marginRight: 'auto', paddingBottom: '2rem' }}>
          <h2 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 800, letterSpacing: '-0.5px', marginBottom: '1rem' }}>
            <span style={{ color: '#ffffff' }}>Featured</span> <span style={{ color: '#00E676' }}>Projects</span>
          </h2>
          <p className="muted" style={{ fontSize: 'clamp(16px, 2vw, 20px)', lineHeight: 1.6 }}>
            A selection of my recent work in Data Science, Machine Learning, and Web Development.
          </p>
        </div>

        <div className="carousel">
          <button className="carousel-btn prev" type="button" aria-label="Previous project" onClick={prev}>‹</button>
          
          <div 
            className="carousel-viewport" 
            aria-label="Project slider"
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
          >
            <div className="carousel-track" style={{ transform: `translateX(${-index * 100}%)` }}>
              {projectData.map((project, i) => (
                <article className="project-slide" data-reveal="true" key={i}>
                  <div className="project-card">
                    <div className="project-image" aria-hidden="true">
                      <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <div className="project-image-badge">{project.badge}</div>
                    </div>
                    <div className="project-body">
                      <h3 className="project-title">{project.title}</h3>
                      <div className="project-meta">
                        <span className="badge">{project.date}</span>
                        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                          <a className="button small" href={project.github} target="_blank" rel="noreferrer" style={{ padding: '6px 12px', fontSize: '11px', gap: '4px' }}>
                            <svg style={{ width: 14, height: 14 }} viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            GitHub
                          </a>
                          {project.preview && (
                            <a className="button small ghost" href={project.preview} target="_blank" rel="noreferrer" style={{ padding: '6px 12px', fontSize: '11px', gap: '4px' }}>
                              <svg style={{ width: 14, height: 14 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                              </svg>
                              Preview
                            </a>
                          )}
                        </div>
                      </div>
                      <p className="project-desc">{project.desc}</p>
                      <div className="tags" aria-label="Tech tags">
                        {project.tags.map(t => <span className="tag" key={t}>{t}</span>)}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button className="carousel-btn next" type="button" aria-label="Next project" onClick={next}>›</button>
        </div>

        <div className="carousel-dots" aria-hidden="true">
          {projectData.map((_, idx) => (
            <button 
              key={idx} 
              type="button" 
              className={`carousel-dot ${idx === index ? 'active' : ''}`} 
              aria-label={`Go to slide ${idx + 1}`} 
              onClick={() => setIndex(idx)} 
              // Vanilla CSS doesn't have an .active class for dots defined globally, 
              // so we handle style with inline or it will just be ignored. I'll add scale inline.
              style={idx === index ? { transform: 'scale(1.2)', background: 'var(--accent)' } : {}}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
