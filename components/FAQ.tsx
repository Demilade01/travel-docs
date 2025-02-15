import { faq } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Faq = () => {
  return (
    <div className='container mx-auto'>
      <div className='flex flex-col items-center justify-center'>
        <p className='uppercase font-bold text-sm bg-[#cfdff3] py-2 px-4 rounded-full'>Everything you need to know</p>
        <h3 className='text-6xl font-extrabold mt-10 sm:text-center w-[720px]'>Frequently Asked Questions</h3>
        <p className='text-sm mt-10 capitalize font-light mb-10'>Answers to Common Queries About Our Passport Expedited Service.</p>
      </div>

      <div className='flex justify-between flex-wrap mx-auto items-center w-[800px] h-[400px]'>
        {faq.map((faq) => (
          <div key={faq.question} className='flex flex-col'>
            <div className='flex flex-row gap-2 items-center w-[800px] justify-between'>
              <p className='text-md font-bold text-nowrap'>{faq.question}</p>
              <Image
                src={faq.image}
                alt="add"
                width={10}
                height={10}
                className='h-5 w-5 cursor-pointer'
              />

            </div>
            <hr className='border-[#000341] mt-5' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Faq