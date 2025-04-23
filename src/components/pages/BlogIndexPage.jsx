import React from 'react';
import BlogPage from '../components/BlogPage/BlogPage';
import DefaultLayout from '../components/Layout/DefaultLayout';

const BlogIndexPage = () => {
  return (
    <DefaultLayout>
      <BlogPage />
    </DefaultLayout>
  );
};

export default BlogIndexPage;