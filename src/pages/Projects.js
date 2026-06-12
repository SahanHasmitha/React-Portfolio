import React from 'react';

const projects = [
  {
    num: '01',
    title: 'Library Management System',
    desc: 'A full-stack web application to manage library books, members, and borrowing records. Features include book search, issue/return tracking, member registration, and an admin dashboard with real-time availability status.',
    tech: ['React.js', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/',
    live: '#',
    bg: 'linear-gradient(135deg, rgba(124,58,237,0.3), rgba(0,212,255,0.15))',
    icon: '📚',
  },
  {
    num: '02',
    title: 'User Management Module',
    desc: 'A secure user management system with role-based access control. Includes user registration, login with JWT authentication, profile management, admin controls to add/edit/delete users, and activity logging.',
    tech: ['React.js', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/',
    live: '#',
    bg: 'linear-gradient(135deg, rgba(0,212,255,0.25), rgba(6,214,160,0.15))',
    icon: '👥',
  },
  {
    num: '03',
    title: 'Event Management System',
    desc: 'A responsive event management platform that allows users to create, browse, and register for events. Features include event scheduling, seat booking, category filtering, and an organizer dashboard to track registrations.',
    tech: ['React.js', 'Node.js', 'Express', 'MySQL'],
    github: 'https://github.com/',
    live: '#',
    bg: 'linear-gradient(135deg, rgba(6,214,160,0.25), rgba(124,58,237,0.15))',
    icon: '🗓️',
  },
];

function Projects() {
  return (
    <section id="projects" aria-label="Projects section">
      <div className="section-tag">What I've Built</div>
      <h2 className="section-title">Projects</h2>
      <div className="section-divider" aria-hidden="true"></div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.num} aria-label={`Project: ${project.title}`}>
            <div
              className="project-thumb"
              style={{ background: project.bg }}
              aria-hidden="true"
            >
              <span role="img" aria-hidden="true" style={{ fontSize: '3rem' }}>{project.icon}</span>
            </div>
            <div className="project-body">
              <div className="project-num">{project.num}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              <div className="project-tech" aria-label="Technologies used">
                {project.tech.map((t) => (
                  <span className="tech-pill" key={t}>{t}</span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  aria-label={`View ${project.title} source code on GitHub`}
                >
                  ↗ GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  aria-label={`View ${project.title} live demo`}
                >
                  ↗ Live Demo
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;