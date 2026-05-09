import './Footer.css';

const base = import.meta.env.BASE_URL;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={{ 
      padding: '80px 0 40px', 
      background: 'var(--bg-obsidian)',
      borderTop: '1px solid var(--border-gold)',
      position: 'relative'
    }}>
      <div className="container">
        <div className="footer-grid">
          <div style={{ maxWidth: '300px' }}>
            <h3 className="display-text" style={{ fontSize: '1.5rem', marginBottom: '24px' }}>KRONOS</h3>
            <p className="text-muted" style={{ fontSize: '0.9rem' }}>
              The definitive hourglass experience for those who value the weight of every second. 
              Precision engineered for the modern aesthetic.
            </p>
          </div>
          
          <div>
            <h4 className="display-text" style={{ fontSize: '0.9rem', marginBottom: '24px', color: 'var(--gold)' }}>LEGAL</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '12px' }}><a href={`${base}privacy.html`} className="text-muted" style={{ textDecoration: 'none' }}>Privacy Policy</a></li>
              <li style={{ marginBottom: '12px' }}><a href={`${base}terms.html`} className="text-muted" style={{ textDecoration: 'none' }}>Terms of Service</a></li>
              <li style={{ marginBottom: '12px' }}><a href={`${base}founder.html`} className="text-muted" style={{ textDecoration: 'none' }}>Founding Partner</a></li>
            </ul>
          </div>

          <div>
            <h4 className="display-text" style={{ fontSize: '0.9rem', marginBottom: '24px', color: 'var(--gold)' }}>SOCIAL</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '12px' }}><a href="#" className="text-muted" style={{ textDecoration: 'none' }}>Instagram</a></li>
              <li style={{ marginBottom: '12px' }}><a href="#" className="text-muted" style={{ textDecoration: 'none' }}>X (Twitter)</a></li>
            </ul>
          </div>

          <div>
            <h4 className="display-text" style={{ fontSize: '0.9rem', marginBottom: '24px', color: 'var(--gold)' }}>CONTACT</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a href="mailto:mail@minuwu.is-a.dev" className="text-muted" style={{ textDecoration: 'none', fontSize: '0.9rem', color: 'var(--gold)' }}>
                mail@minuwu.is-a.dev
              </a>
              <p className="text-muted" style={{ 
                fontSize: '0.8rem', 
                textDecoration: 'line-through', 
                opacity: 0.3,
                userSelect: 'none',
                pointerEvents: 'none'
              }}>
                concierge@kronos.app
              </p>
            </div>
          </div>
        </div>
        
        <div className="divider-line" style={{ opacity: 0.1, margin: '40px 0' }} />
        
        <div style={{ 
          textAlign: 'center', 
          fontSize: '0.75rem', 
          textTransform: 'uppercase', 
          letterSpacing: '0.2em',
          color: 'var(--text-muted)',
          opacity: 0.5
        }}>
          &copy; {currentYear} KRONOS INTERACTIVE. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
