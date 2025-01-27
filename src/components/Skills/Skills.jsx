import React, { useEffect, useState } from 'react';
import './Skills.css';

const Skills = () => {
  const skillsData = [
    { name: 'Node.js', level: 'Skillful', category: 'Backend' },
    { name: 'Express.js', level: 'Skillful', category: 'Backend' },
    { name: 'PostgreSQL', level: 'Skillful', category: 'Database' },
    { name: 'React.js', level: 'Beginner', category: 'Frontend' },
    { name: 'RESTful APIs', level: 'Skillful', category: 'Backend' },
    { name: 'Internet Computer', level: 'Beginner', category: 'Blockchain' },
    { name: 'Smart Contracts', level: 'Beginner', category: 'Blockchain' },
    { name: 'Management Tools', level: 'Skillful', category: 'Soft Skills' },
    { name: 'Leadership', level: 'Skillful', category: 'Soft Skills' },
    { name: 'Problem Solving', level: 'Skillful', category: 'Soft Skills' },
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
    <section className="skills">
      <h2>My Skills</h2>
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