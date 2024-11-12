import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular'
import OfferBanner from '../components/Banner/OfferBanner'
import NewCollection from '../components/New Collection/NewCollection'
import NewsLetter from '../components/NewsLetter/NewsLetter'

function Home() {
  return (
    <div className='w-full'>
      <Hero/>
      <Popular/>
      <OfferBanner/>
      <NewCollection/>
      <NewsLetter/>
    </div>
  )
}

export default Home
