import Image from 'next/image'
import React from 'react'

interface RevieCardProps {
  review: string
  name: string
  image: string
}

const ReviewCard = ({ review, name, image}: RevieCardProps) => {
  return (
    <div className='flex flex-wrap justify-between gap-4'>
      <div className='review-card'>
        <p className='text-[12px] font-light mb-20'>{review}</p>
        <div className='flex items-start justify-start mt-4'>
          <Image src={image} alt={name} width={10} height={10} className='w-5 h-5 rounded-full' />
          <div className='flex flex-col ml-4 items-start'>
            <p className='font-semibold'>{name}</p>
            <div className='flex items-center justify-start mt-[-20px]'>
            {[...Array(5)].map((_, i) => (
              <Image
                key={i}
                src="/assets/star.png"
                alt='star'
                width={30}
                height={5}
                className='ml-1 object-fit h-2 w-2 mt-4'
              />
            ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard