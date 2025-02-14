import { serviceSpeeds } from '@/constants'
import React from 'react'
import ServiceCards from './ServiceCards'

const ServiceSpeeds = () => {
  return (
    <div className='container mx-auto'>
      <div className='flex flex-col items-center justify-center'>
        <h3 className='text-5xl font-extrabold mt-10 sm:text-center'>Service Speeds</h3>
        <p className='text-sm mt-10 capitalize font-light mb-10'>We offer a variety of service speeds to meet your international travel needs</p>
      </div>

    <div className='flex gap-4 justify-between flex-wrap mx-auto items-center w-[700px] h-[400px] mb-32'>
      {serviceSpeeds.map((service) => (
        <div key={service.title} >
          <ServiceCards
            title={service.title}
            price={service.price}
            days={service.days}
          />
          <button className='speed-start '>
            Get Started
          </button>
        </div>
      ))}
    </div>
    </div>
  )
}

export default ServiceSpeeds