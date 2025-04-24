import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/image.png'; // Import your background image

const PersonalBlogHomePage = () => {
  const theme = {
    coopBlue: "#00adef",
    coopBlueHover: "#0086ba",
    coopOrange: "#E38524",
    textColor: "#333333",
    backgroundColor: "#f8f8f8",
    headingColor: "#222222",
    accentBackgroundColor: "#e0f7fa", // Light blueish background for sections
  };

  const headerHeight = '500px'; // Define the height of the header here (adjust as needed)

  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundColor: theme.backgroundColor }}>
      {/* Fullscreen Header with Background Image */}
      <header
        className="relative text-center text-white bg-black bg-opacity-70"
        style={{
          backgroundImage: `url(${backgroundImage})`, // Set the background image
          backgroundSize: 'cover', // Fill the space
          backgroundPosition: 'center',
          height: headerHeight, // Set the height of the header
          display: 'flex', // Use flexbox to align content vertically
          flexDirection: 'column',
          justifyContent: 'center', // Center content vertically
          alignItems: 'center', // Center content horizontally
        }}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-xl mx-auto"> {/* Added a container to control text width */}

            <Link
              to="/about"
              className="inline-block py-3 px-8 rounded-full text-lg font-semibold hover:shadow-lg transition-shadow duration-300"
              style={{ backgroundColor: theme.coopOrange, color: 'white', ':hover': { backgroundColor: theme.coopOrange } }}
            >
              About Me
            </Link>
          </div>
        </div>
      </header>

      <main className="py-16">
        <div className="container mx-auto px-6">
          {/* Featured Post with Coop Orange Accent */}
          <section className="mb-16 p-10 rounded-lg shadow-xl" style={{ backgroundColor: theme.accentBackgroundColor }}>
            <h2 className="text-3xl font-bold mb-8" style={{ color: theme.headingColor }}>
              Featured Post
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <img
                src="https://www.pinterest.com/pin/191543790397531344/"
                alt="Featured Living Space"
                className="rounded-md shadow-md"
              />
              <div>
                <h3 className="text-2xl font-semibold mb-4" style={{ color: theme.coopOrange }}>
                  My Thoughts on Creating a Home Sanctuary
                </h3>
                <p className="text-gray-700 mb-6">
                  A personal reflection on how the spaces we inhabit can significantly impact our well-being and offer a peaceful escape.
                </p>
                <Link
                  to="/post/home-sanctuary"
                  className="inline-block text-blue-500 hover:underline font-semibold"
                >
                  Read My Latest Article
                </Link>
              </div>
            </div>
          </section>

          {/* More Blog Posts with Coop Blue Highlights */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8" style={{ color: theme.headingColor }}>
              Latest Blog Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Blog Post 1 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img
                  src="https://images.unsplash.com/photo-1586023492120-68a09e2b2b34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRlc2lnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                  alt="Design Principles"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-3" style={{ color: theme.coopBlue }}>
                    My Take on Timeless Design Principles
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Exploring the core elements that, in my opinion, make a design endure and continue to inspire.
                  </p>
                  <Link
                    to="/post/timeless-design"
                    className="inline-block text-blue-500 hover:underline font-semibold"
                  >
                    Read More
                  </Link>
                </div>
              </div>

              {/* Blog Post 2 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img
                  src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZ1cm5pdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                  alt="Furniture Selection"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-3" style={{ color: theme.coopBlue }}>
                    A Personal Guide to Comfortable & Stylish Furniture
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    My personal insights and recommendations for selecting furniture that blends aesthetics and practicality.
                  </p>
                  <Link
                    to="/post/furniture-guide"
                    className="inline-block text-blue-500 hover:underline font-semibold"
                  >
                    Explore the Guide
                  </Link>
                </div>
              </div>

              {/* Blog Post 3 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img
                  src="https://images.unsplash.com/photo-1513506003801-22c0822267fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGRlY29yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                  alt="Home Decor"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-3" style={{ color: theme.coopBlue }}>
                    Adding My Personal Touch with Unique Home Decor
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    My favorite ideas and tips for incorporating decorative elements that truly reflect your individual style.
                  </p>
                  <Link
                    to="/post/home-decor"
                    className="inline-block text-blue-500 hover:underline font-semibold"
                  >
                    Discover Ideas
                  </Link>
                </div>
              </div>

              {/* Add more blog posts here */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6 flex flex-col justify-center items-center h-48">
                  <h3 className="text-lg font-semibold mb-3" style={{ color: theme.coopOrange }}>
                    More Thoughts on the Way!
                  </h3>
                  <p className="text-gray-600 text-sm text-center">
                    I'm always exploring new ideas and experiences to share. Check back soon for more blog posts!
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Topics I Write About with Coop Orange Accents */}
          <section className="mb-12 p-10 rounded-lg shadow-lg" style={{ backgroundColor: theme.accentBackgroundColor }}>
            <h2 className="text-2xl font-bold mb-8" style={{ color: theme.headingColor }}>
              Topics I Write About
            </h2>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/category/design-principles"
                className="inline-block py-2 px-5 rounded-full text-sm font-semibold hover:shadow-md transition-shadow duration-200"
                style={{ backgroundColor: theme.coopOrange, color: 'white', ':hover': { backgroundColor: theme.coopOrange } }}
              >
                Design Principles
              </Link>
              <Link
                to="/category/furniture"
                className="inline-block py-2 px-5 rounded-full text-sm font-semibold hover:shadow-md transition-shadow duration-200"
                style={{ backgroundColor: theme.coopBlue, color: 'white', ':hover': { backgroundColor: theme.coopBlue } }}
              >
                Furniture
              </Link>
              <Link
                to="/category/decor"
                className="inline-block py-2 px-5 rounded-full text-sm font-semibold hover:shadow-md transition-shadow duration-200"
                style={{ backgroundColor: theme.coopOrange, color: 'white', ':hover': { backgroundColor: theme.coopOrange } }}
              >
                Home Decor
              </Link>
              <Link
                to="/category/inspiration"
                className="inline-block py-2 px-5 rounded-full text-sm font-semibold hover:shadow-md transition-shadow duration-200"
                style={{ backgroundColor: theme.coopBlue, color: 'white', ':hover': { backgroundColor: theme.coopBlue } }}
              >
                Inspiration
              </Link>
              <Link
                to="/category/lifestyle"
                className="inline-block py-2 px-5 rounded-full text-sm font-semibold hover:shadow-md transition-shadow duration-200"
                style={{ backgroundColor: theme.coopOrange, color: 'white', ':hover': { backgroundColor: theme.coopOrange } }}
              >
                Lifestyle
              </Link>
              {/* Add more categories */}
            </div>
          </section>

          {/* Newsletter Signup with Coop Blue Background */}
          <section className="p-12 rounded-lg shadow-xl text-center" style={{ backgroundColor: theme.coopBlue }}>
            <h2 className="text-3xl font-bold mb-6 text-white">
              Join My Inner Circle!
            </h2>
            <p className="text-white text-lg mb-8">
              Subscribe to my newsletter for personal updates, behind-the-scenes glimpses, and the newest blog posts delivered straight to you.
            </p>
            <div className="max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full py-3 px-6 rounded-full border-none focus:outline-none focus:ring-white text-black"
              />
              <button
                className="inline-block mt-6 py-3 px-8 rounded-full text-lg font-semibold hover:shadow-md transition-shadow duration-200"
                style={{ backgroundColor: theme.coopOrange, color: 'white', ':hover': { backgroundColor: theme.coopOrange } }}
              >
                Subscribe Now
              </button>
            </div>
          </section>
        </div>
      </main>
      {/* The footer section has been removed */}
    </div>
  );
};

export default PersonalBlogHomePage;