import React, { useState } from 'react';
import TitleInput from './TitleInput';
import ExcerptInput from './ExcerptInput';
import ContentEditor from './ContentEditor';
import PublishSettings from './PublishSettings';
import Button from '../UI/Button';

const Editor = () => {
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [publishDate, setPublishDate] = useState(new Date());

  const handleSave = () => {
    console.log('Saving post:', { title, excerpt, content, publishDate });
    // In a real application, you would send this data to your backend
  };

  return (
    <div className="bg-white rounded-md shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Create/Edit Blog Post</h2>
      <TitleInput label="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <ExcerptInput label="Excerpt" value={excerpt} onChange={(e) => setExcerpt(e.target.value)} />
      <div className="mb-4">
        <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-2">Content</label>
        <ContentEditor value={content} onChange={setContent} />
      </div>
      <PublishSettings publishDate={publishDate} onDateChange={(date) => setPublishDate(date)} />
      <div className="mt-4">
        <Button onClick={handleSave} className="mr-2">Save Draft</Button>
        <Button onClick={handleSave} primary>Publish</Button>
      </div>
    </div>
  );
};

export default Editor;