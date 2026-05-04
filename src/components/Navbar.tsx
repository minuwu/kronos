import { Link } from 'react-router-dom';
import { Hourglass } from 'lucide-react';

const Navbar = () => {
  return (
    <nav style={{
      padding: '24px 0',
      position: 'absolute',
      width: '100%',
      zIndex: 10,
      borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link to="/" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#fff'
        }}>
          <Hourglass color="#d4af37" size={32} />
          KRONOS
        </Link>
        <div style={{ display: 'flex', gap: '32px' }}>
          <Link to="/" style={{ color: '#fff', fontWeight: '500' }}>Features</Link>
          <a href="#" style={{ color: '#fff', fontWeight: '500' }}>Download</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
