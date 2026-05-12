import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
// AOS Imports
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

// --- Clean & Professional Hospital Home Page ---
const Home = () => {
  const [bgIndex, setBgIndex] = useState(0);
  
  const images = [
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1538108149393-cebb47ac195a?q=80&w=2000&auto=format&fit=crop"
  ];

  useEffect(() => {
    // AOS Animation එක පටන් ගන්න කෑල්ල
    AOS.init({
      duration: 1000, // Animation එකට යන වෙලාව (මිලි තත්පර 1000 = තත්පර 1)
      once: true,     // එක පාරක් විතරක් Animate වෙන්න
    });

    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="main-layout">
      {/* Hero Section */}
      <div className="hero-section" style={{ backgroundImage: `url(${images[bgIndex]})` }}>
        <div className="hero-overlay">
          <nav className="navbar fixed-nav">
            <div className="logo">
              <h2>🏥 SmartCare HMS</h2>
            </div>
            <div className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/services">Services</Link>
              <Link to="/about">About Us</Link>
              <Link to="/ai-prediction" className="ai-link">✨ AI Health Predictor</Link>
              
              <div className="dropdown">
                <button className="login-btn">Login / Register ▼</button>
                <div className="dropdown-menu">
                  <Link to="/login/patient">👨‍🦰 Patient Portal</Link>
                  <Link to="/login/doctor">👨‍⚕️ Doctor Portal</Link>
                  <Link to="/login/admin">🛡️ Admin Dashboard</Link>
                </div>
              </div>
            </div>
          </nav>

          <div className="hero-content">
            <h1 className="hero-title">The Future of <br/><span className="text-highlight">Healthcare</span> is Here</h1>
            <p className="hero-subtitle">
              Experience next-generation medical facilities integrated with Artificial Intelligence. Whether you are a patient seeking care, or a doctor managing appointments, our SmartCare system covers it all.
            </p>
            <div className="btn-group">
              <button className="btn-primary">Book Appointment</button>
              <button className="btn-outline">Explore AI Features</button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Stats Banner (Fade Up Animation) */}
      <div className="stats-container" data-aos="fade-up">
        <div className="stat-box"><h3>50+</h3><p>Specialist Doctors</p></div>
        <div className="stat-box"><h3>24/7</h3><p>Emergency Care</p></div>
        <div className="stat-box"><h3>10k+</h3><p>Happy Patients</p></div>
        <div className="stat-box"><h3>99%</h3><p>Success Rate</p></div>
      </div>

      {/* Services Area (Fade Left Animation with Delays) */}
      <div className="services-area">
        <h2 className="section-heading" data-aos="fade-up">Our Premium Services</h2>
        <div className="services-grid">
          <div className="service-card" data-aos="fade-left" data-aos-delay="100">
            <div className="icon">❤️</div>
            <h4>Cardiology</h4>
            <p>State-of-the-art heart care and surgery facilities with top-tier specialists.</p>
          </div>
          <div className="service-card" data-aos="fade-left" data-aos-delay="200">
            <div className="icon">🧠</div>
            <h4>Neurology</h4>
            <p>Advanced diagnosis and treatment for neurological disorders and brain health.</p>
          </div>
          <div className="service-card" data-aos="fade-left" data-aos-delay="300">
            <div className="icon">✨</div>
            <h4>AI Diagnostics</h4>
            <p>Predictive health analysis using machine learning to catch diseases early.</p>
          </div>
          <div className="service-card" data-aos="fade-left" data-aos-delay="400">
            <div className="icon">💊</div>
            <h4>Smart Pharmacy</h4>
            <p>Automated prescription and inventory management for zero delays.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 SmartCare Hospital Management System. Built by Supun.</p>
      </footer>
    </div>
  );
};

// --- Routes & Pages ---
const LoginPatient = () => <div className="temp-page"><h2>Patient Portal Coming Soon...</h2></div>;
const LoginDoctor = () => <div className="temp-page"><h2>Doctor Portal Coming Soon...</h2></div>;
const LoginAdmin = () => <div className="temp-page"><h2>Admin Dashboard Coming Soon...</h2></div>;

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