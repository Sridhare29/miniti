import React from 'react'

function OurServicesBanner() {
  return (
    <div className='flex flex-col bg-gradient-to-r from-[#4DA674] via-[#7edaa6] to-[#4DA674] my-8 justify-center items-center py-8 px-4 text-center'>
      <div className="flex pb-2 bg-red-300 text-[30px] lg:text-[50px] font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 animate-fade-in">
      <h1>Our Services</h1>
      </div>
      <div className="flex mx-4 font-medium ">
      <p>We offer comprehensive scrap collection services for both households and corporate entities. Our services include the collection of electronic waste, metal scrap, plastic waste, and paper waste. We ensure that all collected materials are properly recycled and disposed of in an environmentally friendly manner.</p>
      </div>
    </div>
  )
}

export default OurServicesBanner
