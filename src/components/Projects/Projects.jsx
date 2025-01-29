import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { translations } from '../../translations';
import './Projects.css';

const Projects = ({ language }) => {
  const { isDarkMode } = useTheme();
  const t = translations[language].projects;

  const projects = [
    {
      title: language === 'en' ? "Project Management" : "نظام إدارة المشاريع",
      description: language === 'en' 
        ? "A platform developed for an NGO to automate their project management process"
        : "منصة تم تطويرها لمنظمة غير حكومية لأتمتة عملية إدارة المشاريع",
      image: "/Portfolio/images/projects-images/PMP.png",
      link: "https://github.com/Hussain-Elfalah/ProjectManagement.git"
    },
    {
        title: "Fitness FLow",
        description: "A backend for a fitness application that tracks caloris, progress etc..",
        image: "/Portfolio/images/projects-images/Fitness-Flow.png",
        link: "https://github.com/Hussain-Elfalah/Fitness-Flow.git"
      },
      {
        title: "Stitsh.ai",
        description: "Chat Bot application using OpenAI's API",
        image: "/Portfolio/images/projects-images/StitshAI.png",
        link: "https://github.com/Hussain-Elfalah/Stitsh-ai.git"
      },
      {
        title: "Blog Project",
        description: "A blog application where you can add, edit and delete posts/blogs",
        image: "/Portfolio/images/projects-images/Blog.png",
        link: "https://github.com/Hussain-Elfalah/Blog-API-Project.git"
      },
      {
        title: "Weather App",
        description: "Brings the weather forecast of Benghazi (looks better in mobile view)",
        image: "/Portfolio/images/projects-images/Weather.png",
        link: "https://github.com/Hussain-Elfalah/Weather-App.git"
      },
      {
        title: "Travel Tracker",
        description: "An application to check the countries you visted",
        image: "/Portfolio/images/projects-images/Travel.png",
        link: "https://github.com/Hussain-Elfalah/Travel-Tracker.git"
      },
    // Add more projects as needed
  ];

  return (
    <section className={`projects ${isDarkMode ? 'dark' : ''}`}>
      <h2>{t.title}</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <a 
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="card"
          >
            <div className="card-overlay"></div>
            <div className="card-content">
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span className="view-project">{t.viewProject}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;