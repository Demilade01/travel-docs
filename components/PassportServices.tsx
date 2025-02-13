import { passportContent } from '@/constants'
import Image from 'next/image'
import React from 'react'

const PassportServices = () => {
  return (
    <div className='container mx-auto '>
      <div className='flex flex-col items-center justify-center'>
        <p className='uppercase font-bold text-sm bg-[#cfdff3] py-2 px-4 rounded-full'>Streamlined process</p>
        <h3 className='text-6xl font-extrabold mt-10 sm:text-center'>How We Expedite Your Passport</h3>
        <p className='text-sm mt-10 capitalize font-light'>Discover the simplicity behind our passport expedited services</p>
      </div>

      <div>
        {passportContent.map((pass) => (
          <div key={pass.title} className='grid grid-cols-3 gap-4'>
            <Image
              src={pass.image}
              alt={pass.title}
              width={20}
              height={20}
            />

            <p>{pass.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PassportServices