import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center py-8 px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
        AI Image Generator
      </h1>
      <p className="text-gray-400 mt-2 text-sm md:text-base">
        Create stunning AI visuals from your imagination.
      </p>
    </header>
  );
};

export default Header;
