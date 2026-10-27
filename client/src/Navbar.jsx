import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 2rem', background: '#1a1a1a', color: '#fff' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ width: '40px', height: '40px', background: '#007bff', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem' }}>
          ES
        </div>
      </div>
      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About Me</Link>
        <Link to="/projects" style={{ color: 'white', textDecoration: 'none' }}>Projects</Link>
        <Link to="/education" style={{ color: 'white', textDecoration: 'none' }}>Education</Link>
        <Link to="/services" style={{ color: 'white', textDecoration: 'none' }}>Services</Link>
        <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
      </div>
    </nav>
  );
}