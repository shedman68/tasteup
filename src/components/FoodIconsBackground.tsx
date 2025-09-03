import React from 'react';

const FoodIconsBackground: React.FC = () => {
  const icons = [
    // Row 1
    { id: 1, type: 'coffee-cup', position: 'top-10 left-10', size: 'w-8 h-8' },
    { id: 2, type: 'cocktail-glass', position: 'top-20 right-20', size: 'w-6 h-8' },
    { id: 3, type: 'salad-bowl', position: 'top-32 left-1/4', size: 'w-10 h-6' },
    { id: 4, type: 'salad-bowl', position: 'top-40 right-1/3', size: 'w-8 h-5' },
    
    // Row 2
    { id: 5, type: 'cake-slice', position: 'top-1/3 left-16', size: 'w-7 h-7' },
    { id: 6, type: 'ice-cream', position: 'top-1/3 right-10', size: 'w-6 h-8' },
    { id: 7, type: 'fruit', position: 'top-1/2 left-8', size: 'w-6 h-7' },
    { id: 8, type: 'pancakes', position: 'top-1/2 right-1/4', size: 'w-8 h-6' },
    
    // Row 3
    { id: 9, type: 'noodle-bowl', position: 'bottom-1/3 left-1/3', size: 'w-9 h-6' },
    { id: 10, type: 'burrito', position: 'bottom-1/3 right-16', size: 'w-7 h-5' },
    { id: 11, type: 'hot-dog', position: 'bottom-1/2 left-20', size: 'w-8 h-4' },
    { id: 12, type: 'pretzel', position: 'bottom-1/2 right-8', size: 'w-6 h-6' },
    
    // Row 4
    { id: 13, type: 'soda-can', position: 'bottom-20 left-12', size: 'w-5 h-7' },
    { id: 14, type: 'juice-glass', position: 'bottom-32 right-1/4', size: 'w-4 h-6' },
    { id: 15, type: 'grapes', position: 'bottom-40 left-1/3', size: 'w-7 h-6' },
    { id: 16, type: 'pizza-slice', position: 'bottom-10 right-10', size: 'w-8 h-7' },
  ];

  const renderIcon = (type: string) => {
    switch (type) {
      case 'coffee-cup':
        return (
          <div className="relative">
            <div className="w-6 h-4 bg-purple-dark rounded-t-lg mx-auto"></div>
            <div className="w-0.5 h-3 bg-purple-dark mx-auto"></div>
            <div className="w-5 h-0.5 bg-purple-dark mx-auto"></div>
            <div className="absolute top-1 left-2 w-2 h-3 bg-accent rounded-full transform rotate-12"></div>
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
              <div className="w-0.5 h-2 bg-purple-dark rounded-full transform rotate-12"></div>
              <div className="w-0.5 h-1.5 bg-purple-dark rounded-full transform -rotate-12 ml-0.5"></div>
              <div className="w-0.5 h-2 bg-purple-dark rounded-full transform rotate-6 ml-1"></div>
            </div>
          </div>
        );
      case 'cocktail-glass':
        return (
          <div className="relative">
            <div className="w-4 h-5 bg-accent rounded-t-full mx-auto"></div>
            <div className="w-1 h-2 bg-purple-dark mx-auto"></div>
            <div className="absolute -top-1 right-0 w-2 h-2 bg-accent rounded-full"></div>
          </div>
        );
      case 'salad-bowl':
        return (
          <div className="w-full h-full bg-purple-dark rounded-full relative">
            <div className="absolute inset-1 bg-green-400 rounded-full"></div>
          </div>
        );
      case 'cake-slice':
        return (
          <div className="relative">
            <div className="w-full h-1 bg-purple-dark"></div>
            <div className="w-full h-1 bg-accent"></div>
            <div className="w-full h-1 bg-purple-dark"></div>
            <div className="absolute -top-1 right-0 w-1 h-1 bg-accent rounded-full"></div>
          </div>
        );
      case 'ice-cream':
        return (
          <div className="relative">
            <div className="w-4 h-3 bg-accent rounded-t-full"></div>
            <div className="w-4 h-3 bg-green-400 rounded-t-full -mt-1"></div>
            <div className="w-3 h-2 bg-yellow-300 rounded-t-full -mt-1 mx-auto"></div>
          </div>
        );
      case 'fruit':
        return (
          <div className="relative">
            <div className="w-4 h-5 bg-accent rounded-full"></div>
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-purple-dark"></div>
            <div className="absolute -top-0.5 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-green-400"></div>
          </div>
        );
      case 'pancakes':
        return (
          <div className="relative">
            <div className="w-6 h-1 bg-purple-dark rounded-full"></div>
            <div className="w-6 h-1 bg-accent rounded-full -mt-0.5"></div>
            <div className="w-6 h-1 bg-purple-dark rounded-full -mt-0.5"></div>
            <div className="absolute -top-0.5 right-0 w-1 h-1 bg-purple-dark rounded-full"></div>
          </div>
        );
      case 'noodle-bowl':
        return (
          <div className="w-full h-full bg-purple-dark rounded-full relative">
            <div className="absolute inset-1 bg-accent rounded-full"></div>
            <div className="absolute -top-1 left-1 w-0.5 h-3 bg-purple-dark"></div>
            <div className="absolute -top-1 left-2 w-0.5 h-3 bg-purple-dark"></div>
          </div>
        );
      case 'burrito':
        return (
          <div className="w-full h-full bg-purple-dark rounded-full relative">
            <div className="absolute inset-1 bg-green-400 rounded-full"></div>
          </div>
        );
      case 'hot-dog':
        return (
          <div className="w-full h-full bg-accent rounded-full relative">
            <div className="absolute inset-1 bg-purple-dark rounded-full"></div>
            <div className="absolute inset-2 bg-accent rounded-full opacity-60"></div>
          </div>
        );
      case 'pretzel':
        return (
          <div className="w-full h-full bg-purple-dark rounded-full relative">
            <div className="absolute inset-1 bg-white rounded-full opacity-20"></div>
          </div>
        );
      case 'soda-can':
        return (
          <div className="w-full h-full bg-purple-dark rounded-sm relative">
            <div className="absolute inset-1 bg-accent rounded-sm"></div>
          </div>
        );
      case 'juice-glass':
        return (
          <div className="w-full h-full bg-accent rounded-t-sm"></div>
        );
      case 'grapes':
        return (
          <div className="relative">
            <div className="w-5 h-4 bg-purple-dark rounded-full"></div>
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-green-400"></div>
            <div className="absolute -top-0.5 left-1/2 transform -translate-x-1/2 w-0.5 h-1 bg-purple-dark"></div>
          </div>
        );
      case 'pizza-slice':
        return (
          <div className="relative">
            <div className="w-6 h-6 bg-accent rounded-t-full"></div>
            <div className="absolute inset-1 bg-purple-dark rounded-t-full"></div>
            <div className="absolute top-1 left-1 w-1 h-1 bg-accent rounded-full"></div>
            <div className="absolute top-2 right-2 w-1 h-1 bg-accent rounded-full"></div>
            <div className="absolute bottom-1 left-2 w-1 h-1 bg-accent rounded-full"></div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="absolute inset-0 pointer-events-none opacity-20">
      {icons.map((icon) => (
        <div
          key={icon.id}
          className={`absolute ${icon.position} ${icon.size} animate-pulse`}
          style={{
            animationDelay: `${icon.id * 0.2}s`,
            animationDuration: '3s'
          }}
        >
          {renderIcon(icon.type)}
        </div>
      ))}
    </div>
  );
};

export default FoodIconsBackground;



