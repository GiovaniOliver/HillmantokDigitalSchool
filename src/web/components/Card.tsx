import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card = ({ children, className = '', hover = true }: CardProps) => {
  const baseStyles = 'bg-gray-800/50 backdrop-blur-sm rounded-xl p-6';
  const hoverStyles = hover ? 'hover:bg-gray-800/70 transition-colors' : '';

  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
};
