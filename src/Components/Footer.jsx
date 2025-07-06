import React from 'react';
import '../Styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Muaaz Maniyar. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
