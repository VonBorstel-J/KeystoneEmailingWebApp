// LoadingComponent.jsx
import React from 'react';

const LoadingComponent = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
    <div className="text-lg font-semibold ml-4">Loading, please wait...</div>
  </div>
);

export default LoadingComponent;
