import React from 'react'
import Header from '../components/Header'
import MainBanner from '../components/Layout/MainBanner'
import { QuoteBanner } from '../components/Layout/QuoteBanner'
import AboutBanner from '../components/Layout/AboutBanner'

function Home() {
  return (
    <div className='w-full'>
        <Header/>
        <MainBanner/>
        <QuoteBanner/>
        <AboutBanner/>
    </div>
  )
}

export default Home
