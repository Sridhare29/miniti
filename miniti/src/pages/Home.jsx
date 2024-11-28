import React from 'react'
import Header from '../components/Header'
import MainBanner from '../components/Layout/MainBanner'
import { QuoteBanner } from '../components/Layout/QuoteBanner'
import AboutBanner from '../components/Layout/AboutBanner'
import OurServicesBanner from '../components/Layout/OurServicesBanner'
import BookingBanner from '../components/Layout/BookingBanner'
import EcoFooter from '../components/Layout/EcoFooter'

function Home() {
  return (
    <div className='w-full'>
        <Header/>
        <MainBanner/>
        <QuoteBanner/>
        <AboutBanner/>
        <OurServicesBanner/>
        <BookingBanner/>
        <EcoFooter/>
    </div>
  )
}

export default Home
