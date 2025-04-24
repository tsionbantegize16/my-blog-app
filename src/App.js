import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from './components/Layout/DefaultLayout';
import BlogIndexPage from './pages/BlogIndexPage';
import BlogPostPage from './pages/BlogPostPage';
import CreateBlogPostPage from './pages/CreateBlogPostPage';
import AuthContext from './contexts/AuthContext'; // Assuming you have an AuthContext
import './styles/globals.css'; // Import global styles

function App() {
  // You would typically have authentication context provider here
  return (
    <AuthContext.Provider value={{ /* Your auth context values */ }}>
      <Router>
        <DefaultLayout>
          <Routes>
            <Route path="/" element={<BlogIndexPage />} />
            <Route path="/blog/:postId" element={<BlogPostPage />} />
            <Route path="/admin/create" element={<CreateBlogPostPage />} />
          </Routes>
        </DefaultLayout>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;