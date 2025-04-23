import React from 'react';
import Input from '../UI/Input';

const TitleInput = ({ value, onChange }) => {
  return (
    <Input
      label="Title"
      id="title"
      type="text"
      value={value}
      onChange={onChange}
    />
  );
};

export default TitleInput;