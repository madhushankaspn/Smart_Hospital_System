import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>🏥 Smart Hospital</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/register">Register Patient</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;