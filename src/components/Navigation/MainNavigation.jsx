import React from 'react';
import { Link } from 'react-router-dom';

function MainNavigation() {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-gray-800">
          My Blog
        </Link>
        <div className="space-x-4">
          <Link to="/" className="text-gray-600 hover:text-gray-800">
            Home
          </Link>
          <Link to="/admin/create" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Create Post
          </Link>
          {/* Add more navigation links as needed */}
        </div>
      </div>
    </nav>
  );
}

export default MainNavigation;