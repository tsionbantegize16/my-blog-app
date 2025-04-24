import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from './components/Layout/DefaultLayout';
import BlogIndexPage from './pages/BlogIndexPage';
import BlogPostPage from './pages/BlogPostPage';
import CreateBlogPostPage from './pages/CreateBlogPostPage';
import HomePage from './pages/HomePage'; // Import the new HomePage component
import AuthContext from './contexts/AuthContext'; // Assuming you have an AuthContext
import './styles/globals.css'; // Import global styles

function App() {
  // You would typically have authentication context provider here
  return (
    <AuthContext.Provider value={{ /* Your auth context values */ }}>
      <Router>
        <DefaultLayout>
          <Routes>
            <Route path="/" element={<HomePage />} /> {/* Route for the new Home Page */}
            <Route path="/blog" element={<BlogIndexPage />} /> {/* Route for your blog listing */}
            <Route path="/blog/:postId" element={<BlogPostPage />} />
            <Route path="/admin/create" element={<CreateBlogPostPage />} />
          </Routes>
        </DefaultLayout>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;