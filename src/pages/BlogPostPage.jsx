import React from 'react';
import { useParams } from 'react-router-dom';
import useBlogData from '../hooks/useBlogData'; // Assuming this hook can fetch a single post by ID
import BlogPost from '../components/BlogPost/BlogPost';

function BlogPostPage() {
  const { postId } = useParams();
  const { post, loading, error } = useBlogData(postId); // Fetch specific post

  if (loading) {
    return <p className="text-center py-8">Loading post...</p>;
  }

  if (error) {
    return <p className="text-red-500 text-center py-8">Error loading post: {error}</p>;
  }

  if (!post) {
    return <p className="text-center py-8">Post not found.</p>;
  }

  return (
    <div>
      <BlogPost post={post} />
    </div>
  );
}

export default BlogPostPage;