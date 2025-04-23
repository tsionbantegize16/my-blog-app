import React from 'react';
import { useParams } from 'react-router-dom';
import BlogPost from '../components/BlogPost/BlogPost';
import DefaultLayout from '../components/Layout/DefaultLayout';

const BlogPostPage = () => {
  const { id } = useParams(); // Get the post ID from the URL

  // In a real application, you would fetch the specific blog post data
  // based on the ID. For now, we'll just render the BlogPost component.

  return (
    <DefaultLayout>
      <BlogPost postId={id} />
    </DefaultLayout>
  );
};

export default BlogPostPage;