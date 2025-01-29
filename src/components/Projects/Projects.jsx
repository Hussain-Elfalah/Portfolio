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
      title: language === 'en' ? "Fitness Flow" : "تطبيق اللياقة",
      description: language === 'en'
        ? "A backend for a fitness application that tracks calories, progress etc.."
        : "خلفية لتطبيق لياقة بدنية يتتبع السعرات الحرارية والتقدم وغير ذلك",
      image: "/Portfolio/images/projects-images/Fitness-Flow.png",
      link: "https://github.com/Hussain-Elfalah/Fitness-Flow.git"
    },
    {
      title: language === 'en' ? "Stitsh.ai" : "ستيتش.اي",
      description: language === 'en'
        ? "Chat Bot application using OpenAI's API"
        : "تطبيق دردشة ذكي يستخدم واجهة برمجة تطبيقات OpenAI",
      image: "/Portfolio/images/projects-images/StitshAI.png",
      link: "https://github.com/Hussain-Elfalah/Stitsh-ai.git"
    },
    {
      title: language === 'en' ? "Blog Project" : "مشروع المدونة",
      description: language === 'en'
        ? "A blog application where you can add, edit and delete posts/blogs"
        : "تطبيق مدونة يمكنك من خلاله إضافة وتعديل وحذف المنشورات/المدونات",
      image: "/Portfolio/images/projects-images/Blog.png",
      link: "https://github.com/Hussain-Elfalah/Blog-API-Project.git"
    },
    {
      title: language === 'en' ? "Weather App" : "تطبيق الطقس",
      description: language === 'en'
        ? "Brings the weather forecast of Benghazi (looks better in mobile view)"
        : "يجلب توقعات الطقس لمدينة بنغازي (يبدو أفضل في عرض الجوال)",
      image: "/Portfolio/images/projects-images/Weather.png",
      link: "https://github.com/Hussain-Elfalah/Weather-App.git"
    },
    {
      title: language === 'en' ? "Travel Tracker" : "متتبع السفر",
      description: language === 'en'
        ? "An application to check the countries you visited"
        : "تطبيق للتحقق من البلدان التي زرتها",
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