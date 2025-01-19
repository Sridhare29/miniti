import React from 'react'
import { Leaf, Droplet, Recycle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import tealeafImage from "../../image/tealeafimg.png";
import leafImage from "../../image/monstera_17259470 (1).png";
import ecoabs from "../../image/WelcomeBanner.png";

const BookingBanner = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-[#ffffff] overflow-hidden px-6 sm:px-10 lg:px-16">
            <div className="w-full h-px bg-[#cae4c7] mb-8"></div>
      {/* Background Text */}
      <div className="absolute w-full flex items-center justify-center top-40 md-lg:pt-28">
        <h1 className="text-[150px] lg:text-[200px] font-black text-[#cae4c7] tracking-wider opacity-30">
          RECYCLE
        </h1>
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto h-screen flex  lg:flex-row items-center lg:items-center ">
        {/* Left Content */}
        {/* <div className="relative z-20 lg:absolute lg:left-[5%] lg:top-1/2 lg:-translate-y-1/2 mt-10 lg:mt-0"> */}
          {/* Decorative Leaf Elements */}
          {/* <div className="absolute top-0 left-0 w-20 h-20 lg:w-16 lg:h-24 transform rotate-45 animate-float">
            <img
              src="/images/tealeaf-image.png" // Make sure the path is correct
              alt="leaf"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="absolute top-40 left-20 w-20 h-20 lg:w-14 lg:h-20 transform -rotate-45 animate-float">
            <img
              src={leafImage} // Make sure the path is correct
              alt="leaf"
              className="w-full h-full object-contain"
            />
          </div> */}

          {/* Main Image */}
          <div className="relative px-12 z-20 lg:absolute w-1/2 lg:-translate-y-1/2 mt-10 lg:mt-0 flex justify-start">
          <img 
              src="http://localhost:3000/images/svg/Waste management-amico.svg" 
              alt="Recycling and Environmental Protection" 
              className="w-full max-w-md lg:max-w-lg transform hover:scale-110 transition-transform duration-500 drop-shadow-2xl"
        />
        </div>
        {/* Right Image */}

        <div className="z-10 lg:w-1/2 text-[#335230] space-y-6  mx-24 lg:mt-0">
          <h2 className="text-5xl lg:text-5xl font-bold">
            Recycle. 
            <br />
            Earn. Impact.
          </h2>
          
          <p className="text-lg lg:text-xl">
            Transform Waste | Earn Instantly | Save Planet
          </p>
          
          <div className="flex space-x-4">
            <button 
              onClick={() => navigate('/request')}
              className="bg-white border-gray-200 border-2 text-[#baa53c] px-8 py-4 lg:py-6 rounded-full font-bold hover:bg-orange-100 transition-colors flex items-center"
            >
              <Recycle className="mr-2" />
              Book Green Slot
            </button>
          </div>

          <div className="flex space-x-4">
            <div className="flex items-center bg-[#cae4c7]/30 p-2 rounded-full">
              <Leaf className="text-[#335230] mr-2" />
              <span className="text-[#335230]">Instant Cash</span>
            </div>
            <div className="flex items-center bg-[#cae4c7]/30 p-2 rounded-full">
              <Droplet className="text-[#335230] mr-2" />
              <span className="text-[#335230]">Eco Friendly</span>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default BookingBanner;
