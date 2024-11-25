import React from 'react';

export const QuoteBanner = () => {
  return (
    <div className="w-full h-auto mt-0 bg-gradient-to-r from-[#4DA674] via-[#7edaa6] to-[#4DA674] ">
      <div className="flex flex-col justify-center items-center py-8 px-4 text-center">
        {/* First Line */}
        <p className="font-extrabold text-[40px] lg:text-[50px] leading-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 animate-fade-in">
          Recycle,
        </p>
        {/* Second Line */}
        <p className="font-extrabold text-[40px] lg:text-[50px] leading-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 animate-fade-in delay-150">
          the possibilities are endless.
        </p>
      </div>
    </div>
  );
};
