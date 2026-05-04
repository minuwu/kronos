const base = import.meta.env.BASE_URL;

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
            <a href={`${base}privacy.html`}>Privacy Policy</a>
            <a href={`${base}terms.html`}>Terms of Service</a>
          </div>
          <p>© {new Date().getFullYear()} Kronos App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
