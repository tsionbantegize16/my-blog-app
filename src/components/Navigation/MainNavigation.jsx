import React from 'react';
import { Link } from 'react-router-dom';

function MainNavigation({ backgroundColor = '#00adef', textColor = 'white' }) {
  return (
    <nav className="shadow-md py-4" style={{ backgroundColor: backgroundColor }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold" style={{ color: textColor }}>
          My Blog
        </Link>
        <div className="space-x-4">
          <Link to="/" className="" style={{ color: textColor, ':hover': { color: 'lightgray' } }}>
            Home
          </Link>
          <Link to="/admin/create" className="font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" style={{ backgroundColor: 'white', color: backgroundColor, ':hover': { backgroundColor: 'lightgray' } }}>
            Create Post
          </Link>
          {/* Add more navigation links as needed */}
        </div>
      </div>
    </nav>
  );
}

export default MainNavigation;
