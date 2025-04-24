import React from 'react';

function PublishSettings({ publishDate, onPublishDateChange, isPublished, onIsPublishedChange }) {
  return (
    <div className="mt-6 border-t pt-4">
      <h3 className="text-lg font-semibold text-gray-700 mb-2">Publish Settings</h3>
      <div className="mb-2">
        <label htmlFor="publishDate" className="block text-gray-700 text-sm font-bold mb-1">
          Publish Date:
        </label>
        <input
          type="date"
          id="publishDate"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={publishDate.toISOString().slice(0, 10)}
          onChange={(e) => onPublishDateChange(new Date(e.target.value))}
        />
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          id="isPublished"
          className="mr-2 leading-tight"
          checked={isPublished}
          onChange={(e) => onIsPublishedChange(e.target.checked)}
        />
        <label htmlFor="isPublished" className="text-gray-700 text-sm font-bold">
          Published
        </label>
      </div>
    </div>
  );
}

export default PublishSettings;