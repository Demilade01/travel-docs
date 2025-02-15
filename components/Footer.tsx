import { footerLinks } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='mx-auto container mt-10 footer'>
      <div className='flex flex-col items-center justify-center'>
        <p className='uppercase font-bold text-sm bg-[#cfdff3] py-2 px-4 rounded-full'>Take Action Now</p>
        <h3 className='text-6xl font-extrabold mt-10 sm:text-center w-[720px]'>Expedite Your Passport Today</h3>
        <p className='text-sm mt-10 capitalize font-light mb-10'>Don't Let Time Hold You Back - Get Your Passport Fast!</p>
        <Image
          src='/assets/footerside.png'
          alt='faq'
          width={100}
          height={100}
          className='w-[200px] h-[200px] relative bottom-[338px] left-[300px]'
        />
        <div className='flex relative top-[-200px] left-[0px] gap-6'>
          <Image
            src="/assets/footer-arrow.png"
            alt='footer-arrow'
            width={50}
            height={50}
            className='mr-3'
          />
          <button className='bg-[#004AAD] border-none rounded-full text-white py-3 px-5 mr-2 border-3'>
            Get Started
          </button>
          <button className='border-[1px] border-[#004AAD] rounded-full py-3 px-5'>
            Learn More
          </button>
      </div>
      </div>

      <div className='flex justify-between'>
        <p className='text-sm font-light'>Copyright 1999-2024 GetMyTravelDocs.com All rights reserved.</p>

        <div className='flex gap-3'>
          {footerLinks.map((link) => (
            <p key={link.link} className='text-sm font-light capitalize gap-2'>{link.link}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer