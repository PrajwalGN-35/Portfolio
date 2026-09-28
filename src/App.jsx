import {
  ArrowUpRight,
  Mail,
  Brain,
  Database,
  Code2,
  BarChart3,
} from "lucide-react";

const LINKEDIN_URL =
  "https://www.linkedin.com/in/prajwal-g-n-2b85b8359/";

const GITHUB_URL = "https://github.com/PrajwalGN-35";

const projects = [
  {
    number: "01",
    title: "Enterprise Data Reconciliation Engine",
    description:
      "A data-focused project exploring structured data processing, validation, reconciliation, and reliable analytical workflows.",
    tags: ["Python", "Data Processing", "Analytics"],
  },
  {
    number: "02",
    title: "Deloitte Technology Simulation",
    description:
      "Completed a Deloitte technology job simulation involving telemetry data transformation and a machine-health monitoring dashboard proposal.",
    tags: ["Python", "JSON", "Telemetry", "Data Analysis"],
  },
  {
    number: "03",
    title: "NovaStudio",
    description:
      "A web development project focused on creating a modern and responsive digital experience.",
    tags: ["HTML", "CSS", "JavaScript", "Web Development"],
  },
  {
    number: "04",
    title: "2D Graphics Editor",
    description:
      "A C/C++ based graphics project exploring object-oriented programming and 2D graphical operations.",
    tags: ["C/C++", "OOP", "Graphics"],
  },
];

const skills = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
    items: [
      "Artificial Intelligence",
      "Generative AI",
      "AI Agents",
      "Prompt Engineering",
      "Microsoft Foundry",
    ],
  },
  {
    icon: Database,
    title: "Data Science",
    items: [
      "Data Analysis",
      "Python",
      "Pandas",
      "Data Visualization",
      "SQL",
    ],
  },
  {
    icon: Code2,
    title: "Programming",
    items: [
      "Python",
      "C/C++",
      "JavaScript",
      "Object-Oriented Programming",
      "Git",
    ],
  },
  {
    icon: BarChart3,
    title: "Tools & Technologies",
    items: [
      "GitHub",
      "APIs",
      "Web Development",
      "Data Processing",
      "Machine Learning",
    ],
  },
];

const certifications = [
  {
    title: "Microsoft Applied Skills",
    description: "Develop an agent with integrated tools",
  },
  {
    title: "GenAI Job Simulation",
    description: "AI-powered financial chatbot and data analysis",
  },
  {
    title: "Technology Job Simulation",
    description: "Data processing and telemetry analysis",
  },
  {
    title: "Data Analysis Using Python",
    description: "IBM",
  },
  {
    title: "Data Visualization Using Python",
    description: "IBM",
  },
  {
    title: "GenAI Powered Data Analytics",
    description: "Tata / Forage",
  },
];

function App() {
  return (
    <div className="site-shell">
      <nav className="nav">
        <div className="nav-inner">
          <a href="#home" className="logo">
            PGN<span>.</span>
          </a>

          <div className="nav-links">
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-inner">
            <div className="hero-label">
              <span className="status-dot"></span>
              DATA SCIENCE & AI
            </div>

            <h1>
              Building with
              <br />
              <em>data.</em> Thinking
              <br />
              with <em>AI.</em>
            </h1>

            <div className="hero-bottom">
              <p className="hero-description">
                I'm Prajwal G N, an aspiring Data Scientist and AI enthusiast
                exploring intelligent systems, data-driven solutions, and
                practical machine learning applications.
              </p>

              <div className="hero-actions">
                <a href="#projects" className="button button-primary">
                  Explore Projects
                  <ArrowUpRight size={18} />
                </a>

                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-secondary"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="projects-section" id="projects">
          <div className="section-header">
            <div>
              <span className="section-number">01</span>
              <h2>Selected Projects</h2>
            </div>

            <p>
              Projects and practical work across data, AI, programming, and
              web development.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-number">{project.number}</div>

                <div className="project-content">
                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="skills-section" id="skills">
          <div className="section-header">
            <div>
              <span className="section-number">02</span>
              <h2>Skills</h2>
            </div>

            <p>
              Technologies and areas I'm actively developing through
              coursework, simulations, and projects.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <article className="skill-card" key={skill.title}>
                  <div className="skill-icon">
                    <Icon size={25} />
                  </div>

                  <h3>{skill.title}</h3>

                  <ul>
                    {skill.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="section-header">
            <div>
              <span className="section-number">03</span>
              <h2>About Me</h2>
            </div>
          </div>

          <div className="about-grid">
            <div className="about-main">
              <p className="large-text">
                I am a B.Tech Artificial Intelligence & Data Science student
                interested in building practical solutions using data,
                artificial intelligence, and machine learning.
              </p>

              <p>
                I enjoy working with Python, data analysis, programming, APIs,
                and modern AI tools. My goal is to continue developing
                real-world technical skills through internships, projects, and
                collaborative work.
              </p>
            </div>

            <div className="about-details">
              <div>
                <span>Focus</span>
                <strong>Data Science & AI</strong>
              </div>

              <div>
                <span>University</span>
                <strong>REVA University</strong>
              </div>

              <div>
                <span>Location</span>
                <strong>Bengaluru, India</strong>
              </div>

              <div>
                <span>CGPA</span>
                <strong>8.3 / 10</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="education-section" id="education">
          <div className="section-header">
            <div>
              <span className="section-number">04</span>
              <h2>Education</h2>
            </div>
          </div>

          <div className="education-card">
            <div className="education-year">2025 — 2029</div>

            <div>
              <h3>B.Tech — Artificial Intelligence & Data Science</h3>
              <p>REVA University · Bengaluru</p>
            </div>

            <div className="education-score">
              <span>Current CGPA</span>
              <strong>8.3 / 10</strong>
            </div>
          </div>
        </section>

        <section className="certifications-section">
          <div className="section-header">
            <div>
              <span className="section-number">05</span>
              <h2>Certifications & Simulations</h2>
            </div>
          </div>

          <div className="certifications-grid">
            {certifications.map((certification, index) => (
              <article className="certification-card" key={index}>
                <div className="certification-index">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div>
                  <h3>{certification.title}</h3>
                  <p>{certification.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-inner">
            <span className="section-number">06</span>

            <h2>
              Let's build
              <br />
              something <em>useful.</em>
            </h2>

            <p>
              I'm currently looking for internship opportunities in Data
              Science, Artificial Intelligence, and related fields.
            </p>

            <div className="contact-actions">
              <a
                href="mailto:prajwalgnprajwal7@gmail.com"
                className="button button-primary"
              >
                <Mail size={18} />
                Email Me
              </a>

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-secondary"
              >
                LinkedIn
              </a>

              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-secondary"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© 2026 PGN</span>

        <span>Data Science · AI · Machine Learning</span>

        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
