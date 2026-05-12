import { useState } from 'react';
import axios from 'axios';
import './App.css'; // අපි ලස්සන කරන්න මේකට CSS ටිකක් පස්සේ දාමු

function App() {
  const [patient, setPatient] = useState({
    name: '', email: '', phone: '', bloodGroup: '', address: ''
  });

  const handleChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // අපේ Spring Boot Backend එකට කතා කරන තැන
      const response = await axios.post('http://localhost:8080/api/users/patient', patient);
      alert('Patient Registered Successfully! 🎉');
      console.log(response.data);
      // සේව් වුණාට පස්සේ ෆෝම් එක හිස් කරනවා
      setPatient({ name: '', email: '', phone: '', bloodGroup: '', address: '' }); 
    } catch (error) {
      console.error("Error saving patient:", error);
      alert('Failed to register patient. Please check the console.');
    }
  };

  return (
    <div className="container">
      <h2>Smart Hospital: Patient Registration</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" value={patient.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email Address" value={patient.email} onChange={handleChange} required />
        <input type="text" name="phone" placeholder="Phone Number" value={patient.phone} onChange={handleChange} required />
        <input type="text" name="bloodGroup" placeholder="Blood Group (e.g., O+)" value={patient.bloodGroup} onChange={handleChange} required />
        <input type="text" name="address" placeholder="Home Address" value={patient.address} onChange={handleChange} required />
        
        <button type="submit">Register Patient</button>
      </form>
    </div>
  );
}

export default App;