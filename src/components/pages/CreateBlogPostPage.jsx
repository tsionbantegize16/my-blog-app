import React from 'react';
import Editor from '../components/Editor/Editor';
import DefaultLayout from '../components/Layout/DefaultLayout';

const CreateBlogPostPage = () => {
  return (
    <DefaultLayout>
      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-semibold mb-4">Create New Blog Post</h2>
        <Editor />
      </div>
    </DefaultLayout>
  );
};

export default CreateBlogPostPage;