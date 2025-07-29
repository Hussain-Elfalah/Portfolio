import React, { useState, useEffect } from "react";
import ThreeScene from "./components/ThreeScene/ThreeScene";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import "./styles/global.css";

function App() {
  const [language, setLanguage] = useState("en");

  return (
    <ThemeProvider>
      <AppContent language={language} setLanguage={setLanguage} />
    </ThemeProvider>
  );
}

const AppContent = ({ language, setLanguage }) => {
  const { isDarkMode } = useTheme();

  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode
      ? "var(--dark-background)"
      : "var(--background-color)";
  }, [isDarkMode]);

  return (
    <div className="app">
      <nav className="nav-controls">
        <button
          onClick={() => setLanguage((lang) => (lang === "en" ? "ar" : "en"))}
          className="lang-toggle"
        >
          {language === "en" ? "عربي" : "English"}
        </button>
        <ThemeToggle />
      </nav>
      <ThreeScene />
      <main className={language === "ar" ? "rtl" : "ltr"}>
        <Hero language={language} />
        <Skills language={language} />
        <Projects language={language} />
        <Contact language={language} />
      </main>
    </div>
  );
};

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme} className="theme-toggle">
      {isDarkMode ? "☀️" : "🌙"}
    </button>
  );
};

export default App;
