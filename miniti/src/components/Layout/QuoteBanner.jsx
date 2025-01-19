import React from 'react';
import tealeafImage from "../../image/tealeafimg.png";
import leafImage from "../../image/monstera_17259470 (1).png";

export const QuoteBanner = () => {
  return (
    <div className="relative min-h-[40vh] w-full bg-[#ffffff] overflow-hidden px-6 sm:px-10 lg:px-16 py-20">
      {/* Background Text */}
      <div className="absolute w-full flex items-center justify-center">
        <h1 className="text-[80px] lg:text-[120px] font-black text-[#cae4c7] tracking-wider opacity-30">
          RECYCLE
        </h1>
      </div>

      {/* Main Quote Content */}
      <div className="relative container mx-auto flex flex-col items-center justify-center text-center z-10">
        <div className="text-[#335230] space-y-4">
          {/* First Line */}
          <h2 className="text-4xl lg:text-6xl font-bold animate-fade-in">
            Recycle,
          </h2>

          {/* Second Line */}
          <p className="text-2xl lg:text-3xl italic">
            the possibilities are endless.
          </p>

          {/* Decorative Line */}
          <div className="w-24 h-1 bg-[#baa53c] mx-auto mt-6"></div>
        </div>
      </div>

      {/* Decorative Leaves */}
      <div className="absolute w-full h-full top-0 left-0">
        {/* Top Left Leaf */}
        <div className="absolute top-10 left-10 w-16 h-16 lg:w-20 lg:h-20 transform -rotate-45 animate-float">
          <img
            src={leafImage}
            alt="decorative leaf"
            className="w-full h-full object-contain opacity-40"
          />
        </div>

        {/* Bottom Right Leaf */}
        <div className="absolute bottom-10 right-10 w-16 h-16 lg:w-20 lg:h-20 transform rotate-45 animate-float-delayed">
          <img
            src={tealeafImage}
            alt="decorative leaf"
            className="w-full h-full object-contain opacity-40"
          />
        </div>
      </div>
    </div>
  );
};