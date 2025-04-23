import React from 'react';

const VideoBlock = ({ url }) => {
  return (
    <div className="aspect-w-16 aspect-h-9">
      <iframe src={url} title="Video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  );
};

export default VideoBlock;