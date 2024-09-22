import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-16 h-16 border-4 border-solid border-[#00df9a] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
