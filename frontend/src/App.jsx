import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

// --- Premium Home Page Component ---
const Home = () => {
  const [bgIndex, setBgIndex] = useState(0);
  
  // High-Quality Hospital Images for the Background Slider
  const images = [
    "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1538108149393-cebb47ac195a?q=80&w=2000&auto=format&fit=crop"
  ];

  // Image Slider Logic (Changes every 5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pro-home" style={{ backgroundImage: `url(${images[bgIndex]})` }}>
      <div className="hero-overlay">
        
        {/* Navbar */}
        <nav className="pro-navbar">
          <div className="logo">
            <h2>🏥 SmartCare HMS</h2>
          </div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/about">About Us</Link>
            <Link to="/ai-prediction" className="ai-badge">✨ AI Health Predictor</Link>
            
            {/* Roles Dropdown for Login/Register */}
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

        {/* Hero Section */}
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