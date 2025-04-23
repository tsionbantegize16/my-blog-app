// This can be a more specific component if needed for extra image-related functionality
import React from 'react';

const ImageBlock = ({ url, alt }) => {
  return <img src={url} alt={alt} className="w-full rounded-md" />;
};

export default ImageBlock;