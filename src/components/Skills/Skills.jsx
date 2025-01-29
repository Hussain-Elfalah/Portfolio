import React from 'react';
import './Skills.css';

const Skills = ({ language }) => {
  const skills = {
    en: [
      { name: 'Node.js', level: 'Skillful', category: 'Backend' },
      // ... other skills
    ],
    ar: [
      { name: 'Node.js', level: 'متمكن', category: 'تطوير خلفي' },
      // ... translate other skills
    ]
  };

  return (
    <section className="skills">
      <h2>{language === 'en' ? 'My Skills' : 'مهاراتي'}</h2>
      <div className="skills-carousel">
        <div className="skills-track">
          {skills[language].map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-content">
                <h3>{skill.name}</h3>
                <p className="skill-category">{skill.category}</p>
                <p className="skill-level">{skill.level}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;