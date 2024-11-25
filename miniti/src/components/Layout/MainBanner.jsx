import React from "react";

const MainBanner = () => {
  return (
    <div className="w-full mt-12">
      {/* Wrapper */}
      <div className="w-full mx-auto flex  lg:flex-row justify-between items-center px-6 lg:px-16">
        {/* Left Section */}
        <div className="flex flex-col items-start w-full h-full pl-40 mb-8 lg:mb-0 lg:w-1/2 text-left">
          <p className="font-extrabold text-[50px] text-gray-800 leading-tight mb-2">
            Sell your recyclables
          </p>
          <p className="font-extrabold text-[50px] lg:text-[50px] text-gray-800 leading-tight mb-2">
            <span>online with </span>
            <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
              Miniti!
            </span>
          </p>
          <p className="font-light text-lg lg:text-[10px] text-[#5b5b5b] leading-tight mb-2">
            Paper - Plastics - Metals - Appliances
          </p>
          {/* <div className="flex justify-center w-[50%]">
          <img
            src="http://localhost:3000/images/Garbage management-bro.svg"
            alt="Recycling Illustration"
            className="mt-4 w-[100%] h-[50%]  items-center lg:w-36"
          />
          </div> */}
        </div>

        {/* Right Section */}
        <div className="flex justify-center items-center w-full h-full lg:w-1/2">
          <img
            src="http://localhost:3000/images/Save the Earth-amico.svg"
            alt="Save the Earth"
            className="w-full max-w-md lg:max-w-lg transform transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
