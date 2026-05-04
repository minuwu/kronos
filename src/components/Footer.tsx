import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <h3 style={{ marginBottom: '12px' }}>KRONOS</h3>
            <p>Timeless design. Modern performance.</p>
          </div>
          <div className="legal-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
          <p>© {new Date().getFullYear()} Kronos App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
