import { aboutContent } from '@/constants'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='container mx-auto px-4 mb-[100px]'>
      <div className='flex flex-col items-center justify-center'>
        <p className='uppercase font-bold text-sm bg-[#cfdff3] py-2 px-4 rounded-full'>Our Passport Expedited Services</p>
        <h3 className='text-6xl font-extrabold mt-10 sm:text-center  w-[620px]'>How We Expedite Your Passport</h3>
        <p className='text-sm mt-10 capitalize font-light'>Tailored Solutions for Your Passport Needs</p>
      </div>

      {aboutContent.map((content) => (
        <div className='flex flex-col items-center justify-between mt-20' key={content.title}>
              <div className='bg-[#cfdff3] p-6 rounded-full' >
                <Image
                  key={content.title}
                  src={content.image}
                  alt={content.title}
                  width={20}
                  height={20}
                  className='w-10 h-10'
                />
              </div>
            <div className='flex flex-col items-center mt-5'>
              <h3 className='text-3xl capitalize font-bold'>{content.title}</h3>
              <p className='mt-4 capitalize font-xl'>{content.subTitle}</p>
            </div>
        </div>
      ))}
    </div>
  )
}

export default About