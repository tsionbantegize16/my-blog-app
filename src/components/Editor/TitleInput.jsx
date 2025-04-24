import React from 'react';

function TitleInput({ title, onTitleChange }) {
  return (
    <div className="mb-4">
      <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
        Title:
      </label>
      <input
        type="text"
        id="title"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={title}
        onChange={(e) => onTitleChange(e.target.value)}
        placeholder="Enter blog post title"
      />
    </div>
  );
}

export default TitleInput;