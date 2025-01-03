import React from 'react';

const Hero: React.FC = () => {
  
  return (
    <div className="bg-pink-100 py-16 text-black w-full h-full">
      <div className="container mx-auto px-4 flex flex-col items-center h-full">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-serif italic text-gray-700 mb-4">Welcome to Our Wedding Gift Registry!</h2>
          <h1 className="text-4xl font-bold mb-4">Celebrate our love by spending money</h1>
          <p className="text-xl mb-6">Create and manage your perfect wedding gift list with ease, ensuring your special day is filled with meaningful presents from loved ones.</p>
        </div>
        <div className="w-full max-w-2xl">
          <img src={`https://raw.githubusercontent.com/56b81caaa87941618cfed6dfb4d34047/Wedding_Gift_Registry_1734522858/${window.MI_PROJECT_GIT_REF || 'main'}/src/assets/images/c25832c7a2d94469aff0aaa4bd99891f.jpeg`} alt="Wedding Gift List" className="w-full h-auto rounded-lg shadow-md" />
        </div>
      </div>
    </div>
  );
};

export { Hero as component }