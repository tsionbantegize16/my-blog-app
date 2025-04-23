import React from 'react';

const PublishSettings = ({ publishDate, onDateChange }) => {
  const handleDateChange = (event) => {
    onDateChange(new Date(event.target.value));
  };

  return (
    <div className="mb-4">
      <label htmlFor="publishDate" className="block text-gray-700 text-sm font-bold mb-2">Publish Date</label>
      <input
        type="date"
        id="publishDate"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={publishDate.toISOString().split('T')[0]}
        onChange={handleDateChange}
      />
    </div>
  );
};

export default PublishSettings;