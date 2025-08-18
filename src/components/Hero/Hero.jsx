import React from 'react';
import { motion } from 'framer-motion';

import { useTheme } from '../../context/ThemeContext';
import { translations } from '../../translations';
import './Hero.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

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
                <motion.div 
          className="hero-text"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants}>{t.title}</motion.h1>
          <motion.h2 variants={itemVariants}>{t.subtitle}</motion.h2>
          <motion.p variants={itemVariants}>{t.description}</motion.p>
          <motion.a 
            href="/Portfolio/Hussain-Elfallah-Resuma.pdf"
            className="cta-button"
            download
            variants={itemVariants}
          >
            {t.downloadCV}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;