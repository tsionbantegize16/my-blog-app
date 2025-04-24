import React from 'react';
import { Link } from 'react-router-dom';

const VibrantBlogHomePage = () => {
  const theme = {
    coopBlue: "#00adef",
    coopBlueHover: "#0086ba",
    coopOrange: "#E38524",
    textColor: "#333333",
    backgroundColor: "#f8f8f8",
    headingColor: "#222222",
    accentBackgroundColor: "#e0f7fa", // Light blueish background for sections
  };

  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundColor: theme.backgroundColor }}>
      {/* Fullscreen Header with Coop Blue */}
      <header className="relative py-20 text-center text-white bg-black bg-opacity-70">
        <div className="container mx-auto px-6">
          <h1 className="text-6xl font-extrabold mb-8" style={{ color: theme.coopBlue }}>
            Exploring the Art of Living Well
          </h1>
          <p className="text-xl mb-10">
            A personal journey through inspiring design, thoughtful living, and creative expressions.
          </p>
          <Link
            to="/about"
            className="inline-block py-3 px-8 rounded-full text-lg font-semibold hover:shadow-lg transition-shadow duration-300"
            style={{ backgroundColor: theme.coopOrange, color: 'white', ':hover': { backgroundColor: theme.coopOrange } }}
          >
            Meet the Author
          </Link>
        </div>
      </header>

      <main className="py-16">
        <div className="container mx-auto px-6">
          {/* Featured Story with Coop Orange Accent */}
          <section className="mb-16 p-10 rounded-lg shadow-xl" style={{ backgroundColor: theme.accentBackgroundColor }}>
            <h2 className="text-3xl font-bold mb-8" style={{ color: theme.headingColor }}>
              Today's Spotlight
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <img
                src="https://images.unsplash.com/photo-1556911238-c8733575314c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGxpdmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                alt="Featured Living Space"
                className="rounded-md shadow-md"
              />
              <div>
                <h3 className="text-2xl font-semibold mb-4" style={{ color: theme.coopOrange }}>
                  Creating a Sanctuary in Your Own Home
                </h3>
                <p className="text-gray-700 mb-6">
                  Reflections on designing spaces that nurture well-being and offer a peaceful retreat from the everyday.
                </p>
                <Link
                  to="/post/home-sanctuary"
                  className="inline-block text-blue-500 hover:underline font-semibold"
                >
                  Dive Into the Story
                </Link>
              </div>
            </div>
          </section>

          {/* More Blog Posts with Coop Blue Highlights */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8" style={{ color: theme.headingColor }}>
              Recent Explorations
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
                    The Foundational Principles of Timeless Design
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Exploring the core elements that make a design endure and inspire.
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
                    Curating Comfortable and Stylish Furniture
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    My personal guide to selecting pieces that blend aesthetics and functionality.
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
                    Adding Personality with Unique Home Decor
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Ideas for incorporating decorative elements that reflect your individual style.
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
                    More Inspiration Coming Soon...
                  </h3>
                  <p className="text-gray-600 text-sm text-center">
                    Stay tuned for more stories and insights on creating beautiful and meaningful spaces.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Categories with Coop Orange Accents */}
          <section className="mb-12 p-10 rounded-lg shadow-lg" style={{ backgroundColor: theme.accentBackgroundColor }}>
            <h2 className="text-2xl font-bold mb-8" style={{ color: theme.headingColor }}>
              Explore by Category
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
              Stay Connected!
            </h2>
            <p className="text-white text-lg mb-8">
              Receive exclusive insights, design tips, and the latest blog posts directly in your inbox.
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

export default VibrantBlogHomePage;