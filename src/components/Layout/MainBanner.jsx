import React from 'react';
import tealeafImage from '../../image/tealeafimg.png';
import leafImage from '../../image/monstera_17259470 (1).png';
import ecoabs from '../../image/WelcomeBanner.png';
import { useNavigate } from 'react-router-dom';

const MainBanner = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-[#ffffff] overflow-hidden px-6 sm:px-10 lg:px-16 top-8">
      {/* Animation Styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(0, -15px) rotate(5deg); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(0, -10px) rotate(-3deg); }
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(0, -8px) rotate(2deg); }
        }
        
        .float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        
        .float-medium {
          animation: float-medium 6s ease-in-out infinite;
        }
        
        .float-fast {
          animation: float-fast 4s ease-in-out infinite;
        }
        
        .delay-1 {
          animation-delay: 1s;
        }
        
        .delay-2 {
          animation-delay: 2s;
        }
        
        .delay-3 {
          animation-delay: 3s;
        }
      `,
        }}
      />

      {/* Background Text */}
      <div className="absolute w-full flex items-center justify-center top-28 md-lg:pt-28">
        <h1 className="text-[150px] lg:text-[200px] font-black text-[#cae4c7] tracking-wider opacity-30">
          MINITI
        </h1>
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto h-screen flex flex-col mt-6 lg:flex-row items-start lg:items-start gap-10">
        {/* Left Content */}
        <div className="z-10 lg:w-1/2 text-[#335230] space-y-6 mt-10 mx-12 lg:mt-0">
          <h2 className="text-5xl lg:text-5xl font-bold">
            Turn Trash into
            <br />
            Cash with Miniti
          </h2>
          <p className="text-lg lg:text-xl">Recycle Smart | Earn Instant | Save Planet</p>
          <button
            onClick={() => navigate('/request')}
            className="bg-white border-gray-200 border-2 text-[#baa53c] px-8 py-4 lg:py-4 rounded-full font-bold hover:bg-orange-100 transition-colors flex items-center gap-2 group"
          >
            <span>Book Now</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transform transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>

        {/* Modern Floating Leaves Layout */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {/* Top Left Leaf */}
          <div className="absolute top-[10%] left-[15%] w-16 h-16 lg:w-20 lg:h-20 opacity-80 float-medium delay-2">
            <img
              src={tealeafImage}
              alt="leaf"
              className="w-full h-full object-contain transform rotate-45"
            />
          </div>

          {/* Middle Right Leaf - Large */}
          <div className="absolute top-[30%] right-[20%] w-32 h-32 lg:w-40 lg:h-40 opacity-90 float-slow delay-1">
            <img
              src={leafImage}
              alt="leaf"
              className="w-full h-full object-contain transform -rotate-12"
            />
          </div>

          {/* Top Right Small Leaf */}
          <div className="absolute top-[15%] right-[30%] w-10 h-10 lg:w-12 lg:h-12 opacity-70 float-fast">
            <img
              src={tealeafImage}
              alt="leaf"
              className="w-full h-full object-contain transform rotate-75"
            />
          </div>

          {/* Bottom Left Leaf */}
          <div className="absolute bottom-[25%] left-[25%] w-20 h-20 lg:w-24 lg:h-24 opacity-80 float-slow delay-3">
            <img
              src={leafImage}
              alt="leaf"
              className="w-full h-full object-contain transform rotate-15"
            />
          </div>

          {/* Bottom Right Leaf */}
          <div className="absolute bottom-[20%] right-[10%] w-16 h-16 lg:w-20 lg:h-20 opacity-90 float-medium">
            <img
              src={tealeafImage}
              alt="leaf"
              className="w-full h-full object-contain transform -rotate-35"
            />
          </div>

          {/* Center Right Leaf - Small */}
          <div className="absolute top-[50%] right-[35%] w-12 h-12 lg:w-16 lg:h-16 opacity-75 float-fast delay-2">
            <img
              src={tealeafImage}
              alt="leaf"
              className="w-full h-full object-contain transform rotate-60"
            />
          </div>
        </div>
      </div>

      {/* Bottom Abstract Image */}
      <div className="absolute -bottom-2 left-0">
        <img src={ecoabs} alt="abstract eco background" className="w-full h-full object-contain" />
      </div>
    </div>
  );
};

export default MainBanner;
