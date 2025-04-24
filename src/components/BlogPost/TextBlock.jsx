import React from 'react';

function TextBlock({ data }) {
  return (
    <div className="mb-4 text-gray-800">
      {data.text.split('\n').map((paragraph, index) => (
        <p key={index} className="mb-2">{paragraph}</p>
      ))}
    </div>
  );
}

export default TextBlock;