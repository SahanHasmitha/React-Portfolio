import React from 'react';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js', pct: 75 },
      { name: 'HTML5', pct: 90 },
      { name: 'CSS3', pct: 85 },
      { name: 'JavaScript', pct: 78 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', pct: 70 },
      { name: 'Express.js', pct: 68 },
      { name: 'REST APIs', pct: 72 },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'MongoDB', pct: 70 },
      { name: 'MySQL', pct: 65 },
    ],
  },
  {
    title: 'Tools & Other',
    skills: [
      { name: 'Git & GitHub', pct: 80 },
      { name: 'VS Code', pct: 90 },
      { name: 'Figma (Basic)', pct: 55 },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" aria-label="Technical skills section">
      <div className="section-tag">What I Know</div>
      <h2 className="section-title">Tech Skills</h2>
      <div className="section-divider" aria-hidden="true"></div>

      <div className="skills-wrapper">
        {skillCategories.map((cat) => (
          <div className="skill-category" key={cat.title}>
            <div className="skill-cat-title">{cat.title}</div>
            <div className="skill-items">
              {cat.skills.map((skill) => (
                <div className="skill-item" key={skill.name}>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-pct">{skill.pct}%</span>
                  </div>
                  <div className="skill-bar" role="progressbar" aria-valuenow={skill.pct} aria-valuemin="0" aria-valuemax="100" aria-label={`${skill.name} proficiency ${skill.pct}%`}>
                    <div className="skill-fill" style={{ width: `${skill.pct}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
