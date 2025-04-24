import React from 'react';
import { Link } from 'react-router-dom';

function BlogPostPreview({ post }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {post.imageUrl && (
        <img className="w-full h-48 object-cover" src={post.imageUrl} alt={post.title} />
      )}
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          <Link to={`/blog/${post.id}`}>{post.title}</Link>
        </h2>
        <p className="text-gray-700 text-sm mb-4">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <span className="text-gray-500 text-xs">{post.author}</span>
          <span className="text-gray-500 text-xs">{new Date(post.date).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}

export default BlogPostPreview;