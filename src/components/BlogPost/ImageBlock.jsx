import React from 'react';

function ImageBlock({ data }) {
  return (
    <div className="mb-4 rounded-md overflow-hidden shadow-md">
      <img className="w-full" src={data.imageUrl} alt={data.altText} />
      {data.caption && <p className="text-sm text-gray-500 p-2">{data.caption}</p>}
    </div>
  );
}

export default ImageBlock;