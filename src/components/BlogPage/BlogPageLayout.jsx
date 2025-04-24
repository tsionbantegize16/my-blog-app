import React from 'react';

const BlogPageLayout = ({ layout, children }) => {
  const layoutClass = layout === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' : 'space-y-6';
  return (
    <div className={`mt-6 ${layoutClass}`}>
      {children}
    </div>
  );
};

export default BlogPageLayout;