import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 my-10">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-indigo-400"></div>
      <p className="text-indigo-300 text-lg font-medium">Generating your masterpiece...</p>
    </div>
  );
};

export default Loader;
