import React from 'react';

const Footer = () => {
  return (
    <footer style={{ padding: '20px', backgroundColor: '#f1f1f1', textAlign: 'center' }}>
      <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      <nav>
        <a href="/privacy-policy" style={{ margin: '0 10px' }}>Privacy Policy</a>
        <a href="/terms-of-service" style={{ margin: '0 10px' }}>Terms of Service</a>
      </nav>
    </footer>
  );
};

export default Footer;
