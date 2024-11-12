import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular'
import OfferBanner from '../components/Banner/OfferBanner'
import NewCollection from '../components/New Collection/NewCollection'

function Home() {
  return (
    <div className='w-full'>
      <Hero/>
      <Popular/>
      <OfferBanner/>
      <NewCollection/>
    </div>
  )
}

export default Home
