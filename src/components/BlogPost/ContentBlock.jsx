import React from 'react';

const ContentBlock = ({ type, data }) => {
  switch (type) {
    case 'text':
      return <p className="py-2">{data.text}</p>;
    case 'image':
      return <img src={data.url} alt={data.alt} className="w-full rounded-md" />;
    case 'video':
      return (
        <div className="aspect-w-16 aspect-h-9">
          <iframe src={data.url} title="Video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      );
    // Add more cases for other block types
    default:
      return null;
  }
};

export default ContentBlock;