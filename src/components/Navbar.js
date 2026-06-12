import React from 'react';

function Navbar({ scrolled }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <a href="#home" className="nav-logo" onClick={(e) => { e.preventDefault(); scrollTo('home'); }}>
        GDH<span>.</span>
      </a>
      <ul className="nav-links">
        {['home', 'about', 'skills', 'projects', 'contact'].map((link) => (
          <li key={link}>
            <a
              href={`#${link}`}
              onClick={(e) => { e.preventDefault(); scrollTo(link); }}
              aria-label={`Navigate to ${link} section`}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
