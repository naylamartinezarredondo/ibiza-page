import React from 'react';
import logo from '../assets/logo.png';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <img src={logo} alt="Ibiza Logo" className="logo" />
        <h1>Capturamos tus momentos más importantes</h1>
        <a
          href="https://calendar.app.google/eYKy4XheEeKhhaCX7"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-reserva"
        >
          Reserva tu sesión
        </a>
      </div>
    </header>
  );
};

export default Header;