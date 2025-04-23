import React from 'react';
import BlogPageLayout from './BlogPageLayout';
import BlogPostList from './BlogPostList';
import BlogSettings from './BlogSettings';

const BlogPage = () => {
  // Placeholder data for now
  const posts = [
    { id: 1, title: 'First Blog Post', excerpt: 'This is the first blog post excerpt.', featuredImage: 'https://via.placeholder.com/400/0000FF/808080?Text=FirstPost' },
    { id: 2, title: 'Second Blog Post', excerpt: 'An interesting second post.', featuredImage: 'https://via.placeholder.com/400/FF0000' },
    { id: 3, title: 'Third Blog Post', excerpt: 'More content for the third one.', featuredImage: 'https://via.placeholder.com/400/00FF00' },
  ];
  const settings = {
    layout: 'list',
    postsPerPage: 10,
  };

  const handleLayoutChange = (newLayout) => {
    console.log('Layout changed to:', newLayout);
    // In a real app, you'd update the state and potentially fetch data again
  };

  const handleSettingsChange = (newSettings) => {
    console.log('Settings changed:', newSettings);
    // In a real app, you'd update the state and potentially fetch data again
  };

  return (
    <div className="container mx-auto py-8">
      <BlogSettings settings={settings} onSettingsChange={handleSettingsChange} onLayoutChange={handleLayoutChange} />
      <BlogPageLayout layout={settings.layout} posts={posts}>
        <BlogPostList posts={posts} layout={settings.layout} />
      </BlogPageLayout>
    </div>
  );
};

export default BlogPage;