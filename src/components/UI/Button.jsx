import React from 'react';

function Button({ children, onClick, className = '', ...props }) {
  const defaultClasses = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline';
  const combinedClasses = `${defaultClasses} ${className}`;
  return (
    <button onClick={onClick} className={combinedClasses} {...props}>
      {children}
    </button>
  );
}

export default Button;