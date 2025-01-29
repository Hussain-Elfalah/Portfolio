import React, { useState } from 'react';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import './styles/global.css';

function App() {
  const [language, setLanguage] = useState('en');

  return (
    <ThemeProvider>
      <div className="app">
        <nav className="nav-controls">
          <button 
            onClick={() => setLanguage(lang => lang === 'en' ? 'ar' : 'en')}
            className="lang-toggle"
          >
            {language === 'en' ? 'عربي' : 'English'}
          </button>
          <ThemeToggle />
        </nav>
        <main className={language === 'ar' ? 'rtl' : 'ltr'}>
          <Hero language={language} />
          <Skills language={language} />
          <Projects language={language} />
          <Contact language={language} />
        </main>
      </div>
    </ThemeProvider>
  );
}

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme} className="theme-toggle">
      {isDarkMode ? '☀️' : '🌙'}
    </button>
  );
};

export default App;
