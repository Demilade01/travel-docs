import React from 'react'

interface ServiceCardProps {
  title: string;
  price: string;
  days: string;
}

const ServiceCards = ({ title, price, days}: ServiceCardProps) => {
  return (
    <div className='flex flex-wrap justify-between gap-4'>
      <div className='flex flex-col justify-center space-x-4 gap-4 bg-service items-center'>
        <h4 className='text-xl capitalize font-bold text-nowrap'>{title}</h4>
        <div className='flex flex-col items-start'>
          <p className='text-5xl font-bold mb-3'>{price}</p>
          <p className='text-sm font-thin'>{days}</p>
        </div>
      </div>
    </div>
  )
}

export default ServiceCards