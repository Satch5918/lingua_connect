// components/ui/Badge.tsx
import React from 'react';

export const Badge: React.FC<{ children: React.ReactNode; variant?: 'secondary' | 'primary' }> = ({ children, variant }) => {
  const variantClasses = variant === 'secondary' ? 'bg-gray-200 text-gray-700' : 'bg-blue-500 text-white';
  return (
    <span className={`inline-flex items-center px-2 py-1 rounded-full text-sm font-medium ${variantClasses}`}>
      {children}
    </span>
  );
};
