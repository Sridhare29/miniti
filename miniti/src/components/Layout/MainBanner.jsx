import React from "react";
import tealeafImage from "../../image/tealeafimg.png";
import leafImage from "../../image/monstera_17259470 (1).png";
import ecoabs from "../../image/WelcomeBanner.png";
import { useNavigate } from 'react-router-dom'

const MainBanner = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-[#ffffff] overflow-hidden px-6 sm:px-10 lg:px-16 top-8">
      {/* Background Text */}
      <div className="absolute w-full flex items-center justify-center top-28 md-lg:pt-28">
        <h1 className="text-[150px] lg:text-[200px] font-black text-[#cae4c7] tracking-wider opacity-30">
          MINITI
        </h1>
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto h-screen flex flex-col lg:flex-row items-start lg:items-center gap-10">
        {/* Left Content */}
        <div className="z-10 lg:w-1/2 text-[#335230] space-y-6 mt-10 mx-12 lg:mt-0">
          <h2 className="text-5xl lg:text-5xl font-bold">
            Turn Trash into
            <br />
            Cash with Miniti
          </h2>
          <p className="text-lg lg:text-xl">
            Recycle Smart | Earn Instant | Save Planet
          </p>
          <button
          onClick={() => navigate('/request')}
           className="bg-white border-gray-200 border-2 text-[#baa53c] px-8 py-4 lg:py-6 rounded-full font-bold hover:bg-orange-100 transition-colors">
            Book Now
          </button>
        </div>

        {/* Center Image */}
        <div className="relative z-20 lg:absolute lg:left-[5%] lg:top-1/2 lg:-translate-y-1/2 mt-10 lg:mt-0">
          {/* Top Left Leaf */}
          <div className="absolute top-0 left-0 w-20 h-20 lg:w-16 lg:h-24 transform rotate-45 animate-float">
            <img
              src={tealeafImage}
              alt="leaf"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Middle Left Leaf */}
          <div className="absolute top-40 left-20 w-20 h-20 lg:w-14 lg:h-20 transform -rotate-45 animate-float">
            <img
              src={leafImage}
              alt="leaf"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Bottom Left Leaf */}
          <div className="absolute top-80 right-52 w-24 h-24 lg:w-20 lg:h-72 transform rotate-90 animate-float">
            <img
              src={tealeafImage}
              alt="leaf"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Bottom Abstract Image */}
      <div className="absolute -bottom-2 left-0">
        <img src={ecoabs} alt="leaf" className="w-full h-full object-contain" />
      </div>
    </div>
  );
};

export default MainBanner;
