import React from 'react';
import { Link } from 'react-router-dom';

const MainNavigation = () => {
  return (
    <nav className="bg-blue-500 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-white text-lg font-semibold">My Blog</Link>
        <div>
          <Link to="/blog" className="text-white hover:text-blue-200 mr-4">Blog</Link>
          <Link to="/create" className="bg-white text-blue-500 hover:bg-blue-200 hover:text-white font-semibold py-2 px-4 rounded">Create Post</Link>
        </div>
      </div>
    </nav>
  );
};

export default MainNavigation;