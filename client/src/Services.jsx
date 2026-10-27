export default function Services() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h2>Services Offered</h2>
      <div style={{ display: 'grid', gap: '1.5rem' }}>
        <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '8px' }}>
          <h3 style={{ marginTop: 0 }}>Full-Stack Web Development</h3>
          <p>Building responsive front-end interfaces using React and HTML/CSS, paired with robust backend systems using Node.js, Express, and MongoDB.</p>
        </div>
        <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '8px' }}>
          <h3 style={{ marginTop: 0 }}>Software Engineering</h3>
          <p>Developing object-oriented applications in C# and Python, focusing on modular architecture, abstract base classes, and LINQ queries.</p>
        </div>
        <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '8px' }}>
          <h3 style={{ marginTop: 0 }}>Database Management</h3>
          <p>Designing database schemas, writing Oracle SQL DDL statements, and managing schema constraints for secure data storage.</p>
        </div>
      </div>
    </div>
  );
}