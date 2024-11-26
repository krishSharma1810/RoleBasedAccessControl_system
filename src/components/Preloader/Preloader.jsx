import React from 'react';

const Preloader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-700 animate-pulse">
        Loading...
      </div>
    </div>
  );
};

export default Preloader;
