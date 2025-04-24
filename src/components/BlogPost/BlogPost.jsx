import React from 'react';
import ContentBlock from './ContentBlock';
import ImageBlock from './ImageBlock';
import TextBlock from './TextBlock';
import VideoBlock from './VideoBlock';
// Import other block types as you create them

function BlogPost({ post }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">{post.title}</h1>
      <div className="text-gray-600 mb-4">
        Published on {new Date(post.date).toLocaleDateString()} by {post.author}
      </div>
      {post.contentBlocks && post.contentBlocks.map((block, index) => {
        switch (block.type) {
          case 'text':
            return <TextBlock key={index} data={block.data} />;
          case 'image':
            return <ImageBlock key={index} data={block.data} />;
          case 'video':
            return <VideoBlock key={index} data={block.data} />;
          // Add cases for other block types
          default:
            return <ContentBlock key={index} data={block} />; // Fallback
        }
      })}
    </div>
  );
}

export default BlogPost;