import React from 'react';

function OurServicesBanner() {
  return (
    <div className="flex flex-col bg-gradient-to-r from-green-300 via-green-200 to-green-300 mt-8 justify-center items-center py-8 px-6 text-center">
      {/* Heading Section */}
      <div className="flex m-4 text-[30px] sm:text-[20px] lg:text-[50px] font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 animate-text-fade">
        <h1>Our Services</h1>
      </div>

      {/* Description Section */}
      <div className="flex mx-4 mt-4 font-medium text-gray-900 text-lg lg:text-xl tracking-wide leading-relaxed max-w-3xl">
        <p>
          We offer comprehensive scrap collection services for households and corporate entities. Our services include the collection of electronic waste, metal scrap, plastic waste, and paper waste. All materials are responsibly recycled and disposed of with care for the environment.
        </p>
      </div>

      {/* Decorative Icon/CTA */}
      <div className="mt-6">
        <button className="bg-white text-[#4DA674] px-6 py-3 font-semibold rounded-full shadow-md hover:bg-gray-100 transition-all duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default OurServicesBanner;
