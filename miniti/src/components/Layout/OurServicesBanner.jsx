import React from 'react';

function OurServicesBanner() {
  return (
    <div className="relative min-h-[40vh] w-full bg-[#ffffff] overflow-hidden px-6 sm:px-10 lg:px-16 py-20">
      {/* Heading Section */}
      <div className="absolute w-full flex items-center justify-center">
        <h1 className="text-[80px] lg:text-[120px] font-black text-[#cae4c7] tracking-wider opacity-30">
                Our Services</h1>
      </div>
   {/* Main Quote Content */}
   <div className="relative container mx-auto flex flex-col items-center justify-center text-center z-10">
        <div className="text-[#335230] space-y-4">
          {/* First Line */}
          <h2 className="text-4xl lg:text-6xl font-bold animate-fade-in">
          Our Services
          </h2>

          {/* Second Line */}
          <p className="text-2xl lg:text-3xl italic">
          We offer comprehensive scrap collection services for households and corporate entities. Our services include the collection of electronic waste, metal scrap, plastic waste, and paper waste. All materials are responsibly recycled and disposed of with care for the environment.
          </p>

          {/* Decorative Line */}
          <div className="w-24 h-1 bg-[#baa53c] mx-auto mt-6"></div>
        </div>
      </div>


      {/* Decorative Icon/CTA */}
      <div className="mt-6 flex justify-center">
        <button className="bg-white text-[#baa53c] px-6 py-3 font-semibold rounded-full shadow-md hover:bg-gray-100 transition-all duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default OurServicesBanner;
