import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Education from './Educations';
import Services from './Services';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;