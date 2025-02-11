import { heroLogos } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <>
    <div className='container mx-auto flex items-center justify-around mt-10'>
      <div className='flex flex-col'>
          <p className='uppercase text-sm mb-10'>Effortless Passport Solutions</p>
          <h1 className='font-extrabold text-5xl'>Get your US Passport Fast!</h1>
          <p className='text-md capitalize mt-5'>
            Skip the <span className='font-extrabold capitalize'>passport office</span> hassle. Our nationwide couriers and expert advisors will <span className='capitalize font-extrabold'>expedite your passport</span>
          </p>

          <div className='flex gap-6 mt-20'>
            <button className='bg-[#004AAD] border-none rounded-full text-white py-5 px-5 mr-5 border-5'>
              Get Started
            </button>
            <button className='border-2 border-[#004AAD] rounded-full py-5 px-5'>
              How does it work
            </button>
          </div>

          <div className='mt-20 flex'>
            <Image
              src="/assets/greenstar.png"
              alt='greenstar'
              width={40}
              height={40}
            />
            <p className='text-2xl text-black mt-3 font-bold mr-4'>Trustpilot</p>
            {[...Array(5)].map((_, i) => (
              <Image
                key={i}
                src="/assets/star.png"
                alt='star'
                width={30}
                height={5}
                className='ml-2 object-fit  h-6 mt-3'
              />
            ))}
            <p className='font-light mt-3 ml-3 text-2xl'>4900+  5 Stars</p>
          </div>
        </div>
        <Image
          src="/assets/passport.png"
          alt='hero'
          width={500}
          height={500}
        />
    </div>
    <div className='container mx-auto flex justify-between items-center mt-20 mb-[200px]'>
      {heroLogos.map((logo) => (
          <Image
            key={logo.logo}
            src={logo.logo}
            alt={logo.alt}
            width={100}
            height={100}
            className='h-25 w-25'
          />
      ))}
    </div>
    </>
  )
}

export default Hero