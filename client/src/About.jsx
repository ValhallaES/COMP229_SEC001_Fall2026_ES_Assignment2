export default function About() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h2>About Me</h2>
      <img src="/myphoto.jpg" alt="Erlin Shao" style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '8px', marginBottom: '10px', backgroundColor: '#ddd' }} />
      <h3>Erlin Shao</h3>
      <p style={{ lineHeight: '1.6' }}>
        I am a dedicated software engineering student focused on Artificial Intelligence. I enjoy building practical applications using modern backend and frontend technologies, from structuring robust databases to creating intuitive web interfaces.
      </p>
      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '8px 16px', marginTop: '10px', background: '#28a745', color: 'white', borderRadius: '4px', textDecoration: 'none' }}>
        Download Resume (PDF)
      </a>
    </div>
  );
}