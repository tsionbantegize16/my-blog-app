import React from 'react';
import TextBlock from './TextBlock';
import ImageBlock from './ImageBlock';
import VideoBlock from './VideoBlock';

const ContentBlock = ({ data }) => {
  // Render different block types based on data.type
  switch (data.type) {
    case 'text':
      return <TextBlock data={data} />;
    case 'image':
      return <ImageBlock data={data} />;
    case 'video':
      return <VideoBlock data={data} />;
    default:
      return <p>Unknown content block</p>;
  }
};

export default ContentBlock;