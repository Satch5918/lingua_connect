// components/ui/Progress.tsx
import React from 'react';

export const Progress: React.FC<{ value: number }> = ({ value }) => {
  return (
    <div className="relative w-full h-2 bg-gray-200 rounded-full">
      <div className={`absolute h-full bg-green-500 rounded-full`} style={{ width: `${value}%` }} />
    </div>
  );
};
