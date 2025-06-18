import React from 'react';
import './Footer.css';
import instagramLogo from '../assets/pictures/etc/instagram.webp'; // Pastikan path ini benar

function Footer() {
  const instagramUrl = 'https://www.instagram.com/bpm_unigres/'; // Ganti dengan URL Instagram BPM yang sebenarnya

  return (
    <footer className="footer">
      <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="instagram-link">
        <img src={instagramLogo} alt="Instagram Logo" className="instagram-logo" />
      </a>
      <p>Copyright 2025 BPM Universitas Gresik</p>
    </footer>
  );
}

export default Footer;