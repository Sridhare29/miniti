import React from "react";

function Card(props) {
  return (
    <div className="flex flex-col lg:flex-row items-center w-full max-w-sm lg:max-w-md bg-green-100 rounded-lg shadow-lg overflow-hidden m-4">
      {/* Image Section */}
      <div className="flex-shrink-0  p-2">
        <img
          src={props.image}
          alt="Recycling Illustration"
          className="w-full object-contain"
        />
      </div>

      {/* Text Content Section */}
      <div className="flex flex-col justify-center bg-blue-100 p-4 w-full">
        <h3 className="text-lg font-bold text-gray-800">{props.title}</h3>
        <p className="mt-2 text-sm text-gray-600">{props.description}</p>
      </div>
    </div>
  );
}

export default Card;
