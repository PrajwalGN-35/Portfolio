import { useState } from 'react';
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Download,
  Brain,
  Database,
  Code2,
  BarChart3,
  ChevronDown,
  ExternalLink,
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
    items: ['AI', 'Generative AI', 'AI Agents', 'Prompt Engineering', 'Microsoft Foundry'],
  },
  {
    icon: BarChart3,
    title: 'Data Science',
    items: ['Data Analysis', 'Python', 'Pandas', 'Data Visualization', 'SQL'],
  },
  {
    icon: Code2,
    title: 'Programming',
    items: ['Python', 'C / C++', 'JavaScript', 'Object-Oriented Programming', 'Git'],
  },
  {
    icon: Database,
    title: 'Cloud & APIs',
    items: ['Microsoft Azure', 'Azure Functions', 'API Development', 'API Integration', 'GitHub'],
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

function Arrow() {
  return <ArrowUpRight className="arrow-icon" size={18} aria-hidden="true" />;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(0);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    });
    setMenuOpen(false);
  };

  return (
    <div className="site-shell">
      {/* Navigation */}
      <header className="topbar">
        <button
          className="wordmark"
          onClick={() => scrollTo('top')}
          aria-label="Back to top"
        >
          PGN<span>.</span>
        </button>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <span>{menuOpen ? 'Close' : 'Menu'}</span>
          <i className={menuOpen ? 'is-open' : ''}></i>
        </button>

        <nav
          className={menuOpen ? 'nav-links is-open' : 'nav-links'}
          aria-label="Primary navigation"
        >
          <button onClick={() => scrollTo('work')}>Projects</button>
          <button onClick={() => scrollTo('skills')}>Skills</button>
          <button onClick={() => scrollTo('about')}>About</button>
          <button onClick={() => scrollTo('certifications')}>
            Certifications
          </button>
          <button onClick={() => scrollTo('contact')}>Contact</button>
        </nav>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="hero section-pad">
          <div className="hero-copy reveal">
            <p className="eyebrow">
              Data Science / Artificial Intelligence
            </p>

            <h1>
              Turning data into
              <br />
              <em>intelligent ideas.</em>
            </h1>

            <p className="hero-intro">
              I&apos;m Prajwal G N, a B.Tech Artificial Intelligence &amp;
              Data Science student at REVA University. I&apos;m building
              practical skills in Data Science, AI, Machine Learning,
              Python, and data-driven problem solving.
            </p>

            <div className="hero-actions">
              <button
                className="text-link primary-link"
                onClick={() => scrollTo('work')}
              >
                Explore my work <Arrow />
              </button>

              <a
                className="text-link secondary-link"
                href="https://github.com/PrajwalGN-35"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <Arrow />
              </a>
            </div>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="art-sun"></div>
            <div className="art-ring"></div>
            <div className="art-line line-one"></div>
            <div className="art-line line-two"></div>

            <div className="art-data">
              <span>DATA</span>
              <strong>→</strong>
              <span>AI</span>
            </div>

            <span className="art-label">
              curious
              <br />
              by default
            </span>
          </div>

          <div className="scroll-cue">
            <span>Scroll to explore</span>
            <b></b>
          </div>
        </section>

        {/* Projects */}
        <section className="work section-pad" id="work">
          <div className="section-heading">
            <p className="eyebrow">Selected work / 01—04</p>

            <h2>
              Building to
              <br />
              <em>learn.</em>
            </h2>

            <p className="section-description">
              A collection of academic, simulation, and personal projects
              through which I&apos;m developing practical skills in Data
              Science and AI.
            </p>
          </div>

          <div className="project-list">
            {projects.map((project, index) => (
              <button
                className={`project-row ${
                  activeProject === index ? 'active' : ''
                }`}
                key={project.title}
                onClick={() => setActiveProject(index)}
              >
                <span className="project-number">{project.number}</span>

                <span
                  className={`project-preview ${project.color}`}
                  aria-hidden="true"
                >
                  <span>{project.title.slice(0, 1)}</span>
                </span>

                <span className="project-info">
                  <strong>{project.title}</strong>
                  <small>{project.type}</small>
                </span>

                <span className="project-description">
                  {project.description}
                  <span className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </span>
                </span>

                <Arrow />
              </button>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="skills section-pad" id="skills">
          <div className="section-heading">
            <p className="eyebrow">Technical toolkit</p>

            <h2>
              Skills for
              <br />
              <em>building.</em>
            </h2>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <article className="skill-card" key={skill.title}>
                  <div className="skill-icon">
                    <Icon size={22} />
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

        {/* About */}
        <section className="about section-pad" id="about">
          <div className="section-heading">
            <p className="eyebrow">A little about me</p>

            <h2>
              Curious by nature,
              <br />
              <em>technical by choice.</em>
            </h2>
          </div>

          <div className="about-body">
            <p>
              I am a B.Tech student specializing in Artificial Intelligence
              and Data Science at REVA University, Bengaluru, with a current
              CGPA of 8.3/10.
            </p>

            <p>
              My interests are centered around Data Science and Artificial
              Intelligence. I enjoy understanding data, experimenting with
              technology, and turning what I learn into practical projects.
            </p>

            <p>
              I&apos;m continuously strengthening my foundations in Python,
              data analysis, machine learning, AI, programming, APIs, and
              cloud technologies while looking for opportunities to apply
              these skills in real-world environments.
            </p>

            <div className="availability">
              <span></span>

              <div>
                <strong>Currently focused on</strong>

                <small>
                  Data Science · Artificial Intelligence · Machine Learning
                  · Practical Projects
                </small>
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="education section-pad">
          <div className="section-heading">
            <p className="eyebrow">Education</p>

            <h2>
              Learning the
              <br />
              <em>foundations.</em>
            </h2>
          </div>

          <div className="education-card">
            <div>
              <p className="education-year">2025 — 2029</p>

              <h3>
                B.Tech — Artificial Intelligence &amp; Data Science
              </h3>

              <p>REVA University · Bengaluru, India</p>
            </div>

            <div className="education-score">
              <span>Current CGPA</span>
              <strong>8.3</strong>
              <small>/ 10</small>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section
          className="certifications section-pad"
          id="certifications"
        >
          <div className="section-heading">
            <p className="eyebrow">Learning &amp; credentials</p>

            <h2>
              Learning beyond
              <br />
              <em>the classroom.</em>
            </h2>
          </div>

          <div className="certification-list">
            {certifications.map((cert, index) => (
              <article className="certification-row" key={cert.title}>
                <span className="cert-number">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className="cert-main">
                  <h3>{cert.title}</h3>
                  <p>{cert.subtitle}</p>
                </div>

                <span className="cert-issuer">{cert.issuer}</span>
              </article>
            ))}
          </div>
        </section>

        {/* Connect */}
        <section className="contact section-pad" id="contact">
          <p className="eyebrow">Let&apos;s connect</p>

          <h2>
            Let&apos;s build
            <br />
            <em>something useful.</em>
          </h2>

          <p className="contact-intro">
            I&apos;m interested in internship opportunities, Data Science
            projects, AI opportunities, and connecting with people working
            in these fields.
          </p>

          <div className="contact-links">
            <a
              className="contact-link"
              href="mailto:prajwalgnprajwal7@gmail.com"
            >
              <Mail size={20} />
              <span>prajwalgnprajwal7@gmail.com</span>
              <Arrow />
            </a>

            <a
              className="contact-link"
              href="https://github.com/PrajwalGN-35"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={20} />
              <span>GitHub / PrajwalGN-35</span>
              <Arrow />
            </a>

            <a
              className="contact-link"
              href="https://www.linkedin.com/in/prajwal-g-n-2b85b8359/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={20} />
              <span>LinkedIn / Prajwal G N</span>
              <Arrow />
            </a>
          </div>

          <div className="contact-footer">
            <span>Bengaluru / India</span>

            <div className="footer-socials">
              <a
                href="https://github.com/PrajwalGN-35"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/prajwal-g-n-2b85b8359/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="mailto:prajwalgnprajwal7@gmail.com"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>

            <span>© 2026 PGN</span>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
