import { useState, useRef } from 'react';

const projectData = [
  {
    title: "Coffee Sales Analysis",
    date: "Nov 2025",
    desc: "Interactive Coffee Sales Dashboard built with Python analyzing sales data from a coffee shop — offering clear insights into product performance with KPI cards and trend charts.",
    fullDesc: "A comprehensive data analysis project featuring interactive KPI cards, sales trend line charts, category-wise breakdown, and time-series analysis. The dashboard provides real-time filtering by date range and product category.",
    features: [
      "Interactive KPI visualization with dynamic updates",
      "Sales trend analysis using time-series line charts",
      "Category-wise product performance breakdown",
      "Responsive Streamlit interface with sidebar filters"
    ],
    challenges: "Handling missing data entries and ensuring smooth real-time filtering across large datasets were key challenges solved with Pandas optimization.",
    image: "https://github.com/user-attachments/assets/856d2776-646d-4e09-b14a-4f399684a240",
    badge: "STREAMLIT",
    tags: ["Python", "Pandas", "NumPy", "Streamlit"],
    github: "https://github.com/avneetkumar80/Coffee-Sales-Analysis",
    preview: null,
  },
  {
    title: "Pizza Store Sales Report",
    date: "Dec 2025",
    desc: "Sales analysis dashboard for a Pizza Store. Provides detailed insights and visualizations for pizza sales data trends using Power BI with DAX measures.",
    fullDesc: "A Power BI dashboard analyzing pizza store sales across multiple dimensions — time, category, size, and top/bottom performers — with drill-through pages and DAX measures.",
    features: [
      "Multi-page Power BI report with professional design",
      "DAX calculated measures for revenue and trends",
      "Drill-through pages for category exploration",
      "Interactive slicers for date and category filtering"
    ],
    challenges: "Designing intuitive drill-through navigation and creating complex DAX measures for comparative analysis required deep Power BI expertise.",
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=800",
    badge: "REPORT",
    tags: ["Data Analytics", "Power BI", "Excel"],
    github: "https://github.com/avneetkumar80/Pizza-Store-Sales-Report",
    preview: "https://github.com/avneetkumar80/Pizza-Store-Sales-Report",
  },
  {
    title: "Library Management System",
    date: "Feb 2026",
    desc: "A Library Management System developed using DSA concepts to efficiently manage books, users, and transactions with hash maps and binary search trees.",
    fullDesc: "Built from scratch using C++ with OOP principles, this system manages book inventory, user accounts, and borrow/return transactions using hash maps, linked lists, and binary search trees.",
    features: [
      "Efficient book search using binary search tree",
      "User authentication and role-based access",
      "Transaction history with linked list implementation",
      "Menu-driven console interface with validation"
    ],
    challenges: "Implementing efficient data structure selection for concurrent book availability checks and memory management without leaks in C++.",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=800",
    badge: "C++",
    tags: ["C++", "DSA", "OOP"],
    github: "https://github.com/avneetkumar80/Library-Management-System",
    preview: "https://github.com/avneetkumar80/Library-Management-System",
  }
];

export default function Projects() {
  const [index, setIndex] = useState(0);
  const [modal, setModal] = useState(null);
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
        <div className="section-head section-head--center" data-reveal="true">
          <div className="section-kicker">
            <span className="kicker-line" aria-hidden="true"></span>
            <span>MY WORK</span>
            <span className="kicker-line" aria-hidden="true"></span>
          </div>
          <h2>Featured <span className="accent">Projects</span></h2>
          <p className="muted">
            A selection of my recent work in Data Science, Machine Learning, and Software Development.
          </p>
        </div>

        <div className="carousel" data-reveal="true">
          <button className="carousel-btn" type="button" aria-label="Previous project" onClick={prev}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          
          <div 
            className="carousel-viewport" 
            aria-label="Project slider"
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
          >
            <div className="carousel-track" style={{ transform: `translateX(${-index * 100}%)` }}>
              {projectData.map((project, i) => (
                <article className="project-slide" key={i}>
                  <div className="project-card">
                    <div className="project-image">
                      <img src={project.image} alt={project.title} loading="lazy" />
                      <div className="project-image-badge">{project.badge}</div>
                    </div>
                    <div className="project-body">
                      <h3 className="project-title">{project.title}</h3>
                      <div className="project-meta">
                        <span className="badge">{project.date}</span>
                        <div className="project-links">
                          <a className="button small" href={project.github} target="_blank" rel="noreferrer">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                            Code
                          </a>
                          {project.preview && (
                            <a className="button small primary" href={project.preview} target="_blank" rel="noreferrer">
                              Live Demo
                            </a>
                          )}
                        </div>
                      </div>
                      <p className="project-desc">{project.desc}</p>
                      <div className="tags" aria-label="Tech tags">
                        {project.tags.map(t => <span className="tag" key={t}>{t}</span>)}
                      </div>
                      <button 
                        className="button view-details-btn" 
                        type="button" 
                        onClick={() => setModal(project)}
                      >
                        View Details →
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button className="carousel-btn" type="button" aria-label="Next project" onClick={next}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>

        <div className="carousel-dots" data-reveal="true">
          {projectData.map((_, idx) => (
            <button 
              key={idx} 
              type="button" 
              className={`carousel-dot ${idx === index ? 'active' : ''}`} 
              aria-label={`Go to project ${idx + 1}`} 
              onClick={() => setIndex(idx)} 
            />
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {modal && (
        <div className="modal-overlay" onClick={() => setModal(null)} role="dialog" aria-modal="true">
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" type="button" onClick={() => setModal(null)} aria-label="Close modal">✕</button>
            <div className="modal-image">
              <img src={modal.image} alt={modal.title} />
            </div>
            <div className="modal-body">
              <div className="modal-header">
                <h3>{modal.title}</h3>
                <span className="badge">{modal.date}</span>
              </div>
              <p className="modal-desc">{modal.fullDesc}</p>
              
              <h4>Key Features</h4>
              <ul className="modal-features">
                {modal.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
              
              <h4>Challenges & Solutions</h4>
              <p className="modal-challenges">{modal.challenges}</p>
              
              <div className="modal-tags">
                {modal.tags.map(t => <span className="tag" key={t}>{t}</span>)}
              </div>
              
              <div className="modal-actions">
                <a className="button primary" href={modal.github} target="_blank" rel="noreferrer">
                  View on GitHub →
                </a>
                {modal.preview && (
                  <a className="button" href={modal.preview} target="_blank" rel="noreferrer">
                    Live Preview
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
