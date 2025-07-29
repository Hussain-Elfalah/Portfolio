import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { translations } from "../../translations";
import { FaNodeJs, FaReact, FaVuejs } from "react-icons/fa";
import {
  SiExpress,
  SiTypescript,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { FaLaravel } from "react-icons/fa";
import { GiBrain, GiGears } from "react-icons/gi";
import { GrCycle } from "react-icons/gr";
import "./Skills.css";

const imageStyle = `
  .skill-image {
    width: 48px;
    height: 48px;
    filter: grayscale(1) brightness(1.5);
    transition: all 0.3s ease;
  }

  .skill-logo-wrapper:hover .skill-image {
    filter: grayscale(0) brightness(1);
    transform: scale(1.2);
  }
`;

const Skills = ({ language }) => {
  const { isDarkMode } = useTheme();
  const t = translations[language].skills;

  const skillsData = [
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "Typescript", icon: <SiTypescript /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "React.js", icon: <FaReact /> },
    { name: "Vue.js", icon: <FaVuejs /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "RESTful APIs", icon: <TbApi /> },
    // {
    //   name: "Laravel",
    //   icon: "C:/Users/Lenovo/Documents/Portfolio/public/images/Laravel.png",
    //   isImage: true,
    // },
    // { name: "Problem Solving", icon: <GiBrain /> },
    // { name: "Leadership", icon: <GrCycle /> },
    // { name: "Management Tools", icon: <GiGears /> },
  ];

  return (
    <>
      <style>{imageStyle}</style>
      <section id="skills" className={`skills ${isDarkMode ? "dark" : ""}`}>
        <div className="skills-container">
          <h2>{t.title}</h2>
          <div className="skills-grid">
            {skillsData.map((skill, index) => (
              <div
                key={index}
                className="skill-logo-wrapper"
                data-tooltip={skill.name}
              >
                {skill.isImage ? (
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="skill-image"
                  />
                ) : (
                  skill.icon
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
