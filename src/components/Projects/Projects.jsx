import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Project Managment System",
      description: "A platform developed for an NGO to automate their project management process",
      image: "/images/projects-images/PMP.png",
      link: "https://github.com/Hussain-Elfalah/ProjectManagement.git"
    },
    {
        title: "Fitness FLow",
        description: "A backend for a fitness application that tracks caloris, progress etc..",
        image: "/images/projects-images/Fitness-Flow.png",
        link: "https://github.com/Hussain-Elfalah/Fitness-Flow.git"
      },
      {
        title: "Stitsh.ai",
        description: "Chat Bot application using OpenAI's API",
        image: "/images/projects-images/StitshAI.png",
        link: "https://github.com/Hussain-Elfalah/Stitsh-ai.git"
      },
      {
        title: "Blog Project",
        description: "A blog application where you can add, edit and delete posts/blogs",
        image: "/images/projects-images/Blog.png",
        link: "https://github.com/Hussain-Elfalah/Blog-API-Project.git"
      },
      {
        title: "Weather App",
        description: "Brings the weather forecast of Benghazi (looks better in mobile view)",
        image: "/images/projects-images/Weather.png",
        link: "https://github.com/Hussain-Elfalah/Weather-App.git"
      },
      {
        title: "Travel Tracker",
        description: "An application to check the countries you visted",
        image: "/images/projects-images/Travel.png",
        link: "https://github.com/Hussain-Elfalah/Travel-Tracker.git"
      },
    // Add more projects as needed
  ];

  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            {...project}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;