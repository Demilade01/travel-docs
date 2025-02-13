import About from '@/components/About'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import PassportServices from '@/components/PassportServices'
import React from 'react'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <PassportServices />
    </>
  )
}

export default Home