import React from 'react';
import { Link } from 'react-router-dom'; // You'll need to install react-router-dom

const BlogPostPreview = ({ post, layout }) => {
  return (
    <div className={`bg-white rounded-md shadow-md overflow-hidden ${layout === 'grid' ? '' : 'p-4'}`}>
      {post.featuredImage && (
        <img src={post.featuredImage} alt={post.title} className="w-full h-48 object-cover" />
      )}
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
        <p className="text-gray-600 text-sm mb-3">{post.excerpt}</p>
        <Link to={`/blog/${post.id}`} className="text-blue-500 hover:underline">Read More</Link>
      </div>
    </div>
  );
};

export default BlogPostPreview;