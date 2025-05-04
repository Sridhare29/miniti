import React from 'react'
import { Leaf, Droplet, Recycle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import bookingImg from "../../image/Booking/Waste management-amico.svg";

const BookingBanner = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-white overflow-hidden px-6 sm:px-10 lg:px-16">
      <div className="w-full h-px bg-[#cae4c7] mb-2"></div>

      {/* Background Text */}
      <div className="absolute w-full flex items-center justify-center top-40 md-lg:pt-28 pointer-events-none z-0">
        <h1 className="text-[100px] md:text-[150px] lg:text-[200px] font-black text-[#cae4c7] tracking-wider opacity-30">
          RECYCLE
        </h1>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between min-h-[80vh] pt-16 lg:pt-32">
        
        {/* Left - Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center mt-10 lg:mt-0">
          <img 
            src={bookingImg} 
            alt="Recycling and Environmental Protection" 
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg transform hover:scale-105 transition-transform duration-500 drop-shadow-2xl"
          />
        </div>

        {/* Right - Text Content */}
        <div className="w-full lg:w-1/2 text-[#335230] space-y-6 px-4 sm:px-6 md:px-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            Recycle. 
            <br />
            Earn. Impact.
          </h2>
          
          <p className="text-lg md:text-xl">
            Transform Waste | Earn Instantly | Save Planet
          </p>
          
          <button 
            onClick={() => navigate('/request')}
            className="bg-white border-gray-200 border-2 text-[#baa53c] px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold hover:bg-orange-100 transition-colors flex items-center"
          >
            <Recycle className="mr-2" />
            Book Green Slot
          </button>

          <div className="flex flex-wrap gap-4 pt-4">
            <div className="flex items-center bg-[#cae4c7]/30 px-4 py-2 rounded-full">
              <Leaf className="text-[#335230] mr-2" />
              <span>Instant Cash</span>
            </div>
            <div className="flex items-center bg-[#cae4c7]/30 px-4 py-2 rounded-full">
              <Droplet className="text-[#335230] mr-2" />
              <span>Eco Friendly</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingBanner;
