import { useState } from 'react';
import './App.css';

const projects = [
  {
    title: 'Housing Market Trends Analysis',
    tech: 'Tableau, Excel',
    icon: '📊',
    repo: 'https://github.com/ankamreddyrenuka',
    purpose: 'Designed interactive dashboards analyzing housing price trends and key influencing features.',
    details: [
      'Extracted insights for better decision-making using data visualization and filtering techniques.',
      'Improved data interpretation skills using real estate datasets.'
    ]
  },
  {
    title: 'TravelVista',
    tech: 'Flutter',
    icon: '✈️',
    repo: 'https://github.com/ankamreddyrenuka',
    purpose: 'Developed a responsive multi-screen travel app UI using Flutter widgets and navigation routing.',
    details: [
      'Implemented structured layouts for destinations, favorites, and profile pages.',
      'Applied consistent theming and mobile UI design practices.'
    ]
  },
  {
    title: 'Medical Diagnosis Classification',
    tech: 'Python, EDA Techniques',
    icon: '🩺',
    repo: 'https://github.com/ankamreddyrenuka',
    purpose: 'Conducted exploratory data analysis on healthcare datasets to identify patterns.',
    details: [
      'Applied statistical methods and feature selection to improve classification insights.',
      'Visualized trends to support potential diagnosis improvements.'
    ]
  },
  {
    title: 'Sports Scheduler',
    tech: 'React, JavaScript, Firebase',
    icon: '🏀',
    repo: 'https://github.com/ankamreddyrenuka',
    purpose: 'Built a scheduling tool to manage team practices, events, and availability for athletes.',
    details: [
      'Enabled dynamic event creation, calendar management, and player availability tracking.',
      'Enhanced team coordination with real-time status and responsive design.'
    ]
  },
  {
    title: 'Portfolio Website',
    tech: 'React, CSS',
    icon: '🖥️',
    repo: 'https://github.com/ankamreddyrenuka',
    purpose: 'Created a professional portfolio to showcase projects, skills, and coding profiles with a polished dark UI.',
    details: [
      'Built an interactive single-page portfolio with project highlights and external profile links.',
      'Designed a dark theme with responsive layout and modern visual interactions.'
    ]
  },
  {
    title: 'Travel Guide',
    tech: 'Spring Boot, Java, HTML, CSS, JavaScript',
    icon: '🌍',
    repo: 'https://github.com/ankamreddyrenuka',
    purpose: 'Built a travel guide web portal with Spring Boot backend and responsive HTML/CSS/JS frontend.',
    details: [
      'Implemented backend APIs for travel packages, bookings, and user profiles.',
      'Built a responsive frontend experience with destinations, search, and booking features.'
    ]
  }
];

const githubProjects = [
  {
    name: 'housing-market-trends-analysis',
    tech: 'Tableau, Excel',
    purpose: 'Dashboard and analytics for real estate pricing and market drivers.',
    link: 'https://github.com/ankamreddyrenuka'
  },
  {
    name: 'travel-guide-mobile-app-ui',
    tech: 'Flutter',
    purpose: 'Responsive UI design for travel discovery and personal itinerary pages.',
    link: 'https://github.com/ankamreddyrenuka'
  },
  {
    name: 'medical-diagnosis-classification',
    tech: 'Python, EDA',
    purpose: 'Healthcare EDA and classification model exploration.',
    link: 'https://github.com/ankamreddyrenuka'
  },
  {
    name: 'sports-scheduler',
    tech: 'React, Firebase',
    purpose: 'Team event scheduling and availability tracking with an interactive calendar.',
    link: 'https://github.com/ankamreddyrenuka'
  },
  {
    name: 'portfolio-website',
    tech: 'React, CSS',
    purpose: 'Professional portfolio website with a modern dark theme and interactive project showcase.',
    link: 'https://github.com/ankamreddyrenuka'
  },
  {
    name: 'travelguide-web-portal',
    tech: 'Spring Boot, Java, HTML, CSS, JavaScript',
    purpose: 'Travel guide website backed by Spring Boot and a responsive HTML/CSS/JS frontend.',
    link: 'https://github.com/ankamreddyrenuka'
  }
];

