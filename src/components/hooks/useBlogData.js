import { useState, useEffect } from 'react';

export const useBlogData = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [settings, setSettings] = useState({
    layout: 'list',
    postsPerPage: 10,
  });

  useEffect(() => {
    // Replace this with your actual API call to fetch blog data
    setTimeout(() => {
      const mockPosts = [
        { id: 1, title: 'First Mock Post', excerpt: 'This is a mock excerpt.', featuredImage: 'https://via.placeholder.com/400/0000FF/FFFFFF?Text=Mock1' },
        { id: 2, title: 'Second Mock Post', excerpt: 'Another mock post here.', featuredImage: 'https://via.placeholder.com/400/FF0000/FFFFFF?Text=Mock2' },
        { id: 3, title: 'Third Mock Post', excerpt: 'Just testing things out.', featuredImage: 'https://via.placeholder.com/400/00FF00/FFFFFF?Text=Mock3' },
      ];
      setPosts(mockPosts);
      setLoading(false);
    }, 1000); // Simulate loading delay
  }, []);

  const updateSettings = (newSettings) => {
    setSettings(newSettings);
    // In a real app, you'd likely make an API call to update settings
    console.log('Updated settings:', newSettings);
  };

  return { posts, loading, error, settings, updateSettings };
};