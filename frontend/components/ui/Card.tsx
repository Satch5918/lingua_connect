// components/ui/Card.tsx
import React from 'react';

export const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
      {children}
    </div>
  );
};

export const CardHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="border-b p-4">{children}</div>;
};

export const CardContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="p-4">{children}</div>;
};

export const CardTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <h3 className="text-xl font-semibold">{children}</h3>;
};
