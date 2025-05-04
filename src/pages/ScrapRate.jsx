import React from 'react';
import apiFactory from '../Api/@factories/api.factory';
import { services } from '../Api';
import imagerate from '../image/Aboutus/Eco2.png';
import Header from '../components/Header';

const PriceCard = ({ title, rate, note, imgSrc }) => (
  <div className="relative group p-4 bg-white rounded-lg w-full shadow-md hover:shadow-lg transition-all duration-300 border-2 border-[#cae4c7] mb-4">
    {imgSrc && (
      <img
        src= {imagerate}
        alt={title}
        className="w-full h-40 object-cover rounded-md mb-3"
      />
    )}
    <h3 className="text-lg font-semibold text-[#335230] mb-2">{title}</h3>
    <div className="text-[#baa53c] font-bold text-xl mb-1">₹{rate}</div>
    {note && <p className="text-sm text-gray-600 italic">{note}</p>}
    <div className="absolute -right-2 -top-2 w-8 h-8 bg-[#cae4c7] opacity-20 rounded-full"></div>
  </div>
);


const CategorySection = ({ title, items }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold text-[#335230] mb-4 border-b-2 border-[#cae4c7] pb-2">{title}</h2>
    <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map((item, index) => (
        <PriceCard key={index} {...item} />
      ))}
    </div>
  </div>
);

const ScrapRate = () => {
  const categories = {
    paper: {
      title: "Paper & Cardboard",
      items: [
        { title: "Newspaper", rate: "14/kg", note: "Market Rates Dropped Recently" },
        { title: "Office Paper (A3/A4)", rate: "14/kg" },
        { title: "Copies/Books", rate: "12/kg" },
        { title: "Cardboard", rate: "8/kg", note: "To get quote for bulk qty. call at +91-44-9099-2355" }
      ]
    },
    metals: {
      title: "Metals",
      items: [
        { title: "Iron", rate: "26/kg", note: "To get quote for bulk qty. call at +91-44-9099-2355" },
        { title: "Steel Utensils", rate: "40/kg" },
        { title: "Aluminium", rate: "105/kg" },
        { title: "Brass", rate: "305/kg" },
        { title: "Copper", rate: "425/kg" }
      ]
    },
    largeAppliances: {
      title: "Large Appliances",
      items: [
        { title: "Split AC Copper Coil 1.5 Ton", rate: "4150/piece", note: "Indoor + Outdoor" },
        { title: "Window AC 1.5 Ton", rate: "4050/piece", note: "Copper Coil" },
        { title: "Front Load Washing Machine", rate: "1350/piece", note: "Fully Automatic" },
        { title: "Single Door Fridge", rate: "1100/piece" },
        { title: "Double Door Fridge", rate: "1350/piece" },
        { title: "Iron Cooler", rate: "30/kg" },
        { title: "Plastic Cooler", rate: "15/kg" }
      ]
    },
    smallAppliances: {
      title: "Small Appliances",
      items: [
        { title: "Printer/Scanner/Fax", rate: "20/kg" },
        { title: "Metal E-waste", rate: "28/kg" },
        { title: "Plastic E-waste", rate: "15/kg" },
        { title: "CRT TV", rate: "200/piece" },
        { title: "Ceiling Fan", rate: "35/kg" },
        { title: "Microwave", rate: "350/piece" },
        { title: "UPS", rate: "180/piece" }
      ]
    },
    computers: {
      title: "Mobiles & Computers",
      items: [
        { title: "Scrap Laptop", rate: "300/piece" },
        { title: "CRT Monitor", rate: "150/piece" },
        { title: "LCD Monitor", rate: "20/kg" },
        { title: "Computer CPU", rate: "225/piece" }
      ]
    },
    others: {
      title: "Others",
      items: [
        { title: "Bike", rate: "2100/piece" },
        { title: "Clothes", rate: "2/kg", note: "Accepted only when given with other scrap items (We don't accept undergarments)" },
        { title: "Glass Bottles", rate: "2/kg", note: "Accepted only when given with other scrap items" },
        { title: "PET Bottles/Other Plastic", rate: "8/kg" }
      ]
    }
  };

  async function fetchAddress() {
    try {
      const data = await services.AddressApi.api.getAddressData();
      console.log('Fetched address data:', data);
    } catch (error) {
      console.error('Error fetching address data:', error.message);
    }
  }
  
  fetchAddress();
  return (
    <div >
      <Header/>
      <div className="relative min-h-screen bg-gray-50 py-2 px-4">
              {/* Background Text */}
      <div className="absolute w-full flex items-center justify-center">
        <h1 className="text-6xl lg:text-8xl font-black text-[#cae4c7] tracking-wider opacity-30">
          PRICE LIST
        </h1>
      </div>

      <div className="relative container mx-auto z-10">
        <h1 className="text-4xl font-bold text-center text-[#335230] mb-12">Current Scrap Rates</h1>
        
        {Object.values(categories).map((category, index) => (
          <CategorySection key={index} {...category} />
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[#cae4c7] opacity-10 rounded-full -translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#cae4c7] opacity-10 rounded-full translate-x-16 translate-y-16"></div>
      </div>
    </div>
  );
};

export default ScrapRate