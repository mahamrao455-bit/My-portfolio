
import React from "react";
import "./App.css";

function App() {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "Python",
    "SQL",
    "Git & GitHub",
    "REST APIs",
    "Bootstrap",
    "Tailwind CSS",
    "Angular",
    "vue.js",
  ];

  const projects = [
    {
      number: "01",
      title: "NovaTech",
      description:
        "A modern business website designed with a clean interface, responsive layouts and professional sections.",
      tech: "HTML • CSS • JavaScript",
    },
    {
      number: "02",
      title: "TaskFlow",
      description:
        "A productivity-focused task management interface designed to make organizing daily work simple and intuitive.",
      tech: "HTML • CSS • JavaScript",
    },
    {
      number: "03",
      title: "VEXORIUM",
      description:
        "A futuristic enterprise dashboard concept with a clean data-driven interface and modern navigation.",
      tech: "React • JavaScript • CSS",
    },
    {
      number: "04",
      title: "Portfolio Website",
      description:
        "A personal developer portfolio showcasing projects, technical skills, experience and career goals.",
      tech: "React • Webpack • CSS",
    },
  ];

  const certificates = [
    {
      number: "01",
      semester: "2ND SEMESTER",
      title: "Academic Distinction",
      image: "/certificate-semester-2.png",
    },
    {
      number: "02",
      semester: "1ST SEMESTER",
      title: "Academic Distinction",
      image: "/certificate-semester-1.png",
    },
  ];

  return (
    <div className="portfolio">

      {/* ================= INTRO ================= */}

      <section className="intro">
        <div className="intro-content">
          <span className="intro-small">
            WHERE CREATIVITY MEETS CODE
          </span>

          <h1>MAHAM DEV</h1>

          <p>Full Stack Developer</p>

          <a href="#home" className="enter-btn">
            EXPLORE
          </a>
        </div>
      </section>


      {/* ================= NAVBAR ================= */}

      <header className="navbar">
        <a href="#home" className="logo">
          MAHAM<span>.</span>
        </a>

        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#achievements">Achievements</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>


      {/* ================= MAIN ================= */}

      <main id="home">

        {/* ================= HERO ================= */}

        <section className="hero section">

          <div className="hero-left">

            <p className="eyebrow">
              MEET THE DEVELOPER
            </p>

            <h2>
              Maham
              <br />
              <span>Rao.</span>
            </h2>

            <p className="hero-description">
              A passionate Full Stack Developer building modern,
              responsive and user-focused digital experiences.
            </p>

            <div className="hero-buttons">

              <a href="#projects" className="primary-btn">
                View My Work
              </a>

              <a href="#contact" className="secondary-btn">
                Let's Connect
              </a>

            </div>

          </div>


          <div className="hero-right">

            <div className="hero-card">

              <span>01</span>

              <div className="card-line"></div>

              <p>
                Turning ideas
                <br />
                into digital
                <br />
                experiences.
              </p>

            </div>

          </div>

        </section>


        {/* ================= ABOUT ================= */}

        <section id="about" className="section about">

          <div className="section-heading">

            <span>
              01 — ABOUT
            </span>

            <h2>
            The Person Behind the Code
            </h2>

          </div>


          <div className="about-layout">

            {/* TOP ROW */}

            <div className="about-top">

              <div className="about-image about-image-main">

                <img
                  src="/Maham.jpeg"
                  alt="Maham Rao"
                />

              </div>


              <div className="about-intro">

                <p className="large-text">
                  I'm <strong>Maham Rao</strong>, a Computer Science
                  student and aspiring Full Stack Developer who enjoys
                  turning ideas into beautiful and functional websites.
                </p>

              </div>

            </div>


            {/* BOTTOM ROW */}

            <div className="about-bottom">

              <div className="about-text">

                <p>
                  I work with modern web technologies and continuously
                  improve my skills through hands-on projects and
                  practical development.
                </p>

                <p>
                  My goal is to create digital products that are not
                  only visually appealing but also responsive,
                  accessible and easy to use.
                </p>

                <p>
                  I'm currently expanding my knowledge across frontend,
                  backend, databases and modern development workflows.
                </p>

              </div>


              <div className="about-image about-image-laptop">

                <img
                  src="/laptop.jpeg"
                  alt="Laptop and development workspace"
                />

              </div>

            </div>

          </div>

        </section>


        {/* ================= SKILLS ================= */}

        <section id="skills" className="section skills">

          <div className="section-heading">

            <span>
              02 — SKILLS
            </span>

            <h2>
            My Stack
            </h2>

          </div>


          <div className="skills-intro">

            <p>
              Technologies and tools I'm learning and using to build
              complete web experiences.
            </p>

          </div>


          <div className="skills-grid">

            {skills.map((skill, index) => (

              <div
                className="skill-card"
                key={skill}
              >

                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>
                  {skill}
                </h3>

              </div>

            ))}

          </div>

        </section>


        {/* ================= SERVICES ================= */}

        <section className="section services">

          <div className="section-heading">

            <span>
              03 — WHAT I DO
            </span>

            <h2>
              Building With Purpose
            </h2>

          </div>


          <div className="services-grid">

            <article>

              <span>01</span>

              <h3>
                Frontend Development
              </h3>

              <p>
                Responsive and interactive interfaces using modern
                HTML, CSS, JavaScript and React.
              </p>

            </article>


            <article>

              <span>02</span>

              <h3>
                Full Stack Development
              </h3>

              <p>
                Building complete web applications while connecting
                frontend, backend, APIs and databases.
              </p>

            </article>


            <article>

              <span>03</span>

              <h3>
                UI & UX
              </h3>

              <p>
                Creating clean layouts and intuitive experiences
                with strong attention to visual details.
              </p>

            </article>

          </div>

        </section>


        {/* ================= PROJECTS ================= */}

        <section id="projects" className="section projects">

          <div className="section-heading">

            <span>
              04 — SELECTED WORK
            </span>

            <h2>
              Things I've Built
            </h2>

          </div>


          <div className="projects-list">

            {projects.map((project) => (

              <article
                className="project"
                key={project.number}
              >

                <div className="project-number">
                  {project.number}
                </div>


                <div className="project-content">

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.description}
                  </p>

                  <span className="project-tech">
                    {project.tech}
                  </span>

                </div>


                <div className="project-arrow">
                  ↗
                </div>

              </article>

            ))}

          </div>

        </section>


        {/* ================= EXPERIENCE ================= */}

        <section
          id="experience"
          className="section experience"
        >

          <div className="section-heading">

            <span>
              05 — EXPERIENCE
            </span>

            <h2>
              My Journey
            </h2>

          </div>


          <div className="timeline">

            <div className="timeline-item">

              <span className="timeline-date">
                2026
              </span>

              <div>

                <h3>
                  Web Development Intern
                </h3>

                <p className="company">
                  Zidio Development
                </p>

                <p>
                  Working remotely as a Web Development Intern
                  and gaining practical experience in modern
                  development workflows, projects and professional
                  collaboration.
                </p>

              </div>

            </div>


            <div className="timeline-item">

              <span className="timeline-date">
                CURRENT
              </span>

              <div>

                <h3>
                  Full Stack Development
                </h3>

                <p className="company">
                  ACCP AI — Aptech
                </p>

                <p>
                  Developing skills across frontend, backend,
                  databases, cloud technologies and artificial
                  intelligence.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ================= EDUCATION ================= */}

        <section className="section education">

          <div className="section-heading">

            <span>
              06 — EDUCATION
            </span>

            <h2>
              Learning & Growing
            </h2>

          </div>


          <div className="education-card">

            <div>

              <span>
                01
              </span>

              <h3>
                ACCP AI
              </h3>

              <p>
                Aptech Institute
              </p>

            </div>


            <div>

              <p>
                Computer Science and Full Stack Development
                focused program covering programming, web
                development, databases, AI and modern technologies.
              </p>

            </div>

          </div>

        </section>


        {/* ================= ACHIEVEMENTS ================= */}

        <section
          id="achievements"
          className="section achievements"
        >

          <div className="section-heading">

            <span>
              07 — ACHIEVEMENTS
            </span>

            <h2>
              Academic Excellence
            </h2>

          </div>


          <div className="achievement-intro">

            <p>
              Recognized for outstanding academic performance
              with
              <strong> Distinction </strong>
              in both my 1st and 2nd semesters at Aptech.
            </p>

          </div>


          <div className="certificates-grid">

            {certificates.map((certificate) => (

              <a
                className="certificate-card"
                href={certificate.image}
                target="_blank"
                rel="noopener noreferrer"
                key={certificate.number}
              >

                <div className="certificate-image">

                  <img
                    src={certificate.image}
                    alt={`${certificate.semester} Distinction Certificate`}
                  />

                </div>


                <div className="certificate-info">

                  <span>
                    {certificate.number}
                  </span>

                  <div>

                    <p>
                      {certificate.semester}
                    </p>

                    <h3>
                      {certificate.title}
                    </h3>

                  </div>

                  <div className="certificate-arrow">
                    ↗
                  </div>

                </div>

              </a>

            ))}

          </div>

        </section>


        {/* ================= CONTACT ================= */}

        <section
          id="contact"
          className="section contact"
        >

          <div className="contact-content">

            <span>
              08 — CONTACT
            </span>

            <h2>
              Let's build
              <br />
              something <em>great.</em>
            </h2>

            <p>
              Have an idea, project or opportunity?
              I'd love to hear from you.
            </p>

            <a
              href="mailto:mahamrao455@gmail.com"
              className="contact-btn"
            >
              DROP ME A LINE ↗
            </a>

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <footer>

        <div>

          <strong>
            MAHAM DEV
          </strong>

          <p>
            Full Stack Developer
          </p>

        </div>


        <div className="footer-links">

          <a
            href="https://github.com/mahamrao455-bit"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

        </div>


        <p>
          © 2026 Maham Rao
        </p>

      </footer>

    </div>
  );
}

export default App;

