import React from 'react';
import Select from '../UI/Select';

const CategorySelector = () => {
  const categories = [
    { value: 'technology', label: 'Technology' },
    { value: 'travel', label: 'Travel' },
    { value: 'food', label: 'Food' },
  ];
  return (
    <Select
      label="Category"
      id="category"
      options={categories}
      // Add value and onChange props when you manage state
    />
  );
};

export default CategorySelector;