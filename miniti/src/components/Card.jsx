import React from "react";

function Card(props) {
  return (
    <div className="relative group overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#cae4c7]">
      {/* Image Section */} 
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-[#335230] opacity-10 group-hover:opacity-0 transition-opacity duration-300"></div>
        <img
          src={props.image}
          alt={props.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        {/* Decorative leaf overlay */}
        <div className="absolute -right-6 -top-6 w-16 h-16 bg-[#cae4c7] opacity-20 rounded-full"></div>
      </div>

      {/* Text Content Section */}
      <div className="p-6 relative">
        <h3 className="text-2xl font-bold text-[#335230] mb-3 group-hover:text-[#baa53c] transition-colors duration-300">
          {props.title}
        </h3>
        <p className="text-[#335230]/80 leading-relaxed">
          {props.description}
        </p>
        
        {/* Decorative elements */}
        <div className="absolute w-20 h-20 -bottom-10 -left-10 bg-[#cae4c7] opacity-10 rounded-full"></div>
        
        {/* Learn More button */}
        <div className="mt-4">
          <button className="text-[#baa53c] font-semibold hover:text-[#335230] transition-colors duration-300 flex items-center gap-2">
            Learn More
            <svg 
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Hover effect border */}
      <div className="absolute inset-0 border-2 border-[#cae4c7] opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
    </div>
  );
}

export default Card;