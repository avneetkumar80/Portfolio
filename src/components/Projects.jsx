import { useState } from 'react';

const projectData = [
  {
    title: "Coffee Sales Analysis",
    date: "Nov 2025",
    desc: "Interactive Coffee Sales Dashboard built with Python analyzing sales data from a coffee shop.",
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
    desc: "Sales analysis dashboard for a Pizza Store with Power BI and DAX measures.",
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
    desc: "Library system built with DSA concepts — hash maps, linked lists, and BSTs.",
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
  },
  {
    title: "Weather Dashboard",
    date: "Mar 2026",
    desc: "Real-time weather tracking app with 5-day forecast, city search, and interactive map visualization.",
    fullDesc: "A responsive weather dashboard that fetches live data from OpenWeatherMap API. Features include city search with autocomplete, 5-day hourly forecast charts, interactive map with weather overlays, and saved favorite locations.",
    features: [
      "Real-time weather data with auto-refresh",
      "5-day forecast with hourly breakdown charts",
      "Interactive map with temperature/rain overlays",
      "Favorite locations with localStorage persistence"
    ],
    challenges: "Handling API rate limits gracefully and rendering smooth chart animations on mobile devices.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=800",
    badge: "REACT",
    tags: ["React", "API", "Chart.js", "Leaflet"],
    github: "#",
    preview: "#",
  },
  {
    title: "E-Commerce REST API",
    date: "Jan 2026",
    desc: "Scalable RESTful API for an e-commerce platform with JWT auth, product CRUD, and order management.",
    fullDesc: "A backend API built with Node.js and Express, featuring JWT authentication, role-based access control, product catalog management, shopping cart, and Stripe payment integration with MongoDB database.",
    features: [
      "JWT-based authentication with refresh tokens",
      "Role-based access control (admin, seller, buyer)",
      "Product catalog with search, filter, and pagination",
      "Stripe payment integration with webhook handling"
    ],
    challenges: "Designing an efficient database schema for handling concurrent orders and inventory updates without race conditions.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
    badge: "NODE.JS",
    tags: ["Node.js", "Express", "MongoDB", "Stripe"],
    github: "#",
    preview: null,
  },
  {
    title: "Sentiment Analyzer",
    date: "Oct 2025",
    desc: "NLP-based sentiment analysis tool for product reviews using BERT and a Streamlit dashboard.",
    fullDesc: "A machine learning project that fine-tunes a BERT model on product review datasets to classify sentiments as positive, negative, or neutral. Includes a Streamlit interface for real-time text analysis and batch CSV processing.",
    features: [
      "Fine-tuned BERT model with 92% accuracy",
      "Real-time single-text sentiment prediction",
      "Batch CSV upload and processing",
      "Visualization of sentiment distribution and word clouds"
    ],
    challenges: "Optimizing BERT inference speed for real-time predictions and handling class imbalance in the training dataset.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    badge: "ML",
    tags: ["Python", "BERT", "NLP", "Streamlit"],
    github: "#",
    preview: "#",
  }
];

export default function Projects() {
  const [modal, setModal] = useState(null);

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
            A selection of my recent work in Data Science, ML, and Software Development.
          </p>
        </div>

        <div className="scroll-row" data-reveal="true">
          {projectData.map((project, i) => (
            <article className="scroll-card project-scroll-card" key={i}>
              <div className="scroll-card-image">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="scroll-card-badge">{project.badge}</div>
              </div>
              <div className="scroll-card-body">
                <h3 className="scroll-card-title">{project.title}</h3>
                <span className="badge">{project.date}</span>
                <p className="scroll-card-desc">{project.desc}</p>
                <div className="tags">
                  {project.tags.map(t => <span className="tag" key={t}>{t}</span>)}
                </div>
                <div className="scroll-card-actions">
                  <a className="button small" href={project.github} target="_blank" rel="noreferrer">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    Code
                  </a>
                  {project.preview && (
                    <a className="button small primary" href={project.preview} target="_blank" rel="noreferrer">Live Demo</a>
                  )}
                  <button className="button small ghost" type="button" onClick={() => setModal(project)}>Details →</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {modal && (
        <div className="modal-overlay" onClick={() => setModal(null)} role="dialog" aria-modal="true">
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" type="button" onClick={() => setModal(null)} aria-label="Close">✕</button>
            <div className="modal-image"><img src={modal.image} alt={modal.title} /></div>
            <div className="modal-body">
              <div className="modal-header">
                <h3>{modal.title}</h3>
                <span className="badge">{modal.date}</span>
              </div>
              <p className="modal-desc">{modal.fullDesc}</p>
              <h4>Key Features</h4>
              <ul className="modal-features">{modal.features.map((f, i) => <li key={i}>{f}</li>)}</ul>
              <h4>Challenges & Solutions</h4>
              <p className="modal-challenges">{modal.challenges}</p>
              <div className="modal-tags">{modal.tags.map(t => <span className="tag" key={t}>{t}</span>)}</div>
              <div className="modal-actions">
                <a className="button primary" href={modal.github} target="_blank" rel="noreferrer">View on GitHub →</a>
                {modal.preview && <a className="button" href={modal.preview} target="_blank" rel="noreferrer">Live Preview</a>}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
