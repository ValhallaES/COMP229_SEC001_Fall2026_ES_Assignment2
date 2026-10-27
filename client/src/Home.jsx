import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '10vh' }}>
      <h1>Welcome to My Personal Portfolio</h1>
      <p style={{ fontStyle: 'italic', color: '#555', margin: '20px 0', fontSize: '1.1rem' }}>
        Mission Statement: To build efficient, user-centric software solutions by combining full-stack development skills with modern AI system design.
      </p>
      <Link to="/about" style={{ display: 'inline-block', padding: '10px 20px', fontSize: '1rem', cursor: 'pointer', background: '#007bff', color: '#fff', borderRadius: '5px', textDecoration: 'none' }}>
        Learn More About Me
      </Link>
    </div>
  );
}