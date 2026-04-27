import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='relative w-full h-[70vh] sm:h-[80vh] flex flex-col sm:flex-row bg-[#0a0a0a] overflow-hidden mb-10'>
      
     
      <div className='w-full sm:w-1/2 flex flex-col justify-center px-8 sm:px-16 z-10 relative'>
        <div className='text-white'>
          
         
          <div className='flex items-center gap-3 mb-6 mt-10 sm:mt-0'>
            <p className='w-8 md:w-12 h-[2px] bg-[#E5E7EB]'></p>
            <p className='font-bold text-xs md:text-sm tracking-[0.3em] text-[#E5E7EB] uppercase'>
              Season 01 / Drop
            </p>
          </div>

         
          <h1 className='text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-white'>
            Own <br /> 
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-100'>
              The Streets
            </span>
          </h1>

          <p className='mt-6 text-gray-400 text-sm md:text-base max-w-[400px] leading-relaxed font-light'>
            Premium streetwear and modern daily essentials. Gear up with the latest exclusive designs built for the culture.
          </p>

         
          <div className='flex items-center gap-6 mt-10'>
            <Link to='/collection' className='bg-white text-black px-8 py-3 font-bold uppercase tracking-wider text-sm hover:bg-gray-200 hover:scale-105 transition-all duration-300'>
              Shop Latest
            </Link>
            <div className='flex items-center gap-2 group cursor-pointer'>
              <Link to='/about' className='font-semibold text-sm uppercase tracking-widest text-white group-hover:text-gray-300 transition-colors'>
                About Us
              </Link>
              <p className='w-8 h-[1px] bg-white group-hover:w-12 transition-all duration-300'></p>
            </div>
          </div>

        </div>
      </div>

      
      <div className='absolute sm:relative inset-0 sm:inset-auto w-full sm:w-1/2 h-full opacity-40 sm:opacity-100 z-0 group'>
        <div className='absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-transparent z-10 hidden sm:block pointer-events-none'></div>
        <img 
          className='w-full h-full object-cover object-center sm:grayscale group-hover:grayscale-0 transition duration-100 ease-in-out' 
          src={assets.hero_img} 
          alt="Latest Drop" 
        />
      </div>

    </div>
  )
}

export default Hero