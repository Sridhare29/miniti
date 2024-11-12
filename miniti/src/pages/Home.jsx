import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular'
import OfferBanner from '../components/Banner/OfferBanner'

function Home() {
  return (
    <div className='w-full'>
      <Hero/>
      <Popular/>
      <OfferBanner/>
    </div>
  )
}

export default Home
