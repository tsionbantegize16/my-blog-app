import React from 'react';
import Input from '../UI/Input';

const AuthorProfileSettings = () => {
  return (
    <div className="border-t pt-4 mt-4">
      <h3 className="text-lg font-semibold mb-2">Author Profile</h3>
      <Input label="Author Name" id="authorName" type="text" />
      {/* Add more author profile fields like bio, image, etc. */}
    </div>
  );
};

export default AuthorProfileSettings;