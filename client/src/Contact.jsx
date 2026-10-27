import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', phone: '', email: '', message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log("Form Data Captured:", formData);
    alert("Thank you for your message! Redirecting to Home...");
    navigate('/'); 
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto' }}>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', background: '#f8f9fa', padding: '2rem', borderRadius: '8px' }}>
        <input type="text" name="firstName" placeholder="First Name" required onChange={handleChange} style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
        <input type="text" name="lastName" placeholder="Last Name" required onChange={handleChange} style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
        <input type="tel" name="phone" placeholder="Contact Number" onChange={handleChange} style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
        <input type="email" name="email" placeholder="Email Address" required onChange={handleChange} style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
        <textarea name="message" placeholder="Your Message" rows="5" required onChange={handleChange} style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}></textarea>
        <button type="submit" style={{ padding: '12px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
          Send Message
        </button>
      </form>
    </div>
  );
}