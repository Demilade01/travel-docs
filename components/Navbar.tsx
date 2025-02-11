import { navLinks } from '@/constants'
import { link } from 'fs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='container mx-auto flex justify-between items-center py-6'>
      <div className='flex items-center'>
        <Image
          src="/assets/logo.png"
          alt="logo"
          width={150}
          height={100}
          className='cursor-pointer'
        />
      </div>
      <div className='flex justify-end items-center gap-6'>
        {navLinks.map((link) => (
          <nav className=''>
            <Link
              key={link.title}
              href={link.href}
            >
              <p className='text-xl font-sans'>{link.title}</p>
            </Link>
          </nav>
        ))}
      </div>
      <button className='bg-[#004AAD] border-none rounded-full text-white py-5 px-5'>
        800-860-8610
      </button>
    </div>
  )
}

export default Navbar