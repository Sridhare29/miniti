import React from 'react';

const BookRequest = () => {
  return (
    <div className="flex w-full min-h-screen items-center bg-gray-50">
      <div className="container mx-auto p-6">
        <div className="flex flex-row justify-center gap-2">
          {/* Household Option */}
          <div className="flex flex-col items-center w-full md:w-1/3 lg:w-1/4">
            <button className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center transition-transform transform hover:scale-105">
              <img
                src="http://localhost:3000/images/svg/Waste management-amico.svg"
                alt="Household"
                className="w-full h-full object-contain rounded-xl border-4 border-green-400"
              />
            </button>
            <p className="text-lg font-semibold mt-4 text-center">Household</p>
          </div>

          {/* Corporate Option */}
          <div className="flex flex-col items-center w-full md:w-1/3 lg:w-1/4">
            <button className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center transition-transform transform hover:scale-105">
              <img
                src="http://localhost:3000/images/svg/Waste management-amico.svg"
                alt="Corporate"
                className="w-full h-full object-contain rounded-xl border-4 border-blue-400"
              />
            </button>
            <p className="text-lg font-semibold mt-4 text-center">Corporate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookRequest;
