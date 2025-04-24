import React from 'react';

const BlogSettings = ({ settings, onSettingsChange, onLayoutChange }) => {
  const handleLayoutChange = (event) => {
    onLayoutChange(event.target.value);
  };

  return (
    <div className="mb-4 flex items-center space-x-4">
      <div>
        <label htmlFor="layout" className="mr-2">Layout:</label>
        <select
          id="layout"
          value={settings.layout}
          onChange={handleLayoutChange}
          className="border rounded py-1 px-2"
        >
          <option value="list">List</option>
          <option value="grid">Grid</option>
        </select>
      </div>
      {/* Add more settings controls here later */}
    </div>
  );
};

export default BlogSettings;