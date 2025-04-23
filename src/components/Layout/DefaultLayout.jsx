import React from 'react';
import MainNavigation from '../Navigation/MainNavigation';

const DefaultLayout = ({ children }) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <MainNavigation />
      <main className="py-8">
        {children}
      </main>
      <footer className="bg-gray-300 text-center py-4 text-gray-600">
        <p>&copy; {new Date().getFullYear()} My Awesome Blog</p>
      </footer>
    </div>
  );
};

export default DefaultLayout;