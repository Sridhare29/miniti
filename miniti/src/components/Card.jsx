import React from "react";

function Card(props) {
  return (
    <div className="w-fit flex m-4 bg-green-200">
      <div className=" flex  bg-orange-200">
        <img
          src={props.image}
          alt="Recycling Illustration"
          className="mt-4 w-40 h-50 p-2 items-center lg:w-36"
        />
      </div>
      <div className=" flex flex-col w-fit bg-blue-300">
        <p className="p-2 text-lg font-semibold">{props.titile}</p>
        <p className="p-2 text-sm">{props.decription}</p>
      </div>
    </div>
  );
}

export default Card;
