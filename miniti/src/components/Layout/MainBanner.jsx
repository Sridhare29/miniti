import React from "react";

const MainBanner = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#a7de9c] overflow-hidden px-6 sm:px-10 lg:px-16 py-12">
  {/* Background Text */}
  <div className="absolute w-full h-full flex items-center justify-center">
    <h1 className="text-[200px] font-black text-white/20 tracking-wider">
      MINITI
    </h1>
  </div>

  {/* Main Content */}
  <div className="relative container mx-auto h-screen flex items-center">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-10 w-full">
      {/* Left Content */}
      <div className="z-10 lg:w-1/2 text-white space-y-6">
        <h2 className="text-5xl font-bold">
          Turn Trash into
          <br />
          Cash with Miniti
        </h2>
        <p className="text-xl">
          Recycle Smart | Earn Instant | Save Planet
        </p>
        <button className="bg-white text-orange-400 px-8 py-3 rounded-full font-bold hover:bg-orange-100 transition-colors">
          Order Now
        </button>
      </div>

      {/* Center Image */}
      <div className="relative z-20 lg:absolute lg:right-[15%] lg:top-1/2 lg:-translate-y-1/2">
        <img
          src="/images/svg/Home_Imgs.svg"
          alt="Save the Earth"
          className="w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] object-contain"
        />
        {/* Floating Elements */}
        <div className="absolute -top-8 -left-8 w-10 h-10 lg:w-12 lg:h-32">
          <img src="/images/svg/Waste management-amico.svg" alt="leaf" className="animate-float" />
        </div>
        <div className="absolute top-16 -right-8 w-10 h-10 lg:w-12 lg:h-12">
          <img src="/images/svg/Waste management-amico.svg" alt="leaf" className="animate-float-delay" />
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
