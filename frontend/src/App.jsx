import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar';
import './App.css';

// --- 1. Home Page (මුල් පිටුව) ---
const Home = () => (
  <div className="container">
    <h2>🏥 Welcome to Smart Hospital</h2>
    <p style={{textAlign: 'center'}}>We provide the best healthcare services. Select an option from the menu above.</p>
  </div>
);

// --- 2. Login Page (ලොග් වෙන පිටුව) ---
const Login = () => (
  <div className="container">
    <h2>🔑 System Login</h2>
    <p style={{textAlign: 'center'}}>Doctor and Admin login coming soon...</p>
  </div>
);

// --- 3. Registration Page (ඔයා කලින් හදපු සුපිරි Form එක) ---
const Register = () => {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({ name: '', email: '', phone: '', bloodGroup: '', address: '' });

  const fetchPatients = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/users');
      setPatients(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => { fetchPatients(); }, []);

  const handleChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/users/patient', patient);
      alert('Patient Registered Successfully! 🎉');
      setPatient({ name: '', email: '', phone: '', bloodGroup: '', address: '' });
      fetchPatients(); 
    } catch (error) {
      alert('Failed to register patient.');
    }
  };

  return (
    <div className="container">
      <h2>📝 Patient Registration</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" value={patient.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email Address" value={patient.email} onChange={handleChange} required />
        <input type="text" name="phone" placeholder="Phone Number" value={patient.phone} onChange={handleChange} required />
        <input type="text" name="bloodGroup" placeholder="Blood Group" value={patient.bloodGroup} onChange={handleChange} required />
        <input style={{gridColumn: 'span 2'}} type="text" name="address" placeholder="Address" value={patient.address} onChange={handleChange} required />
        <button type="submit">Register New Patient</button>
      </form>

      <h3>Registered Patients</h3>
      <table>
        <thead>
          <tr><th>Name</th><th>Email</th><th>Phone</th><th>Blood Group</th></tr>
        </thead>
        <tbody>
          {patients.map((p) => (
            <tr key={p.id}><td>{p.name}</td><td>{p.email}</td><td>{p.phone}</td><td>{p.bloodGroup}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// --- ප්‍රධාන App එක (Navbar සහ Routes එකතු කරලා) ---
function App() {
  return (
    <div>
      <Navbar />
      {/* මේකෙන් තමයි ලින්ක් එකට අනුව අදාළ පිටුව පෙන්වන්නේ */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;