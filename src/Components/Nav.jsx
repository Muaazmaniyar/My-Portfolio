import React from 'react';
import '../Styles/nav.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Muaaz.</div>
      <ul className="navbar-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;