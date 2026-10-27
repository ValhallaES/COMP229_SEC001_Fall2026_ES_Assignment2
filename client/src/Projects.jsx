export default function Projects() {
    const projectList = [
        {
            id: 1,
            title: "Focus-Tracking Web App",
            role: "Full-Stack Developer",
            description: "Designed and built the backend architecture for a task logging application using Express and MongoDB, implementing custom database schemas and server routing.",
            image: "/project1.png"
        },
        {
            id: 2,
            title: "Sunlit Noodles Restaurant Site",
            role: "Front-End Developer",
            description: "Developed a dynamic restaurant website featuring jQuery user interface animations, Giphy API integration, and automated testing scripts.",
            image: "/project2.png"
        },
    ];

    return (
        <div>
            <h2>My Projects</h2>
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                {projectList.map(p => (
                    <div key={p.id} style={{ border: '1px solid #e0e0e0', padding: '1.5rem', width: '300px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                        <div style={{ width: '100%', height: '150px', backgroundColor: '#f0f0f0', marginBottom: '1rem', borderRadius: '4px' }}>
                            <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }} />
                        </div>
                        <h3 style={{ marginTop: '0' }}>{p.title}</h3>
                        <p style={{ color: '#007bff', fontWeight: 'bold' }}>Role: {p.role}</p>
                        <p style={{ fontSize: '0.95rem', color: '#444' }}>{p.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}