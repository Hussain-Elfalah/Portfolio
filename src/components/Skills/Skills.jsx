import React, { useEffect, useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { translations } from '../../translations';
import './Skills.css';

const Skills = ({ language }) => {
  const { isDarkMode } = useTheme();
  const t = translations[language].skills;
  const [scrollPosition, setScrollPosition] = useState(0);

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

  useEffect(() => {
    const track = document.querySelector('.skills-track');
    if (!track) return;
  
    const totalWidth = track.scrollWidth;
    const viewportWidth = track.offsetWidth;
    const maxScroll = totalWidth - viewportWidth;
    
    const interval = setInterval(() => {
      setScrollPosition(prev => {
        const direction = language === 'en' ? -1 : 1;
        const newPosition = prev + direction;
  
        // For English (scrolling left)
        if (direction === -1) {
          if (Math.abs(prev) >= totalWidth / 2) {
            return 0;
          }
        }
        
        // For Arabic (scrolling right)
        if (direction === 1) {
          if (prev >= totalWidth / 2) {
            return 0;
          }
        }
  
        return newPosition;
      });
    }, 30);
  
    return () => clearInterval(interval);
  }, [language]);

  return (
    <section className={`skills ${isDarkMode ? 'dark' : ''}`}>
      <h2>{t.title}</h2>
      <div className="skills-carousel">
        <div 
          className="skills-track"
          style={{ transform: `translateX(${scrollPosition}px)` }}
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