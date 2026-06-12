import React from 'react';

function About() {
  return (
    <section id="about" aria-label="About me section">
      <div className="section-tag">Who I Am</div>
      <h2 className="section-title">About Me</h2>
      <div className="section-divider" aria-hidden="true"></div>

      <div className="about-grid">
        <div className="about-photo-wrap">
          <div className="about-photo-frame" role="img" aria-label="Profile photo placeholder for G.D.Sahan Hasmitha">
       <img 
  src={require('../sahan.jpeg')} 
  alt="G.D.Sahan Hasmitha" 
  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
/>
          </div>
          <div className="about-photo-badge" aria-label="Currently available for internship">
            <span className="badge-dot" aria-hidden="true"></span>
            Available for Internship
          </div>
        </div>

        <div className="about-content">
          <p>
            Hi there! I am <strong>G.D.Sahan Hasmitha</strong>, an Information Technology student
            at the Institute of Technology, University of Moratuwa (Index: 23IT0463).
          </p>
          <p>
            I am passionate about building responsive, accessible, and user-centered web applications.
            My core tech stack includes <strong>React.js, Node.js, Express.js, and MongoDB</strong>,
            and I enjoy working across the full stack to deliver meaningful digital experiences.
          </p>
          <p>
            Currently in my third semester, I am focused on deepening my IT knowledge and
            understanding how thoughtful design can make technology more inclusive and effective.
            My goal is to secure a software development internship where I can contribute and grow.
          </p>

          <div className="about-cards">
            <div className="about-card">
              <div className="about-card-label">Diploma</div>
              <div className="about-card-value">NDT in Information Technology</div>
            </div>
          </div>

          <div className="about-links">
            <a
              href="mailto:sahan14hasmitha@gmail.com"
              className="btn btn-primary"
              aria-label="Send email to Sahan"
            >
              Let's Talk
            </a>
            <a
              href="https://github.com/SahanHasmitha"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              aria-label="Visit GitHub profile"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sahan-hasmitha-b3b074360/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              aria-label="Visit LinkedIn profile"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
