import React from 'react';
import './Header.css'; // Buat file CSS untuk styling header
import universityLogo from '../assets/pictures/logo/logo.webp';

function Header() {
  return (
    <header className="header">
      <img src={universityLogo} alt="University Logo" className="university-logo" />
      <h1>Selamat datang di portal badan penjaminan mutu Universitas Gresik</h1>
    </header>
  );
}

export default Header;