import React from 'react';

const BlogPageLayout = ({ layout, children }) => {
  return (
    <div className={`mt-6 ${layout === 'grid' ? '' : ''}`}>
      {children}
    </div>
  );
};

export default BlogPageLayout;