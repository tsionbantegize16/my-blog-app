import React from 'react';

function ExcerptInput({ excerpt, onExcerptChange }) {
  return (
    <div className="mb-4">
      <label htmlFor="excerpt" className="block text-gray-700 text-sm font-bold mb-2">
        Excerpt:
      </label>
      <textarea
        id="excerpt"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={excerpt}
        onChange={(e) => onExcerptChange(e.target.value)}
        placeholder="Enter a short excerpt for your post"
        rows="3"
      ></textarea>
    </div>
  );
}

export default ExcerptInput;