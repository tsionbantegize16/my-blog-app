import React from 'react';
import BlogPostPreview from './BlogPostPreview';

const BlogPostList = ({ posts, layout }) => {
  return (
    <div className={layout === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' : 'space-y-6'}>
      {posts.map((post) => (
        <BlogPostPreview key={post.id} post={post} layout={layout} />
      ))}
    </div>
  );
};

export default BlogPostList;