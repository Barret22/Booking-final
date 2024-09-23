
import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ showHotelsLink }) => {
  return (
    <header className="header">
      <div className="logo">
        <span className="logo-circle"></span> Booking
      </div>
      <nav>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        {showHotelsLink && <Link to="/hotels" className="nav-link">Hotels</Link>} {}
      </nav>
    </header>
  );
};

export default Header;
