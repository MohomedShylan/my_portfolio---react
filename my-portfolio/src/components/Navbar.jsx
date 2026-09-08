import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <a href="/#home">
          <img src="/logo.png" alt="Portfolio Logo" className="nav-logo-img" />
        </a>
      </div>
      
      {/* Mobile Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><a href="/#home" onClick={() => setIsOpen(false)}>Home</a></li>
        <li><a href="/#about" onClick={() => setIsOpen(false)}>About</a></li>
        <li><a href="/#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
        <li><a href="/#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;