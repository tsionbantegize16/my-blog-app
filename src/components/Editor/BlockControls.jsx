import React from 'react';
import Button from '../UI/Button';

const BlockControls = () => {
  return (
    <div className="mt-4 border-t pt-4">
      <h3 className="text-lg font-semibold mb-2">Add Content Block</h3>
      <div className="space-x-2">
        <Button>Text</Button>
        <Button>Image</Button>
        <Button>Video</Button>
        {/* Add more block types */}
      </div>
      {/* Implement logic to dynamically add and manage content blocks */}
    </div>
  );
};

export default BlockControls;