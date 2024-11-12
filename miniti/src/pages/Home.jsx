import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular'

function Home() {
  return (
    <div className='w-full'>
        <Hero/>
      <h2>Home!</h2>
      <Popular/>
    </div>
  )
}

export default Home
