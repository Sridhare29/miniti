import React from "react";
import Card from "../Card";

const AboutBanner = () => {
  // Card data stored in an array
  const cardValues = [
    {
      id: 1,
      title: "Best Rates",
      description: "We provide the best value for your scrap from our network of Recyclers.",
      image: "http://localhost:3000/images/svg/Garbage management-amico.svg",
    },
    {
      id: 2,
      title: "Convenience",
      description: "Doorstep pickup according to user's convenient date & time.",
      image: "http://localhost:3000/images/Garbage management-bro.svg",
    },
    {
      id: 3,
      title: "Trust",
      description: "Trained & Verified Pickup Staff with Swapeco Smart Weighing Scale.",
      image: "http://localhost:3000/images/svg/Garbage management-amico.svg",
    },
    {
        id: 4,
        title: "Eco-friendly",
        description: "We ensure responsible recycling of your scrap items.",
        image: "http://localhost:3000/images/svg/Garbage management-pana.svg",
      },
  ];

  return (
    <div className="w-full mt-12">
      <div className="flex flex-row items-center px-6 gap-1">
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
  );
};

export default AboutBanner;
