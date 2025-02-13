import About from '@/components/About'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import PassportServices from '@/components/PassportServices'
import ServiceSpeeds from '@/components/ServiceSpeeds'
import React from 'react'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <PassportServices />
      <ServiceSpeeds />
    </>
  )
}

export default Home