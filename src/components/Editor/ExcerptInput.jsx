import React from 'react';

const ExcerptInput = ({ value, onChange }) => {
  return (
    <div className="mb-4">
      <label htmlFor="excerpt" className="block text-gray-700 text-sm font-bold mb-2">Excerpt</label>
      <textarea
        id="excerpt"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default ExcerptInput;