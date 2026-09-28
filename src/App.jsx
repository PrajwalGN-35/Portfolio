import { useState } from 'react';
import {
  ArrowUpRight,
  Github,
  Mail,
  Brain,
  Database,
  Code2,
  BarChart3,
} from 'lucide-react';

const projects = [
  {
    number: '01',
    title: 'Enterprise Data Reconciliation Engine',
    type: 'Data Science / Python',
    description:
      'A data reconciliation system focused on schema normalization, semantic and fuzzy matching, discrepancy detection, and automated validation.',
    tags: ['Python', 'Pandas', 'FastAPI', 'RapidFuzz', 'Pytest'],
    color: 'coral',
  },
  {
    number: '02',
    title: 'Deloitte Technology Simulation',
    type: 'Data Processing / Analytics',
    description:
      'Worked with telemetry data by transforming JSON data formats and developing a proposal for a machine-health monitoring dashboard.',
    tags: ['Python', 'JSON', 'Data Processing', 'Analytics'],
    color: 'lime',
  },
  {
    number: '03',
    title: 'NovaStudio',
    type: 'Web Development',
    description:
      'A responsive digital experience designed around strategy, design, technology, and a modern user experience.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    color: 'blue',
  },
  {
    number: '04',
    title: '2D Graphics Editor',
    type: 'C / Interactive Programming',
    description:
      'A menu-driven graphics editor using a character-based canvas for creating and manipulating graphical elements.',
    tags: ['C', 'Pointers', 'Arrays', 'Graphics'],
    color: 'yellow',
  },
];

const skills = [
  {
    icon: Brain,
    title: 'Artificial Intelligence',
    items: [
      'AI',
      'Generative AI',
      'AI Agents',
      'Prompt Engineering',
      'Microsoft Foundry',
    ],
  },
  {
    icon: BarChart3,
    title: 'Data Science',
    items: [
      'Data Analysis',
      'Python',
      'Pandas',
      'Data Visualization',
      'SQL',
    ],
  },
  {
    icon: Code2,
    title: 'Programming',
    items: [
      'Python',
      'C / C++',
      'JavaScript',
      'Object-Oriented Programming',
      'Git',
    ],
  },
  {
    icon: Database,
    title: 'Cloud & APIs',
    items: [
      'Microsoft Azure',
      'Azure Functions',
      'API Development',
      'API Integration',
      'GitHub',
    ],
  },
];

