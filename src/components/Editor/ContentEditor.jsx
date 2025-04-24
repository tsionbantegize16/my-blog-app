import React from 'react';

function ContentEditor({ initialContent = '', onContentChange }) {
  return (
    <div className="mb-4">
      <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-2">
        Content:
      </label>
      <textarea
        id="content"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={initialContent}
        onChange={(e) => onContentChange(e.target.value)}
        placeholder="Write your content here..."
        rows="8"
      ></textarea>
      {/* You might want to replace this with a more advanced rich text editor */}
    </div>
  );
}

export default ContentEditor;