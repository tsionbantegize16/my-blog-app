import React from 'react';
import Input from '../UI/Input';

const SeoSettings = () => {
  return (
    <div className="border-t pt-4 mt-4">
      <h3 className="text-lg font-semibold mb-2">SEO Settings</h3>
      <Input label="SEO Title" id="seoTitle" type="text" />
      <div className="mb-4">
        <label htmlFor="seoDescription" className="block text-gray-700 text-sm font-bold mb-2">SEO Description</label>
        <textarea
          id="seoDescription"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
    </div>
  );
};

export default SeoSettings;