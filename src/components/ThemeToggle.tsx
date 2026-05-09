import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <button 
      onClick={toggleTheme} 
      className="theme-toggle"
      aria-label="Toggle Theme"
    >
      <div className={`toggle-icon-wrapper ${theme === 'dark' ? 'is-dark' : 'is-light'}`}>
        <Moon className="icon-moon" size={20} strokeWidth={1.5} />
        <Sun className="icon-sun" size={20} strokeWidth={1.5} />
      </div>
    </button>
  );
};

export default ThemeToggle;
