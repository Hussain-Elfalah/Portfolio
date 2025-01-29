import React, { useEffect, useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { translations } from '../../translations';
import './Skills.css';

const Skills = ({ language }) => {
  const { isDarkMode } = useTheme();
  const t = translations[language].skills;

  const skillsData = [
    { name: 'Node.js', level: t.levels.skillful, category: t.categories.backend },
    { name: 'Express.js', level: t.levels.skillful, category: t.categories.backend },
    { name: 'PostgreSQL', level: t.levels.skillful, category: t.categories.database },
    { name: 'React.js', level: t.levels.beginner, category: t.categories.frontend },
    { name: 'RESTful APIs', level: t.levels.skillful, category: t.categories.backend },
    { name: 'Internet Computer', level: t.levels.beginner, category: t.categories.blockchain },
    { name: 'Smart Contracts', level: t.levels.beginner, category: t.categories.blockchain },
    { name: 'Management Tools', level: t.levels.skillful, category: t.categories.softSkills },
    { name: 'Leadership', level: t.levels.skillful, category: t.categories.softSkills },
    { name: 'Problem Solving', level: t.levels.skillful, category: t.categories.softSkills },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => 
        current === skillsData.length - 3 ? 0 : current + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`skills ${isDarkMode ? 'dark' : ''}`}>
      <h2>{t.title}</h2>
      <div className="skills-carousel">
        <div 
          className="skills-track"
          style={{ transform: `translateX(-${activeIndex * 33.33}%)` }}
        >
          {skillsData.map((skill, index) => (
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