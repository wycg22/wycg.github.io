// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/projects">Projects</Link>
      </div>
      <div className="social-links">
        <a href="https://github.com/wycg22"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/william-wang-6a4500279/"><FaLinkedin /></a>
      </div>
    </nav>
  );
};

export default Navbar;