import { Hourglass } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

const base = import.meta.env.BASE_URL;

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <a href={base} className="navbar-logo">
          <Hourglass color="#d4af37" size={32} strokeWidth={1.5} />
          KRONOS
        </a>
        <div className="navbar-links" style={{ alignItems: 'center' }}>
          <a href={`${base}#features`} className="navbar-link">Features</a>
          <a href={`${base}#philosophy`} className="navbar-link">Philosophy</a>
          <a href={`${base}#download`} className="navbar-link">Download</a>
          <ThemeToggle />
        </div>
      </div>
      <div className="navbar-divider" />
    </nav>
  );
};

export default Navbar;
