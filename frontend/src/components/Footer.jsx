import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='mt-32 pt-16 border-t-4 border-black'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 mb-10 px-4 sm:px-[5vw] text-sm'>
          
          {/* Branding Section */}
          <div>
            <img src={assets.logo} className='mb-6 w-36 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer' alt='logo'/>
            <p className='w-full md:w-3/4 text-gray-500 font-medium leading-relaxed'>
                Engineered for the culture. We specialize in premium streetwear and elevated daily essentials, bridging the gap between raw aesthetics and modern utility.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <p className='text-lg font-black tracking-[0.15em] mb-6 uppercase text-black'>The Syndicate</p>
            <ul className='flex flex-col gap-3 text-gray-500 font-semibold uppercase text-xs tracking-wider'>
                <li className='hover:text-black transition-colors cursor-pointer w-fit'><Link to='/'>Home</Link></li>
                <li className='hover:text-black transition-colors cursor-pointer w-fit'><Link to='/about'>About Us</Link></li>
                <li className='hover:text-black transition-colors cursor-pointer w-fit'><Link to='/collection'>Collection</Link></li>
                <li className='hover:text-black transition-colors cursor-pointer w-fit'><Link to='/contact'>Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <p className='text-lg font-black tracking-[0.15em] mb-6 uppercase text-black'>HQ / Contact</p>
            <ul className='flex flex-col gap-3 text-gray-500 font-semibold text-xs tracking-wider'>
                <li className='uppercase'>Colombo, Sri Lanka</li>
                <li className='hover:text-black transition-colors cursor-pointer'>+94 72 123 4567</li>
                <li className='hover:text-black transition-colors cursor-pointer font-medium lowercase'>contact@foreveryou.com</li>
            </ul>
          </div>
          
        </div>
        
        {/* Bottom Bar */}
        <div className='border-t border-gray-100 bg-[#FAFAFA]'>
            <p className='py-6 text-xs text-center font-bold tracking-[0.2em] uppercase text-gray-400'>
              © 2026 Forever.com — All Rights Reserved.
            </p>
        </div>
    </div>
  )
}

export default Footer