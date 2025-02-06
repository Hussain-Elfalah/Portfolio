import React from 'react';
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';
import { translations } from '../../translations';
import './Contact.css';

const Contact = ({ language }) => {
  const { isDarkMode } = useTheme();
  const t = translations[language].contact;

  const contactInfo = {
    whatsapp: '+218930402015',
    email: 'Hussain.mh.elfalah@gmail.com',
    linkedin: 'https://www.linkedin.com/in/hussain-elfallah-521a73322/',
    instagram: 'https://www.instagram.com/ui.design.club/'
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}`, '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${contactInfo.email}`;
  };

  return (
    <section className={`contact ${isDarkMode ? 'dark' : ''}`}>
      <h2>{t.title}</h2>
      <div className="contact-container">
        <div className="contact-card whatsapp" onClick={handleWhatsAppClick}>
          <div className="card-overlay"></div>
          <div className="icon-wrapper">
            <FaWhatsapp className="contact-icon" />
          </div>
          <h3>{t.whatsapp.title}</h3>
          <p>{contactInfo.whatsapp}</p>
          <span className="card-hint">{t.whatsapp.hint}</span>
        </div>

        <a 
          href={`mailto:${contactInfo.email}`} 
          className="contact-card email"
        >
          <div className="card-overlay"></div>
          <div className="icon-wrapper">
            <FaEnvelope className="contact-icon" />
          </div>
          <h3>{t.email.title}</h3>
          <p>{contactInfo.email}</p>
          <span className="card-hint">{t.email.hint}</span>
        </a>

        <a 
          href={contactInfo.linkedin}
          className="contact-card linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="card-overlay"></div>
          <div className="icon-wrapper">
            <FaLinkedin className="contact-icon" />
          </div>
          <h3>{t.linkedin.title}</h3>
          <p>{t.linkedin.hint}</p>
          <span className="card-hint">Click to visit profile</span>
        </a>

        <a 
          href={contactInfo.instagram}
          className="contact-card instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="card-overlay"></div>
          <div className="icon-wrapper">
            <FaInstagram className="contact-icon" />
          </div>
          <h3>{t.instagram.title}</h3>
          <p>{t.instagram.hint}</p>
          <span className="card-hint">Click to visit profile</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;