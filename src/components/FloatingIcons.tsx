import React from 'react';

const WineGlass: React.FC = () => (
  <div className="w-16 h-16 relative">
    {/* Bowl */}
    <div className="w-12 h-8 bg-[#4a284a] rounded-t-lg mx-auto"></div>
    {/* Stem */}
    <div className="w-1 h-6 bg-[#4a284a] mx-auto"></div>
    {/* Base */}
    <div className="w-8 h-1 bg-[#4a284a] mx-auto"></div>
    {/* Diamond inside bowl */}
    <div className="absolute top-2 right-4 w-3 h-3 bg-[#70a0c0] transform rotate-45"></div>
  </div>
);

const Bottle: React.FC = () => (
  <div className="w-16 h-20 relative">
    {/* Cap */}
    <div className="w-4 h-2 bg-black mx-auto rounded-t-sm"></div>
    {/* Neck */}
    <div className="w-3 h-4 bg-[#fca80a] mx-auto"></div>
    {/* Body */}
    <div className="w-8 h-12 bg-[#fca80a] mx-auto rounded-sm relative">
      {/* Label */}
      <div className="absolute top-2 left-1 right-1 bottom-2 bg-white rounded-sm">
        {/* Top section - light blue */}
        <div className="h-2 bg-[#70a0c0] rounded-t-sm"></div>
        {/* Middle section - yellow curve */}
        <div className="h-4 bg-yellow-400 relative">
          <div className="absolute top-0 right-0 w-2 h-2 bg-black rounded-full"></div>
        </div>
        {/* Bottom section - light pink */}
        <div className="h-2 bg-pink-200 rounded-b-sm"></div>
      </div>
    </div>
  </div>
);

const CoffeeCup: React.FC = () => (
  <div className="w-16 h-16 relative">
    {/* Saucer */}
    <div className="w-12 h-3 bg-[#4a284a] rounded-full mx-auto"></div>
    {/* Cup */}
    <div className="w-10 h-8 bg-[#4a284a] rounded-t-lg mx-auto relative">
      {/* Handle */}
      <div className="absolute -right-1 top-2 w-2 h-4 bg-[#4a284a] rounded-r-full"></div>
      {/* Coffee bean */}
      <div className="absolute top-2 left-3 w-4 h-6 bg-[#fca80a] rounded-full transform rotate-12">
        <div className="w-full h-0.5 bg-[#fca80a] transform rotate-45 mt-2"></div>
      </div>
    </div>
    {/* Steam */}
    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
      <div className="w-0.5 h-3 bg-[#4a284a] rounded-full transform rotate-12"></div>
      <div className="w-0.5 h-2 bg-[#4a284a] rounded-full transform -rotate-12 ml-1"></div>
      <div className="w-0.5 h-3 bg-[#4a284a] rounded-full transform rotate-6 ml-2"></div>
    </div>
  </div>
);

const PlateWithFork: React.FC = () => (
  <div className="w-16 h-16 relative">
    {/* Plate */}
    <div className="w-12 h-12 mx-auto relative">
      {/* Outer rim */}
      <div className="w-full h-full bg-[#fca80a] rounded-full"></div>
      {/* Inner center */}
      <div className="absolute top-1 left-1 right-1 bottom-1 bg-[#4a284a] rounded-full"></div>
    </div>
    {/* Fork */}
    <div className="absolute right-0 top-2 w-2 h-10 bg-[#70a0c0]">
      {/* Tines */}
      <div className="w-full h-1 bg-[#70a0c0] mb-1"></div>
      <div className="w-full h-1 bg-[#70a0c0] mb-1"></div>
      <div className="w-full h-1 bg-[#70a0c0] mb-1"></div>
      <div className="w-full h-1 bg-[#70a0c0]"></div>
    </div>
  </div>
);

const FloatingIcons: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Wine Glass - Top Left */}
      <div className="absolute top-20 left-4 md:left-10 animate-float-slow opacity-80">
        <WineGlass />
      </div>
      
      {/* Bottle - Top Right */}
      <div className="absolute top-32 right-4 md:right-16 animate-float-medium opacity-80">
        <Bottle />
      </div>
      
      {/* Coffee Cup - Bottom Left */}
      <div className="absolute bottom-32 left-4 md:left-16 animate-float-fast opacity-80">
        <CoffeeCup />
      </div>
      
      {/* Plate with Fork - Bottom Right */}
      <div className="absolute bottom-20 right-4 md:right-10 animate-float-slow opacity-80">
        <PlateWithFork />
      </div>
      
      {/* Additional floating elements for more visual interest - hidden on mobile */}
      <div className="hidden md:block absolute top-1/3 left-1/4 animate-float-medium opacity-60">
        <WineGlass />
      </div>
      
      <div className="hidden md:block absolute top-2/3 right-1/3 animate-float-fast opacity-70">
        <CoffeeCup />
      </div>
      
      {/* Mobile-only floating elements */}
      <div className="md:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-float-medium opacity-50">
        <Bottle />
      </div>
    </div>
  );
};

export default FloatingIcons;
