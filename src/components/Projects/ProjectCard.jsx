import React from 'react';

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <a href={link} className="card" target="_blank" rel="noopener noreferrer">
      <div className="card-content">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </a>
  );
};

export default ProjectCard;