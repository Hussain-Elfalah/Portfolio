import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { translations } from '../../translations';
import './Hero.css';

const Hero = ({ language }) => {
  const { isDarkMode } = useTheme();
  const t = translations[language].hero;

  return (
    <section className={`hero ${isDarkMode ? 'dark' : ''}`}>
      <div className="hero-content">
        <div className="profile-pic-wrapper">
          <div className="profile-pic-container">
            <img 
              src="/Portfolio/images/Protfolio-pic.png"
              alt={t.title}
              className="profile-pic"
            />
          </div>
        </div>
        <div className="hero-text">
          <h1>{t.title}</h1>
          <h2>{t.subtitle}</h2>
          <p>{t.description}</p>
          <a 
            href="/Portfolio/Hussain Elfallah - CV.pdf"
            className="cta-button"
            download
          >
            {t.downloadCV}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;