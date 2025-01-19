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
    <div className="w-full">
      <Header />
      <section id="main-banner">
        <MainBanner />
      </section>
      <section id="quote-banner">
        <QuoteBanner />
      </section>
      <section id="about-banner">
        <AboutBanner />
      </section>
      <section id="services-banner">
        <OurServicesBanner />
      </section>
      <section id="booking-banner">
        <BookingBanner />
      </section>
      <section id="footer">
        <EcoFooter />
      </section>
    </div>
  );
}


export default Home
