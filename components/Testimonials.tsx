import { customerReviews } from '@/constants'
import React from 'react'
import ReviewCard from './ReviewCard'

const Testimonials = () => {
  return (
    <div className='container mx-auto  mb-[400px]'>
      <div className='flex flex-col items-center justify-center'>
        <p className='uppercase font-bold text-sm bg-[#cfdff3] py-2 px-4 rounded-full'>Raving Reviews</p>
        <h3 className='text-6xl font-extrabold mt-10 sm:text-center w-[720px]'>Hear From Our Satisfied Customers</h3>
        <p className='text-sm mt-10 capitalize font-light mb-10'>Find out why our customers trust us with their passport needs and travel dreams.</p>
      </div>

        <div className='flex justify-between flex-wrap mx-auto items-center w-[650px] h-[400px] gap-4'>
          {customerReviews.map((review) => (
            <div key={review.name}>
              <ReviewCard
                review={review.review}
                name={review.name}
                image={review.image}
              />
            </div>
          ))}
        </div>
    </div>
  )
}

export default Testimonials