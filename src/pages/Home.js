import React from 'react';

function Home() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="home" aria-label="Home section">
      <div className="home-bg" aria-hidden="true"></div>
      <div className="home-grid">
        <div className="home-greeting fade-in">Hi, I'm</div>
        <h1 className="home-name fade-in">
          G.D.Sahan<br />
          <span className="accent">Hasmitha.</span>
        </h1>
        <p className="home-role fade-in">
          IT Student &amp; <strong>Aspiring Full-Stack Developer</strong>
        </p>
        <p className="home-desc fade-in">
          A passionate Information Technology student at the Institute of Technology,
          University of Moratuwa. I love building clean, user-friendly web applications
          using React, Node.js, and MongoDB.
        </p>
        <div className="home-cta fade-in">
          <button
            className="btn btn-primary"
            onClick={() => scrollTo('projects')}
            aria-label="View my projects"
          >
            View Projects →
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => scrollTo('contact')}
            aria-label="Contact me"
          >
            Get in Touch
          </button>
        </div>
        <div className="home-scroll fade-in" aria-hidden="true">
          <div className="scroll-line"></div>
          scroll down
        </div>
      </div>
    </section>
  );
}

export default Home;
