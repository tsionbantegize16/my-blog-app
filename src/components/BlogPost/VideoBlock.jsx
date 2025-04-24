import React from 'react';

function VideoBlock({ data }) {
  return (
    <div className="mb-4 rounded-md overflow-hidden shadow-md aspect-w-16 aspect-h-9">
      <iframe
        className="w-full h-full"
        src={data.videoUrl}
        title="Video Player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoBlock;