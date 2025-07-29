import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';
import { translations } from '../../translations';
import './Contact.css';

const Contact = ({ language }) => {
  const { isDarkMode } = useTheme();
  const t = translations[language].contact;

  const contactInfo = {
    whatsapp: 'https://wa.me/218930402015',
    email: 'mailto:Hussain.mh.elfalah@gmail.com',
    linkedin: 'https://www.linkedin.com/in/hussain-elfallah-521a73322/',
    github: 'https://github.com/Hussain-Elfalah'
  };

  const icons = [
    { id: 'whatsapp', icon: <FaWhatsapp />, link: contactInfo.whatsapp, delay: 0.2 },
    { id: 'email', icon: <FaEnvelope />, link: contactInfo.email, delay: 0.4 },
    { id: 'linkedin', icon: <FaLinkedin />, link: contactInfo.linkedin, delay: 0.6 },
    { id: 'github', icon: <FaGithub />, link: contactInfo.github, delay: 0.8 },
  ];

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (delay) => ({
      opacity: 1,
      scale: 1,
      transition: { delay, duration: 0.5 }
    })
  };

  return (
    <section id="contact" className={`contact ${isDarkMode ? 'dark' : ''}`}>
      <div className="contact-container-artistic">
        <motion.div 
          className="contact-title-container"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>{t.title}</h2>
          <p>{t.subtitle}</p>
        </motion.div>
        <div className="floating-icons-container">
          {icons.map(({ id, icon, link, delay }) => (
            <motion.a
              key={id}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={`floating-icon ${id}`}
              custom={delay}
              initial="hidden"
              animate="visible"
              variants={iconVariants}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              {icon}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;