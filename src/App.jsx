import { useState } from 'react';

const projects = [
  {
    number: '01',
    title: '2D Graphics Editor',
    type: 'C / Interactive programming',
    description: 'A menu-driven 2D Graphics Editor with a character-based canvas for creating and manipulating graphical elements.',
    tags: ['C', 'Pointers', 'Arrays'],
    color: 'coral',
  },
  {
    number: '02',
    title: 'Nova Studio',
    type: 'Web experience / HTML, CSS, JS',
    description: 'A premium, responsive digital experience helping businesses grow through strategy, design, and technology.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    color: 'lime',
  },
];

function Arrow() {
  return <span className="arrow" aria-hidden="true">&#8599;</span>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(0);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="site-shell">
      <header className="topbar">
        <button className="wordmark" onClick={() => scrollTo('top')} aria-label="Back to top">PGN<span>.</span></button>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen}>
          <span>{menuOpen ? 'Close' : 'Menu'}</span><i className={menuOpen ? 'is-open' : ''}></i>
        </button>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Primary navigation">
          <button onClick={() => scrollTo('work')}>Work</button>
          <button onClick={() => scrollTo('about')}>About</button>
          <button onClick={() => scrollTo('contact')}>Contact</button>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy reveal">
            <p className="eyebrow">Aspiring data scientist / B.Tech AI &amp; Data Science</p>
            <h1>Learning to turn<br /><em>data into direction.</em></h1>
            <p className="hero-intro">I&apos;m Prajwal, a third-semester student at REVA University building strong foundations in Python, C/C++, problem-solving, and the technologies shaping intelligent systems.</p>
            <button className="text-link" onClick={() => scrollTo('work')}>See selected projects <Arrow /></button>
          </div>
          <div className="hero-art" aria-label="Abstract composition">
            <div className="art-sun"></div><div className="art-ring"></div><div className="art-line line-one"></div><div className="art-line line-two"></div>
            <span className="art-label">curious<br />by default</span>
          </div>
          <div className="scroll-cue"><span>Scroll to explore</span><b></b></div>
        </section>

        <section className="work section-pad" id="work">
          <div className="section-heading"><p className="eyebrow">Selected projects / 01—02</p><h2>Learning by<br /><em>building.</em></h2></div>
          <div className="project-list">
            {projects.map((project, index) => (
              <button className={`project-row ${activeProject === index ? 'active' : ''}`} key={project.title} onClick={() => setActiveProject(index)}>
                <span className="project-number">{project.number}</span>
                <span className={`project-preview ${project.color}`}><span>{project.title.slice(0, 1)}</span></span>
                <span className="project-info"><strong>{project.title}</strong><small>{project.type}</small></span>
                <span className="project-description">{project.description}</span>
                <Arrow />
              </button>
            ))}
          </div>
        </section>

        <section className="about section-pad" id="about">
          <div className="section-heading"><p className="eyebrow">A little about me</p><h2>Curious by nature,<br /><em>technical by choice.</em></h2></div>
          <div className="about-body"><p>I am a B.Tech student specializing in Artificial Intelligence and Data Science at REVA University, Bangalore. I enjoy learning new technologies and applying them through practical projects.</p><p>My current toolkit includes C/C++, Python fundamentals, object-oriented programming, data structures and algorithms, HTML, CSS, JavaScript, and SQL.</p><div className="availability"><span></span><div><strong>Currently learning</strong><small>Data science, AI, and better ways to solve problems</small></div></div></div>
        </section>

        <section className="contact section-pad" id="contact">
          <p className="eyebrow">Let&apos;s connect</p><h2>Always open to<br /><em>new questions.</em></h2>
          <a className="contact-link" href="mailto:prajwalgnprajwal7@gmail.com">prajwalgnprajwal7@gmail.com <Arrow /></a>
          <div className="contact-footer"><span>Bangalore / India</span><a href="https://github.com/PrajwalGN-35">GitHub</a><a href="https://www.linkedin.com/in/prajwal-g-n-2b85b8359/">LinkedIn</a><span>© 2026 PGN</span></div>
        </section>
      </main>
    </div>
  );
}

export default App;
