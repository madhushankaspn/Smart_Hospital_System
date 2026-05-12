import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [patients, setPatients] = useState([]); // රෝගීන් ලැයිස්තුව තියාගන්න
  const [patient, setPatient] = useState({
    name: '', email: '', phone: '', bloodGroup: '', address: ''
  });

  // Database එකේ ඉන්න රෝගීන්ව ගේන Function එක
  const fetchPatients = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/users');
      setPatients(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // ඇප් එක පටන් ගද්දීම දත්ත ලෝඩ් කරනවා
  useEffect(() => {
    fetchPatients();
  }, []);

  const handleChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/users/patient', patient);
      alert('Patient Registered Successfully! 🎉');
      setPatient({ name: '', email: '', phone: '', bloodGroup: '', address: '' });
      fetchPatients(); // අලුතින් එක්කළ කෙනා වහාම Table එකේ පෙන්වන්න
    } catch (error) {
      alert('Failed to register patient.');
    }
  };

  return (
    <div className="container">
      <h2>🏥 Smart Hospital Management</h2>
      
      {/* Registration Form */}
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" value={patient.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email Address" value={patient.email} onChange={handleChange} required />
        <input type="text" name="phone" placeholder="Phone Number" value={patient.phone} onChange={handleChange} required />
        <input type="text" name="bloodGroup" placeholder="Blood Group" value={patient.bloodGroup} onChange={handleChange} required />
        <input style={{gridColumn: 'span 2'}} type="text" name="address" placeholder="Address" value={patient.address} onChange={handleChange} required />
        <button type="submit">Register New Patient</button>
      </form>

      {/* Patients Table */}
      <h3>Registered Patients</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Blood Group</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.email}</td>
              <td>{p.phone}</td>
              <td>{p.bloodGroup}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;