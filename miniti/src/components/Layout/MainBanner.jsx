import React from 'react'

const MainBanner = () => {
  return (
    <div className='w-full md-lg:mt-6'>
        <div className="w-[95%] lg:w-[90%] mx-auto  flex  justify-between">
        <div className="flex flex-col m-4 w-[30%] justify-center items-start">
        <p className='font-extrabold text-5xl font-inter'>Sell your recyclables</p>
        <p className='font-extrabold text-5xl font-inter'>online with</p>
        <span className=' font-extrabold text-5xl font-inter'>Miniti!</span>
        </div>
        <div className="flex m-4 w-[30%] justify-center items-center">
        <img
            src="http://localhost:3000/images/Save the Earth-amico.svg"
            alt="Language"
            className=" m-4 justify-center items-center "
            />     
       </div>

        </div>
      
    </div>
  )
}

export default MainBanner
