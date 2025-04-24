import React, { useState } from 'react';
import TitleInput from './TitleInput';
import ExcerptInput from './ExcerptInput';
import ContentEditor from './ContentEditor';
import PublishSettings from './PublishSettings';
// ... other editor components

function Editor() {
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [contentBlocks, setContentBlocks] = useState([]);
  const [publishDate, setPublishDate] = useState(new Date());
  const [isPublished, setIsPublished] = useState(false);

  const handleAddBlock = (type) => {
    setContentBlocks([...contentBlocks, { type, data: {} }]);
  };

  const handleUpdateBlock = (index, newData) => {
    const newBlocks = [...contentBlocks];
    newBlocks[index].data = newData;
    setContentBlocks(newBlocks);
  };

  const handleRemoveBlock = (index) => {
    const newBlocks = contentBlocks.filter((_, i) => i !== index);
    setContentBlocks(newBlocks);
  };

  const handleSave = () => {
    // Implement your save logic here, including sending data to the backend
    console.log({ title, excerpt, contentBlocks, publishDate, isPublished });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <TitleInput title={title} onTitleChange={setTitle} />
      <ExcerptInput excerpt={excerpt} onExcerptChange={setExcerpt} />

      <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">Post Content</h2>
      {contentBlocks.map((block, index) => (
        <div key={index} className="mb-4 border rounded p-4">
          {block.type === 'text' && (
            <ContentEditor
              initialContent={block.data.text}
              onContentChange={(text) => handleUpdateBlock(index, { text })}
            />
          )}
          {block.type === 'image' && (
            <div>
              <label htmlFor={`imageUrl-${index}`} className="block text-gray-700 text-sm font-bold mb-2">
                Image URL:
              </label>
              <input
                type="text"
                id={`imageUrl-${index}`}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={block.data.imageUrl || ''}
                onChange={(e) => handleUpdateBlock(index, { ...block.data, imageUrl: e.target.value })}
              />
              <label htmlFor={`altText-${index}`} className="block text-gray-700 text-sm font-bold mt-2 mb-2">
                Alt Text:
              </label>
              <input
                type="text"
                id={`altText-${index}`}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={block.data.altText || ''}
                onChange={(e) => handleUpdateBlock(index, { ...block.data, altText: e.target.value })}
              />
              <label htmlFor={`caption-${index}`} className="block text-gray-700 text-sm font-bold mt-2 mb-2">
                Caption (Optional):
              </label>
              <input
                type="text"
                id={`caption-${index}`}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={block.data.caption || ''}
                onChange={(e) => handleUpdateBlock(index, { ...block.data, caption: e.target.value })}
              />
            </div>
          )}
          {block.type === 'video' && (
            <div>
              <label htmlFor={`videoUrl-${index}`} className="block text-gray-700 text-sm font-bold mb-2">
                Video URL:
              </label>
              <input
                type="text"
                id={`videoUrl-${index}`}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={block.data.videoUrl || ''}
                onChange={(e) => handleUpdateBlock(index, { videoUrl: e.target.value })}
              />
            </div>
          )}
          {/* Add more block type editors here */}
          <button
            type="button"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mt-2 focus:outline-none focus:shadow-outline"
            onClick={() => handleRemoveBlock(index)}
          >
            Remove Block
          </button>
        </div>
      ))}

      <div className="mt-4">
        <button
          type="button"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
          onClick={() => handleAddBlock('text')}
        >
          Add Text Block
        </button>
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
          onClick={() => handleAddBlock('image')}
        >
          Add Image Block
        </button>
        <button
          type="button"
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => handleAddBlock('video')}
        >
          Add Video Block
        </button>
        {/* Add buttons for other block types */}
      </div>

      <PublishSettings
        publishDate={publishDate}
        onPublishDateChange={setPublishDate}
        isPublished={isPublished}
        onIsPublishedChange={setIsPublished}
      />

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6 focus:outline-none focus:shadow-outline"
        onClick={handleSave}
      >
        Save Post
      </button>
    </div>
  );
}

export default Editor;