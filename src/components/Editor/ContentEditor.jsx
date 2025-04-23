import React from 'react';

const ContentEditor = ({ value, onChange }) => {
  // In a real application, you would integrate a rich text editor here
  return (
    <textarea
      id="content"
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-48"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Enter your blog content here..."
    />
  );
};

export default ContentEditor;