const certifications = [
  {
    title: 'Microsoft Applied Skills',
    subtitle: 'Develop an agent with integrated tools',
    issuer: 'Microsoft',
  },
  {
    title: 'GenAI Job Simulation',
    subtitle: 'AI-powered financial chatbot & data analysis',
    issuer: 'BCG / Forage',
  },
  {
    title: 'Technology Job Simulation',
    subtitle: 'Data processing & telemetry analysis',
    issuer: 'Deloitte Australia / Forage',
  },
  {
    title: 'Data Analysis Using Python',
    subtitle: 'Python-based data analysis',
    issuer: 'IBM',
  },
  {
    title: 'Data Visualization Using Python',
    subtitle: 'Python data visualization',
    issuer: 'IBM',
  },
  {
    title: 'GenAI Powered Data Analytics',
    subtitle: 'Generative AI and analytics',
    issuer: 'Tata / Forage',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site">

      {/* NAVIGATION */}
      <nav className="nav">
        <a href="#top" className="brand" onClick={closeMenu}>
          PGN<span>.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
        </button>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#certifications" onClick={closeMenu}>
            Certifications
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </div>

        <a
          href="https://www.linkedin.com/in/prajwal-g-n-2b85b8359/"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-linkedin"
        >
          LinkedIn <ArrowUpRight size={15} />
        </a>
      </nav>

      {/* HERO */}
      <main id="top">

        <section className="hero">
          <div className="hero-content">

            <p className="eyebrow">
              Data Science / Artificial Intelligence
            </p>

            <h1>
              Turning data into
              <br />
              <em>intelligent ideas.</em>
            </h1>

            <p className="hero-description">
              I'm Prajwal G N, a B.Tech Artificial Intelligence &
              Data Science student at REVA University. I build projects
              around Data Science, Artificial Intelligence, Machine
              Learning, and data-driven problem solving.
            </p>

            <div className="hero-actions">

              <a
                href="#projects"
                className="button button-primary"
              >
                Explore my work
                <ArrowUpRight size={18} />
              </a>

              <a
                href="https://github.com/PrajwalGN-35"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-secondary"
              >
                <Github size={18} />
                GitHub
              </a>

            </div>
          </div>

          <div className="hero-art">
            <div className="art-circle"></div>
            <div className="art-square"></div>
            <div className="art-line art-line-one"></div>
            <div className="art-line art-line-two"></div>

            <div className="art-text">
              DATA
              <br />
              ×
              <br />
              INTELLIGENCE
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section projects-section">

          <div className="section-heading">
            <p className="eyebrow">Selected Work</p>

            <h2>
              Projects that turn
              <br />
              <em>ideas into systems.</em>
            </h2>
          </div>

          <div className="projects-list">

            {projects.map((project) => (
              <article className="project-card" key={project.number}>

                <div className="project-number">
                  {project.number}
                </div>

                <div className="project-info">

                  <p className="project-type">
                    {project.type}
                  </p>

                  <h3>{project.title}</h3>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                </div>

                <div
                  className={`project-preview ${project.color}`}
                  aria-hidden="true"
                >
                  <span></span>
                </div>

              </article>
            ))}

          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section skills-section">

          <div className="section-heading">
            <p className="eyebrow">Technical Skills</p>

            <h2>
              Tools I use to
              <br />
              <em>build & analyze.</em>
            </h2>
          </div>

          <div className="skills-grid">

            {skills.map((skill) => {

              const Icon = skill.icon;

              return (
                <article className="skill-card" key={skill.title}>

                  <div className="skill-icon">
                    <Icon size={25} strokeWidth={1.8} />
                  </div>

                  <h3>{skill.title}</h3>

                  <div className="skill-items">
                    {skill.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>

                </article>
              );
            })}

          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section about-section">

          <div className="about-label">
            <p className="eyebrow">About Me</p>
          </div>

          <div className="about-content">

            <h2>
              Curious by nature.
              <br />
              <em>Technical by choice.</em>
            </h2>

            <p>
              I'm currently pursuing my B.Tech in Artificial Intelligence
              & Data Science at REVA University, Bengaluru, with a current
              CGPA of 8.3/10.
            </p>

            <p>
              My interests are centered around Data Science and Artificial
              Intelligence. I enjoy working with Python, data analysis,
              machine learning concepts, AI tools, APIs, and programming
              to solve practical problems.
            </p>

            <p>
              I'm continuously learning, building projects, and looking
              for opportunities where I can apply my technical skills to
              meaningful real-world problems.
            </p>

            <div className="about-links">

              <a
                href="https://github.com/PrajwalGN-35"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
                <ArrowUpRight size={16} />
              </a>

              <a
                href="https://www.linkedin.com/in/prajwal-g-n-2b85b8359/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
                <ArrowUpRight size={16} />
              </a>

            </div>

          </div>
        </section>

        {/* EDUCATION */}
        <section className="section education-section">

          <div className="section-heading">
            <p className="eyebrow">Education</p>

            <h2>
              Building the
              <br />
              <em>foundation.</em>
            </h2>
          </div>

          <div className="education-card">

            <div className="education-year">
              2025 — 2029
            </div>

            <div className="education-info">

              <p className="education-type">
                Bachelor's Degree
              </p>

              <h3>
                B.Tech — Artificial Intelligence & Data Science
              </h3>

              <p>
                REVA University · Bengaluru, India
              </p>

            </div>

            <div className="education-score">
              <span>CGPA</span>
              <strong>8.3</strong>
              <small>/ 10</small>
            </div>

          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section
          id="certifications"
          className="section certifications-section"
        >

          <div className="section-heading">
            <p className="eyebrow">Certifications & Learning</p>

            <h2>
              Learning beyond
              <br />
              <em>the classroom.</em>
            </h2>
          </div>

          <div className="certifications-grid">

            {certifications.map((cert, index) => (

              <article
                className="certification-card"
                key={`${cert.title}-${index}`}
              >

                <div className="certification-number">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="certification-content">

                  <p>{cert.issuer}</p>

                  <h3>{cert.title}</h3>

                  <span>{cert.subtitle}</span>

                </div>

                <ArrowUpRight
                  size={20}
                  className="certification-arrow"
                />

              </article>

            ))}

          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact-section">

          <div className="contact-inner">

            <p className="eyebrow">Let's Connect</p>

            <h2>
              Have an opportunity?
              <br />
              <em>Let's talk.</em>
            </h2>

            <p className="contact-description">
              I'm actively looking for internship opportunities in
              Data Science, Artificial Intelligence, Machine Learning,
              and related fields.
            </p>

            <div className="contact-links">

              <a
                href="mailto:prajwalgnprajwal7@gmail.com"
                className="contact-item"
              >
                <Mail size={20} />
                <span>prajwalgnprajwal7@gmail.com</span>
                <ArrowUpRight size={17} />
              </a>

              <a
                href="https://github.com/PrajwalGN-35"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <Github size={20} />
                <span>github.com/PrajwalGN-35</span>
                <ArrowUpRight size={17} />
              </a>

              <a
                href="https://www.linkedin.com/in/prajwal-g-n-2b85b8359/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <span className="linkedin-text-icon">in</span>
                <span>
                  linkedin.com/in/prajwal-g-n-2b85b8359
                </span>
                <ArrowUpRight size={17} />
              </a>

            </div>

            <div className="contact-location">
              Bengaluru · India
            </div>

          </div>

          <footer className="footer">
            <span>© 2026 PGN</span>
            <span>Data Science · AI · Machine Learning</span>
          </footer>

        </section>

      </main>
    </div>
  );
}

export default App;
