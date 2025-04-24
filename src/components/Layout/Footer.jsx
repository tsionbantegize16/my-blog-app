import React from 'react';

const Footer = () => (
  <footer className="bg-gray-300 text-center py-4 text-sm text-gray-600">
    &copy; {new Date().getFullYear()} My Awesome Blog
  </footer>
);

export default Footer;