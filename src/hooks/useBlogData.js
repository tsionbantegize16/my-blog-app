import { useState, useEffect } from 'react';

function useBlogData(postId = null) {
  const [posts, setPosts] = useState(null);
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      setLoading(true);
      setError(null);
      try {
        // Replace this with your actual API endpoint
        const apiUrl = postId ? `/api/posts/${postId}` : '/api/posts';
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (postId) {
          setPost(data);
        } else {
          setPosts(data);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogData();
  }, [postId]);

  return { posts, post, loading, error };
}

export default useBlogData;