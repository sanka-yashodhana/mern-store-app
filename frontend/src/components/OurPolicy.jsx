import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='my-24'>
     
      <div className='flex flex-col sm:flex-row justify-between gap-10 sm:gap-0 border-y-2 border-black py-16 text-center bg-[#FBFBFB]'>
        
        
        <div className='flex-1 flex flex-col items-center sm:border-r-2 border-black px-4 group'>
            
            <div className='w-16 h-16 flex items-center justify-center bg-black mb-6 group-hover:-translate-y-2 transition-transform duration-300 shadow-lg'>
                <img src={assets.exchange_icon} className='w-8 invert' alt='exchange'/>
            </div>
            <p className='font-black uppercase tracking-[0.15em] text-sm md:text-base mb-2 text-black'>
              Easy Exchange
            </p>
            <p className='text-gray-500 font-medium text-xs md:text-sm max-w-[220px]'>
              Hassle-free sizing exchanges on all apparel drops.
            </p>
        </div>

        
        <div className='flex-1 flex flex-col items-center sm:border-r-2 border-black px-4 group'>
            <div className='w-16 h-16 flex items-center justify-center bg-black mb-6 group-hover:-translate-y-2 transition-transform duration-300 shadow-lg'>
                <img src={assets.quality_icon} className='w-8 invert' alt='return'/>
            </div>
            <p className='font-black uppercase tracking-[0.15em] text-sm md:text-base mb-2 text-black'>
              7 Days Return
            </p>
            <p className='text-gray-500 font-medium text-xs md:text-sm max-w-[220px]'>
              Not feeling the fit? Send it back within 7 days.
            </p>
        </div>

        
        <div className='flex-1 flex flex-col items-center px-4 group'>
            <div className='w-16 h-16 flex items-center justify-center bg-black mb-6 group-hover:-translate-y-2 transition-transform duration-300 shadow-lg'>
                <img src={assets.support_img} className='w-8 invert' alt='support'/>
            </div>
            <p className='font-black uppercase tracking-[0.15em] text-sm md:text-base mb-2 text-black'>
              24/7 Support
            </p>
            <p className='text-gray-500 font-medium text-xs md:text-sm max-w-[220px]'>
              Our team is always online to help you secure your gear.
            </p>
        </div>

      </div>
    </div>
  )
}

export default OurPolicy