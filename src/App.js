import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogIndexPage from './pages/BlogIndexPage';
import BlogPostPage from './pages/BlogPostPage';
import CreateBlogPostPage from './pages/CreateBlogPostPage';
// import { AuthProvider } from './contexts/AuthContext'; // Uncomment if you implement authentication
import DefaultLayout from './components/Layout/DefaultLayout';

function App() {
  return (
    <Router>
      {/* <AuthProvider> */} {/* Uncomment if you implement authentication */}
        <Routes>
          <Route path="/" element={<DefaultLayout><BlogIndexPage /></DefaultLayout>} />
          <Route path="/blog" element={<DefaultLayout><BlogIndexPage /></DefaultLayout>} />
          <Route path="/blog/:id" element={<DefaultLayout><BlogPostPage /></DefaultLayout>} />
          <Route path="/create" element={<DefaultLayout><CreateBlogPostPage /></DefaultLayout>} />
        </Routes>
      {/* </AuthProvider> */} {/* Uncomment if you implement authentication */}
    </Router>
  );
}

export default App;