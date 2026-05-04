import { Hourglass } from 'lucide-react';

const base = import.meta.env.BASE_URL;

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
        <a href={base} style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#fff'
        }}>
          <Hourglass color="#d4af37" size={32} />
          KRONOS
        </a>
        <div style={{ display: 'flex', gap: '32px' }}>
          <a href={base} style={{ color: '#fff', fontWeight: '500' }}>Features</a>
          <a href="#" style={{ color: '#fff', fontWeight: '500' }}>Download</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
