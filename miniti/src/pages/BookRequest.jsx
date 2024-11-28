import React from 'react'

const BookRequest = () => {
  return (
    <div className='flex w-full'>
      <div className="flex w-full m-16 justify-center">
      <div className="w-full  lg:w-1/2 flex flex-col justify-center">
           <button>
           <img 
              src="http://localhost:3000/images/svg/Waste management-amico.svg" 
              alt="Recycling and Environmental Protection" 
              className="w-1/4 transform hover:scale-110 justify-center items-center flex transition-transform duration-500 rounded-xl border-4"
            />
           </button>
           <p className='flex text-[20px] p-2 items-center font-semibold justify-center'>HouseHold</p>
          </div>
          <div className="w-full lg:w-1/2 flex-col flex justify-center">
           <button>
           <img 
              src="http://localhost:3000/images/svg/Waste management-amico.svg" 
              alt="Recycling and Environmental Protection" 
              className="w-1/4 transform hover:scale-110 justify-center items-center flex transition-transform duration-500 rounded-xl border-4"
            />
           </button>
           <p className='flex text-[20px] p-2 items-center font-semibold justify-center'>Corperate</p>
          </div>
      </div>
    </div>
  )
}

export default BookRequest
