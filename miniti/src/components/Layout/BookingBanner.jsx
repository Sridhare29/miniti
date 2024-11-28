import React from 'react'
import { Leaf, Droplet, Recycle } from 'lucide-react'
import NotFound from '../../pages/NotFound';
import { useNavigate } from 'react-router-dom';

const BookingBanner = () => {
    const navigate = useNavigate(); 

  return (
    <div className="relative bg-gradient-to-br my-8 pb-16  min-h-screen flex items-center overflow-hidden">
      {/* Background Shapes */}
      {/* <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <Recycle className="absolute top-10 left-10 text-green-300 w-32 h-32" />
        <Leaf className="absolute bottom-20 right-20 text-green-300 w-48 h-48" />
        <Droplet className="absolute top-1/3 right-1/4 text-blue-300 w-40 h-40" />
      </div> */}

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-2 lg:space-y-0">
          {/* Content Section */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <div className="bg-white/30 backdrop-blur-sm p-4 rounded-xl inline-block">
              <h1 className="text-4xl lg:text-5xl font-bold bg-clip-text py-1 text-transparent bg-gradient-to-r from-green-600 to-teal-400">
                Recycle. Earn. Impact.
              </h1>
            </div>
            
            <p className="text-xl text-gray-700 font-medium leading-relaxed">
              Transform waste into wealth. Every recyclable counts towards a greener planet and puts money back in your pocket.
            </p>
            
            <div className="flex justify-center lg:justify-start space-x-4">
              <button onClick={() => navigate('/erorr')} className="flex items-center bg-gradient-to-r from-green-400 to-green-400 font-semibold text-white px-6 py-3 rounded-full hover:scale-105 transition-transform group">
                <Recycle className="mr-2 group-hover:rotate-45 transition-transform" />
                Book Your Green Slot
              </button>
            </div>

            <div className="flex space-x-4 justify-center lg:justify-start">
              <div className="flex items-center bg-white/50 border-2 backdrop-blur-sm p-2 rounded-xl hover:scale-105 transition-transform group">
                <Leaf className="text-green-600 mr-2" />
                <span className="text-sm font-medium text-gray-700">Instant Cash</span>
              </div>
              <div className="flex items-center bg-white/50 border-2 backdrop-blur-sm p-2 rounded-xl hover:scale-105 transition-transform group">
                <Droplet className="text-blue-600 mr-2" />
                <span className="text-sm font-medium text-gray-700">Eco Friendly</span>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img 
              src="http://localhost:3000/images/svg/Waste management-amico.svg" 
              alt="Recycling and Environmental Protection" 
              className="w-full max-w-md lg:max-w-lg transform hover:scale-110 transition-transform duration-500 drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingBanner
