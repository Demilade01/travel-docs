import About from '@/components/About'
import Faq from '@/components/FAQ'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import PassportServices from '@/components/PassportServices'
import ServiceSpeeds from '@/components/ServiceSpeeds'
import Testimonials from '@/components/Testimonials'
import React from 'react'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <PassportServices />
      <ServiceSpeeds />
      <Testimonials />
      <Faq />
      <Footer />
    </>
  )
}

export default Home