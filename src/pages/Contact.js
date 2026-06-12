import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Valid email required';
    if (!form.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
    setErrors({});
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  return (
    <section id="contact" aria-label="Contact section">
      <div className="section-tag">Say Hello</div>
      <h2 className="section-title">Contact Me</h2>
      <div className="section-divider" aria-hidden="true"></div>

      <div className="contact-grid">
        <div className="contact-info">
          <p>
            I'm open to internship opportunities, collaborations, and project discussions.
            Feel free to reach out — I'll get back to you as soon as possible!
          </p>
          <div className="contact-items">
            <div className="contact-item">
              <div className="contact-icon" aria-hidden="true">✉️</div>
              <div>
                <div className="contact-item-label">Email</div>
                <div className="contact-item-value">
                  <a href="mailto:sahan14hasmitha@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                    sahan14hasmitha@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon" aria-hidden="true">💼</div>
              <div>
                <div className="contact-item-label">LinkedIn</div>
                <div className="contact-item-value">
                  <a
                    href="https://www.linkedin.com/in/sahan-hasmitha-b3b074360/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'inherit', textDecoration: 'none' }}
                    aria-label="Visit LinkedIn profile"
                  >
                    linkedin.com/in/sahan-hasmitha-b3b074360/
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon" aria-hidden="true">🐱</div>
              <div>
                <div className="contact-item-label">GitHub</div>
                <div className="contact-item-value">
                  <a
                    href="https://github.com/SahanHasmitha"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'inherit', textDecoration: 'none' }}
                    aria-label="Visit GitHub profile"
                  >
                    github.com/SahanHasmitha
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon" aria-hidden="true">📘</div>
              <div>
                <div className="contact-item-label">Facebook</div>
                <div className="contact-item-value">
                  <a
                    href="https://www.facebook.com/sahan.hasmitha.1"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'inherit', textDecoration: 'none' }}
                    aria-label="Visit Facebook profile"
                  >
                    facebook.com/sahan.hasmitha.1
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
          aria-label="Contact form"
          noValidate
        >
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              aria-required="true"
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && (
              <span id="name-error" style={{ color: '#ff6b6b', fontSize: '0.78rem', marginTop: '4px', display: 'block' }} role="alert">
                {errors.name}
              </span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="john@example.com"
              aria-required="true"
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <span id="email-error" style={{ color: '#ff6b6b', fontSize: '0.78rem', marginTop: '4px', display: 'block' }} role="alert">
                {errors.email}
              </span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Hi Sahan, I'd like to..."
              aria-required="true"
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && (
              <span id="message-error" style={{ color: '#ff6b6b', fontSize: '0.78rem', marginTop: '4px', display: 'block' }} role="alert">
                {errors.message}
              </span>
            )}
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} aria-label="Send message">
            Send Message →
          </button>
          {submitted && (
            <div className="form-success show" role="status" aria-live="polite">
              ✓ Message sent successfully! I'll get back to you soon.
            </div>
          )}
        </form>
      </div>

      <footer style={{ textAlign: 'center', marginTop: '5rem', paddingTop: '2rem', borderTop: '1px solid rgba(0,212,255,0.1)', color: '#5555aa', fontSize: '0.85rem' }}>
        © 2026 G.D.Sahan Hasmitha · Built with React.js
      </footer>
    </section>
  );
}

export default Contact;