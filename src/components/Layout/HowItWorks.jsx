import React from 'react';
import { Package, MapPin, Wallet, ArrowRight } from 'lucide-react';
import Img1 from '../../image/HowitsWork/Img1.png';
import Img2 from '../../image/HowitsWork/Img2.png';
import Img3 from '../../image/HowitsWork/Img3.png';

const HowItWorks = () => {
  const steps = [
    {
      title: 'Request Your Collection',
      icon: <Package className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-emerald-700" />,
      description:
        'Select a convenient time for your recycling pickup with our simple booking system',
      image: Img1,
    },
    {
      title: 'Doorstep Service',
      icon: <MapPin className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-emerald-700" />,
      description: 'Our team arrives at your location to gather your recyclable materials',
      image: Img2,
    },
    {
      title: 'Instant Rewards',
      icon: <Wallet className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-emerald-700" />,
      description: 'Earn rewards immediately through your chosen payment option',
      image: Img3,
    },
  ];

  return (
    <div className="relative min-h-[40vh] w-full bg-[#ffffff] overflow-hidden">
      <div className="w-full h-px bg-[#cae4c7] mb-8"></div>

      {/* Background Text */}
      <div className="absolute w-full flex items-center justify-center">
        <h1 className="text-6xl lg:text-8xl font-black text-[#cae4c7] tracking-wider opacity-30">
          Our Simple Process
        </h1>
      </div>

      <div className="relative w-full max-w-8xl  mx-auto z-10">
        <h2 className="text-4xl font-bold text-center  text-[#335230]">Our Simple Process</h2>

        <div className="sm:grid sm: grid-cols-3 justify-center gap-6 sm:gap-8 mx-4 sm:mx-20 px-4 sm:px-6 lg:px-8 mt-12">
          {steps.map((step, index) => (
            <div key={index} className="relative pb-8 justify-between m-4">
              <div className="bg-white rounded-lg shadow-lg p-6 h-full hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="flex flex-col items-center gap-4">
                    <div className="p-3 rounded-full bg-[#cae4c7] hover:bg-[#335230] transition-colors duration-300">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-[#335230]">{step.title}</h3>
                  </div>

                  <img
                    src={step.image}
                    alt={step.title}
                    className="rounded-lg object-cover h-48 "
                  />

                  <p className="text-gray-600">{step.description}</p>

                  {/* Decorative Line */}
                  <div className="w-16 h-0.5 bg-[#baa53c] mx-auto"></div>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="w-8 h-8 text-[#335230]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
