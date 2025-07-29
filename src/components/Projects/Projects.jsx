import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { translations } from "../../translations";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "./Projects.css";

const Projects = ({ language }) => {
  const { isDarkMode } = useTheme();
  const t = translations[language].projects;
  const [previewUrl, setPreviewUrl] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      className={`projects ${isDarkMode ? "dark" : ""}`}
      onMouseMove={handleMouseMove}
    >
      {previewUrl && (
        <div
          className="website-preview"
          style={{
            top: `${mousePosition.y + 20}px`,
            left: `${mousePosition.x + 20}px`,
          }}
        >
          <img
            src={`https://s.wordpress.com/mshots/v1/${encodeURIComponent(
              previewUrl
            )}?w=400`}
            alt="Website preview"
          />
        </div>
      )}
      <h2 className="projects-title">{t.title}</h2>
      <Swiper
        key={language} 
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[EffectCoverflow, Navigation]}
        className="projects-swiper"
      >
        {t.projects_list.map((project, index) => (
          <SwiperSlide
            key={index}
            onMouseEnter={() => setPreviewUrl(project.link)}
            onMouseLeave={() => setPreviewUrl(null)}
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-link"
            >
              <div
                className="project-card-content"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="project-card-text">
                  <p className="project-category">{project.category}</p>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-navigation">
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </section>
  );
};

export default Projects;
