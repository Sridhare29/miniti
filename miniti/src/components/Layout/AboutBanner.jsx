import React from "react";
import Card from "../Card";
import Img1 from '../../image/Aboutus/Rate1.png';
import Img2 from '../../image/Aboutus/Trust1.png';
import Img3 from '../../image/Aboutus/Good1.png';
import Img4 from '../../image/Aboutus/Eco1.png';


const AboutBanner = () => {
  const cardValues = [
    {
      id: 1,
      title: "Best Rates",
      description: "We provide the best value for your scrap from our network of Recyclers.",
      image: Img1,
    },
    {
      id: 2,
      title: "Convenience",
      description: "Doorstep pickup according to user's convenient date & time.",
      image: Img2,
    },
    {
      id: 3,
      title: "Trust",
      description: "Trained & Verified Pickup Staff with Swapeco Smart Weighing Scale.",
      image: Img3,
    },
    {
      id: 4,
      title: "Eco-friendly",
      description: "We ensure responsible recycling of your scrap items.",
      image: Img4,
    }
  ];

  return (
    <div className="relative min-h-[40vh] w-full bg-white overflow-hidden pt-16">
      {/* Background Text */}
      <div className="absolute w-full flex items-center justify-center">
        <h1 className="text-6xl lg:text-8xl font-black text-[#cae4c7] tracking-wider opacity-30">
          ABOUT US
        </h1>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#335230]">Why Choose Us</h2>
        
        <div className="flex gap-8 max-w-7xl mx-auto">
          {cardValues.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              description={card.description}
              image={card.image}
            />
          ))}
        </div>
      </div>
      <div className="w-full h-px bg-[#cae4c7] mt-10"></div>


    </div>
  );
};

export default AboutBanner;
