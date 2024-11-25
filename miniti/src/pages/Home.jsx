import React from 'react'
import Header from '../components/Header'
import MainBanner from '../components/Layout/MainBanner'
import { QuoteBanner } from '../components/Layout/QuoteBanner'

function Home() {
  return (
    <div className='w-full'>
        <Header/>
        <MainBanner/>
        <QuoteBanner/>
    </div>
  )
}

export default Home
