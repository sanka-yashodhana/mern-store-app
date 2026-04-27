import React from 'react'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div className='pt-10 border-t-2 border-black'>
      
      
      <div className='text-center mt-8 mb-16'>
        <div className='flex items-center justify-center gap-3 mb-4'>
            <p className='w-8 md:w-12 h-[2px] bg-black'></p>
            <p className='font-bold text-xs md:text-sm tracking-[0.3em] text-black uppercase'>Get In Touch</p>
            <p className='w-8 md:w-12 h-[2px] bg-black'></p>
        </div>
        <h1 className='text-4xl sm:text-5xl font-black uppercase tracking-tighter text-black'>
          Contact <span className='text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-200'>HQ</span>
        </h1>
      </div>

      
      <div className='my-10 flex flex-col justify-center md:flex-row gap-12 sm:gap-16 items-center mb-28'>
        
        
        <div className='w-full md:max-w-[450px] border-2 border-black p-2 bg-[#FAFAFA] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
            <img src={assets.contact_img} alt='contact' className='w-full grayscale-0 sm:grayscale hover:grayscale-0  transition-all duration-700 object-cover'/>
        </div>
        
        
        <div className='flex flex-col justify-center items-start gap-8 md:w-1/2 w-full'>
          
          
          <div className='border-l-4 border-black pl-6'>
              <p className='font-black text-xl uppercase tracking-[0.15em] text-black mb-2'>The Syndicate HQ</p>
              <p className='text-gray-500 font-medium text-sm leading-relaxed uppercase tracking-wide'>
                Colombo<br />
                Western Province, Sri Lanka
              </p>
          </div>

         
          <div className='border-l-4 border-black pl-6'>
              <p className='font-black text-xl uppercase tracking-[0.15em] text-black mb-2'>Direct Line</p>
              <p className='text-gray-500 font-medium text-sm leading-relaxed tracking-wide'>
                TEL: +94 72 671 7368 <br/> 
                EMAIL: contact@foreveryou.com
              </p>
          </div>

         
          <div className='border-l-4 border-black pl-6 mb-2'>
              <p className='font-black text-xl uppercase tracking-[0.15em] text-black mb-2'>Join The Roster</p>
              <p className='text-gray-500 font-medium text-sm leading-relaxed'>
                We are always looking for visionary creators and operators to join the team.
              </p>
          </div>
          
          
          <button className='border-2 border-black bg-white text-black font-black uppercase tracking-[0.2em] px-8 py-4 text-xs hover:bg-black hover:text-white transition-colors duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1'>
            Explore Openings
          </button>
          
        </div>
      </div>
      
      <NewsletterBox/>
      
    </div>
  )
}

export default Contact