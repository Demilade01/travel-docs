import { passportContent } from '@/constants'
import Image from 'next/image'
import React from 'react'

const PassportServices = () => {
  return (
    <div className='container mx-auto'>
      <div className='flex flex-col items-center justify-center'>
        <p className='uppercase font-bold text-sm bg-[#cfdff3] py-2 px-4 rounded-full'>Streamlined process</p>
        <h3 className='text-5xl font-extrabold mt-10 sm:text-center w-[520px]'>Our Passport Expedited Services</h3>
        <p className='text-sm mt-10 capitalize font-light mb-10'>Tailored Solutions for Your Passport Needs</p>
      </div>

        <div className='flex justify-between flex-wrap mx-auto items-center w-[800px] h-[400px] gap-4'>
          {passportContent.map((pass) => (
            <div key={pass.title} className='flex'>
              <div className='flex space-x-4 gap-4 bg-card items-center'>
                <Image
                  src={pass.image}
                  alt={pass.title}
                  width={20}
                  height={20}
                  className='h-10 w-10'
                />

                <p className='text-2xl font-bold text-nowrap'>{pass.title}</p>
              </div>
                <button className='passport-arrow px-10 py-5 h-full w-full'>
                </button>
            </div>
          ))}
        </div>
    </div>
  )
}

export default PassportServices