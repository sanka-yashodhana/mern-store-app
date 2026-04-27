import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (event)=>{
        
        event.preventDefault();
    }

  return (
    <div className='my-24 bg-[#0a0a0a] py-16 px-6 sm:px-12 text-center shadow-2xl'>
      
      
      <div className='flex items-center justify-center gap-3 mb-4'>
        <p className='w-8 md:w-12 h-[2px] bg-[#E5E7EB]'></p>
        <p className='font-bold text-[10px] md:text-xs tracking-[0.3em] text-[#E5E7EB] uppercase'>Join The Syndicate</p>
        <p className='w-8 md:w-12 h-[2px] bg-[#E5E7EB]'></p>
      </div>

     
      <h3 className='text-3xl sm:text-5xl font-black uppercase tracking-tighter text-white mb-4'>
        Subscribe & Get <span className='text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-100'>20% Off</span>
      </h3>
      
      <p className='text-gray-400 font-light text-sm md:text-base max-w-[500px] mx-auto leading-relaxed mb-10'>
        Be the first to know about exclusive drops, secret sales, and early access to our newest heavyweight apparel.
      </p>
      
      
      <form onSubmit={onSubmitHandler} className='w-full sm:w-4/5 md:w-2/3 lg:w-1/2 flex flex-col sm:flex-row mx-auto gap-4 sm:gap-0'>
        <input 
          className='w-full sm:flex-1 bg-white text-black px-6 py-4 outline-none font-semibold text-sm placeholder-gray-400' 
          type='email' 
          placeholder='ENTER YOUR EMAIL' 
          required
        />
        <button 
          type='submit' 
          className='bg-[#222222] hover:bg-gray-600 text-white font-black text-xs md:text-sm px-10 py-4 uppercase tracking-[0.2em] transition-colors sm:border-l sm:border-gray-800'
        >
          Subscribe
        </button>
      </form>

    </div>
  )
}

export default NewsletterBox