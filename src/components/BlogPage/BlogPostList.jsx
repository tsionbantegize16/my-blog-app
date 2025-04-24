import React from 'react';
import BlogPostPreview from './BlogPostPreview';

function BlogPostList({ posts }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts && posts.map((post) => (
        <BlogPostPreview key={post.id} post={post} />
      ))}
      {!posts && <p>No posts available yet.</p>}
    </div>
  );
}

export default BlogPostList;