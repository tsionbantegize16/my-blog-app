import React from 'react';
import MainNavigation from '../Navigation/MainNavigation';
import Footer from './Footer'; // Assuming you'll have a separate Footer.jsx file

function DefaultLayout({ children }) {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <MainNavigation backgroundColor="#00adef" textColor="white" /> {/* Apply styles to MainNavigation */}
      <main className="flex-grow container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
