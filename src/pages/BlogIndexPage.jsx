import React from 'react';
import BlogPostList from '../components/BlogPage/BlogPostList';
import useBlogData from '../hooks/useBlogData'; // Assuming this hook fetches blog posts

function BlogIndexPage() {
  const { posts, loading, error } = useBlogData();

  if (loading) {
    return <p className="text-center py-8">Loading posts...</p>;
  }

  if (error) {
    return <p className="text-red-500 text-center py-8">Error loading posts: {error}</p>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Latest Blog Posts</h1>
      <BlogPostList posts={posts} />
    </div>
  );
}

export default BlogIndexPage;