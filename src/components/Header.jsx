import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav>
        <div className="logo">NFT Vibes</div>
        
        {/* 🍔 Hamburger Icon */}
        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* 📌 Navigation Menu */}
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
