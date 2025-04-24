import React from 'react';
import Editor from '../components/Editor/Editor';

function CreateBlogPostPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Create New Blog Post</h1>
      <Editor />
    </div>
  );
}

export default CreateBlogPostPage;