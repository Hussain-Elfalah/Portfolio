import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="profile-pic-wrapper">
          <div className="profile-pic-container">
            <img 
              src="/Portfolio/images/Protfolio-pic.png" 
              alt="Hussain Elfalah" 
              className="profile-pic"
            />
          </div>
        </div>
        <div className="hero-text">
          <h1>Hussain Elfalah</h1>
          <h2>Full Stack Developer | Project Manager</h2>
          <p>
            Experienced in Node.js, Express.js, PostgreSQL, and building RESTful APIs.
            Passionate about creating efficient and scalable web solutions.
          </p>
          <a 
            href="/resume.pdf" 
            className="cta-button"
            download
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;