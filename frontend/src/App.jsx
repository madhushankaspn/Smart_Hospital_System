import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';


// --- Premium Home Page Component ---
const Home = () => {
  const [bgIndex, setBgIndex] = useState(0);
  
  const images = [
    "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1538108149393-cebb47ac195a?q=80&w=2000&auto=format&fit=crop"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-layout">
      {/* 1. Hero Section (උඩම කෑල්ල) */}
      <div className="pro-home" style={{ backgroundImage: `url(${images[bgIndex]})` }}>
        <div className="hero-overlay">
          <nav className="pro-navbar">
            <div className="logo">
              <h2>🏥 SmartCare HMS</h2>
            </div>
            <div className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/services">Services</Link>
              <Link to="/about">About Us</Link>
              <Link to="/ai-prediction" className="ai-badge">✨ AI Health Predictor</Link>
              
              <div className="dropdown">
                <button className="dropbtn">Login / Register ▼</button>
                <div className="dropdown-content">
                  <Link to="/login/patient">👨‍🦰 Patient Portal</Link>
                  <Link to="/login/doctor">👨‍⚕️ Doctor Portal</Link>
                  <Link to="/login/admin">🛡️ Admin Dashboard</Link>
                </div>
              </div>
            </div>
          </nav>

          <div className="hero-content">
            <h1 className="animate-title">The Future of Healthcare is Here</h1>
            <p className="animate-subtitle">
              Experience next-generation medical facilities integrated with Artificial Intelligence. 
              Whether you are a patient seeking care, or a doctor managing appointments, our SmartCare system covers it all.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">Book Appointment</button>
              <button className="btn-secondary">Explore AI Features</button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Stats Banner (අලුතින් එකතු කළ කොටස) */}
      <div className="stats-banner">
        <div className="stat-item"><h2>50+</h2><p>Specialist Doctors</p></div>
        <div className="stat-item"><h2>24/7</h2><p>Emergency Care</p></div>
        <div className="stat-item"><h2>10k+</h2><p>Happy Patients</p></div>
        <div className="stat-item"><h2>99%</h2><p>Success Rate</p></div>
      </div>

      {/* 3. Services Section (අලුතින් එකතු කළ කොටස) */}
      <div className="services-section">
        <h2 className="section-title">Our Premium Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>❤️ Cardiology</h3>
            <p>State-of-the-art heart care and surgery facilities with top-tier specialists.</p>
          </div>
          <div className="service-card">
            <h3>🧠 Neurology</h3>
            <p>Advanced diagnosis and treatment for neurological disorders and brain health.</p>
          </div>
          <div className="service-card">
            <h3>✨ AI Diagnostics</h3>
            <p>Predictive health analysis using machine learning to catch diseases early.</p>
          </div>
          <div className="service-card">
            <h3>💊 Smart Pharmacy</h3>
            <p>Automated prescription and inventory management for zero delays.</p>
          </div>
        </div>
      </div>

      {/* 4. Footer (අලුතින් එකතු කළ කොටස) */}
      <footer className="footer">
        <p>© 2026 SmartCare Hospital Management System. Built by Supun. All rights reserved.</p>
      </footer>
    </div>
  );
};

// --- Placeholder Components for Routes ---
const LoginPatient = () => <div className="temp-page"><h2>Patient Portal Coming Soon...</h2></div>;
const LoginDoctor = () => <div className="temp-page"><h2>Doctor Portal Coming Soon...</h2></div>;
const LoginAdmin = () => <div className="temp-page"><h2>Admin Dashboard Coming Soon...</h2></div>;

// --- Main App Component ---
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login/patient" element={<LoginPatient />} />
      <Route path="/login/doctor" element={<LoginDoctor />} />
      <Route path="/login/admin" element={<LoginAdmin />} />
    </Routes>
  );
}

export default App;