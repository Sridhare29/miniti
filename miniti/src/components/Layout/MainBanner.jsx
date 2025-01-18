import React from "react";
import tealeafImage from "../../image/tealeafimg.png";
import leafImage from "../../image/monstera_17259470 (1).png";

const MainBanner = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#ffffff] overflow-hidden px-6 sm:px-10 lg:px-16 pt-8">
      {/* Background Text */}
      <div className="absolute w-full h-full flex items-center justify-center">
        <h1 className="text-[200px] font-black text-[#cae4c7]  tracking-wider">
          MINITI
        </h1>
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto h-screen flex items-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 w-full">
          {/* Left Content */}
          <div className="z-10 lg:w-1/2 text-[#335230] space-y-6">
            <h2 className="text-5xl font-bold">
              Turn Trash into
              <br />
              Cash with Miniti
            </h2>
            <p className="text-xl">
              Recycle Smart | Earn Instant | Save Planet
            </p>
            <button className="bg-white border-gray-200 border-2 text-[#baa53c] px-8 py-3 rounded-full font-bold hover:bg-orange-100 transition-colors">
              Book Now
            </button>
          </div>

          {/* Center Image */}
          <div className="relative z-20 lg:absolute lg:right-[15%] lg:top-1/2 lg:-translate-y-1/2 animate-float">
            <img
              src="/images/svg/Main_Dash_img.svg"
              alt="Save the Earth"
              className="w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] object-contain"
            />
            {/* Floating Elements */}
            {/* <div className="absolute -top-8 -left-12 w-24 h-24 lg:w-16 lg:h-24 transform rotate-12 animate-float">
              <img
                src={tealeafImage}
                alt="leaf"
                className="w-full h-full object-contain"
              />
            </div> */}
            <div className="absolute top-10 -right-12 w-20 h-20 lg:w-14 lg:h-20 transform rotate-45 animate-float">
              <img
                src={leafImage}
                alt="leaf"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute top-24 -left-16 w-20 h-20 lg:w-16 lg:h-24 transform rotate-45 animate-float">
              <img
                src={tealeafImage}
                alt="leaf"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 right-8 flex gap-2">
        <button className="w-3 h-3 rounded-full bg-white opacity-50"></button>
        <button className="w-3 h-3 rounded-full bg-white"></button>
        <button className="w-3 h-3 rounded-full bg-white opacity-50"></button>
      </div>
    </div>
  );
};

export default MainBanner;
