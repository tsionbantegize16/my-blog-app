import React from 'react';
import BlogPageLayout from './BlogPageLayout';
import BlogPostList from './BlogPostList';
import BlogSettings from './BlogSettings';
import { useBlogData } from '../../hooks/useBlogData';

const BlogPage = () => {
  const { posts, loading, error, settings, updateSettings } = useBlogData();

  const handleLayoutChange = (newLayout) => {
    updateSettings({ ...settings, layout: newLayout });
  };

  const handleSettingsChange = (newSettings) => {
    updateSettings(newSettings);
  };

  if (loading) {
    return <div>Loading blog posts...</div>;
  }

  if (error) {
    return <div>Error loading blog posts: {error.message}</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <BlogSettings settings={settings} onSettingsChange={handleSettingsChange} onLayoutChange={handleLayoutChange} />
      <BlogPageLayout layout={settings.layout}>
        <BlogPostList posts={posts} layout={settings.layout} />
      </BlogPageLayout>
    </div>
  );
};

export default BlogPage;