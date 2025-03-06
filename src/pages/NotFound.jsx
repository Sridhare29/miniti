import React from 'react'

function NotFound() {
  return (
    <div className='flex flex-auto justify-center items-center bg-green-300 w-full h-full'>
            <img
              src="http://localhost:3000/images/svg/400ErrorBadRequest.svg" 
              alt="400ErrorBaRequest" 
            className="w-full m-32 items-center max-w-md lg:max-w-lg transform hover:scale-110 transition-transform duration-500 "
        />

    </div>
  )
}

export default NotFound