const certifications = [
  'Data Science using Python — NPTEL',
  'Computer Science 101 — EdX',
  'Foundations of AI & ML — Eduskills',
  'Exploratory Data Analysis using Tableau — SmartInternz',
  'Specialization Course in Full Stack Web Application Development with Node.js — Codinza (Powered by StudyOwl) in association with Vishnu Institute of Technology'
];

const codingProfiles = [
  { title: 'LeetCode', link: 'https://share.google/i1I2QbAZ6iAHnta9M' },
  { title: 'GeeksforGeeks', link: 'https://share.google/Hb7DqtKPZz3kRx28j' },
  { title: 'Codeforces', link: 'https://share.google/D1tYzVtDE6xaOytUQ' },
  { title: 'CodeChef', link: 'https://share.google/Wb6yN25ufUvozvunG' },
  { title: 'HackerRank', link: 'https://share.google/Nur1ITar5sp5ASrxR' },
  { title: 'MentorPick', link: 'https://mentorpick.com/profile/23pa1a4505-renuka' }
];

function App() {
  const [activeProject, setActiveProject] = useState(null);

  const toggleProject = (title) => {
    setActiveProject((prev) => (prev === title ? null : title));
  };

  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  const handleContactSubmit = (event) => {
    event.preventDefault();
    const subject = `Portfolio message from ${contactName || contactEmail || 'visitor'}`;
    const body = `Name: ${contactName}%0D%0AEmail: ${contactEmail}%0D%0A%0D%0A${encodeURIComponent(contactMessage)}`;
    window.location.href = `mailto:renukaankamreddy7819@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  return (
    <div className="app-container">
      <header className="hero-section">
        <div className="hero-content">
          <p className="eyebrow">Portfolio</p>
          <h1>ANKAMREDDY RENUKA</h1>
          <p className="subtitle">
            AI & Data Science undergraduate building polished digital experiences and analytics solutions with modern frontend and data tooling.
          </p>
          <div className="contact-grid">
            <a href="https://linkedin.com/in/renuka-ankamreddy-01a8aa356" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/ankamreddyrenuka" target="_blank" rel="noreferrer">GitHub</a>
            <a href="mailto:renukaankamreddy7819@gmail.com">renukaankamreddy7819@gmail.com</a>
            <a href="tel:7981993755">7981993755</a>
          </div>
          <p className="location">Bhimavaram, Andhra Pradesh</p>
        </div>
        <div className="hero-stats">
          <div className="hero-card">
            <span className="hero-icon">💼</span>
            <strong>{projects.length}</strong>
            <span>Projects</span>
          </div>
          <div className="hero-card">
            <span className="hero-icon">🎓</span>
            <strong>{certifications.length}</strong>
            <span>Certifications</span>
          </div>
          <div className="hero-card">
            <span className="hero-icon">🧑‍💻</span>
            <strong>{codingProfiles.length}</strong>
            <span>Coding Profiles</span>
          </div>
        </div>
      </header>

      <section className="section intro">
        <h2>Profile</h2>
        <p>
          Highly motivated undergraduate specializing in Artificial Intelligence and Data Science. I enjoy building user-friendly applications, designing mobile interfaces, and extracting insights from data to support smarter decisions.
        </p>
      </section>

      <section className="section education">
        <h2>Education</h2>
        <div className="card split-card">
          <div>
            <h3>Vishnu Institute of Technology</h3>
            <p>2022 – 2026 | B.Tech in CSE (Artificial Intelligence & Data Science)</p>
            <p>Bhimavaram, India</p>
          </div>
          <ul>
            <li>CGPA: 9.06</li>
            <li>Relevant Coursework: Data Structures, Machine Learning, Database Systems, Python Programming, Statistics, Data Analytics</li>
          </ul>
        </div>
      </section>

      <section className="section projects">
        <h2>Projects</h2>
        <div className="project-grid">
          {projects.map((project) => {
            const isActive = activeProject === project.title;
            return (
              <div className={`card project-card ${isActive ? 'active' : ''}`} key={project.title}>
                <div className="project-header">
                  <div>
                    <div className="project-meta">
                      <span className="project-icon">{project.icon}</span>
                      <h3>{project.title}</h3>
                    </div>
                    <p className="project-tech">{project.tech}</p>
                  </div>
                  <button onClick={() => toggleProject(project.title)}>
                    {isActive ? 'Hide details' : 'View details'}
                  </button>
                </div>
                <p>{project.purpose}</p>
                <a className="repo-link" href={project.repo} target="_blank" rel="noreferrer">
                  View repo
                </a>
                {isActive && (
                  <ul>
                    {project.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className="section github-projects">
        <h2>GitHub Projects</h2>
        <div className="github-grid">
          {githubProjects.map((repo) => (
            <a key={repo.name} className="repo-card" href={repo.link} target="_blank" rel="noreferrer">
              <h3>{repo.name}</h3>
              <p className="repo-tech">{repo.tech}</p>
              <p>{repo.purpose}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="section skills">
        <h2>Skills</h2>
        <div className="skill-grid">
          <div className="skill-card">
            <h3>Languages</h3>
            <p>Python, Java, C</p>
          </div>
          <div className="skill-card">
            <h3>Data Science</h3>
            <p>Exploratory Data Analysis, Data Visualization, Feature Selection</p>
          </div>
          <div className="skill-card">
            <h3>Concepts</h3>
            <p>Data Structures and Algorithms, Machine Learning Basics, OOP Concepts</p>
          </div>
          <div className="skill-card">
            <h3>Tools</h3>
            <p>Flutter, Tableau, Git, GitHub, VS Code, Excel</p>
          </div>
        </div>
      </section>

      <section className="section certifications">
        <h2>Certifications</h2>
        <ul className="list-card">
          <li>Data Science using Python — NPTEL</li>
          <li>Computer Science 101 — EdX</li>
          <li>Foundations of AI & ML — Eduskills</li>
          <li>Exploratory Data Analysis using Tableau — SmartInternz</li>
          <li>Specialization Course in Full Stack Web Application Development with Node.js — Codinza (Powered by StudyOwl) in association with Vishnu Institute of Technology</li>
        </ul>
      </section>

      <section className="section activities">
        <h2>Involvement & Activities</h2>
        <ul className="list-card">
          <li>Hackathon participation with peers to design and implement solutions under strict deadlines.</li>
          <li>Continuously practicing coding and improving problem-solving skills through competitive coding platforms.</li>
          <li>Active learner on CodeChef, LeetCode, Talentely.</li>
          <li>Team collaboration in academic and internship projects.</li>
        </ul>
      </section>

      <section className="section coding-profiles">
        <h2>Coding Profiles</h2>
        <ul className="list-card">
          {codingProfiles.map((profile) => (
            <li key={profile.title}>
              <a href={profile.link} target="_blank" rel="noreferrer">{profile.title}</a>
            </li>
          ))}
        </ul>
      </section>

      <section className="section contact-section">
        <h2>Send a Message</h2>
        <form className="contact-form" onSubmit={handleContactSubmit}>
          <div className="form-row">
            <label>
              Name
              <input
                type="text"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                placeholder="Your name"
                required
              />
            </label>
            <label>
              Email
              <input
                type="email"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                placeholder="Your email"
                required
              />
            </label>
          </div>
          <label>
            Message
            <textarea
              value={contactMessage}
              onChange={(e) => setContactMessage(e.target.value)}
              placeholder="Write your message here"
              rows="5"
              required
            />
          </label>
          <button type="submit">Send Message</button>
          <p className="note">
            This will open your email client with a message prepared to <strong>renukaankamreddy7819@gmail.com</strong>.
          </p>
        </form>
      </section>
    </div>
  );
}

export default App;
