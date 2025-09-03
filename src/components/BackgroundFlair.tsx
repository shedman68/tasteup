import React from 'react';

interface BackgroundFlairProps {
  color: string;
  className?: string;
  children?: React.ReactNode;
}

const BackgroundFlair: React.FC<BackgroundFlairProps> = ({ color, className = '', children }) => {
  return (
    <div 
      className={`relative ${className}`}
      style={{
        background: color,
        clipPath: `polygon(
          0% 20%, 
          15% 0%, 
          35% 10%, 
          50% 0%, 
          70% 15%, 
          85% 5%, 
          100% 25%, 
          95% 50%, 
          100% 75%, 
          85% 95%, 
          70% 85%, 
          50% 100%, 
          35% 90%, 
          15% 100%, 
          0% 80%, 
          5% 50%
        )`
      }}
    >
      {children}
    </div>
  );
};

export default BackgroundFlair;
