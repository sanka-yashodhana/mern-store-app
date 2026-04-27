import React from 'react'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div className='pt-10 border-t-2 border-black'>
      
      
      <div className='text-center mt-8 mb-16'>
        <div className='flex items-center justify-center gap-3 mb-4'>
            <p className='w-8 md:w-12 h-[2px] bg-black'></p>
            <p className='font-bold text-xs md:text-sm tracking-[0.3em] text-black uppercase'>The Origin</p>
            <p className='w-8 md:w-12 h-[2px] bg-black'></p>
        </div>
        <h1 className='text-4xl sm:text-5xl font-black uppercase tracking-tighter text-black'>
          About <span className='text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-200'>The Syndicate</span>
        </h1>
      </div>

      
      <div className='my-10 flex flex-col md:flex-row gap-12 sm:gap-16 items-center'>
        
        
        <div className='w-full md:max-w-[450px] border-2 border-black p-2 bg-[#FAFAFA] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
            <img src={assets.about_img} alt='about' className='w-full grayscale-0 sm:grayscale hover:grayscale-0 transition-all duration-700 object-cover'/>
        </div>
        
        
        <div className='flex flex-col justify-center gap-6 md:w-1/2 text-gray-600 text-sm md:text-base leading-relaxed'>
          <p>
            Born from a vision to redefine modern street fashion, we started with a simple goal: bridging the gap between football culture and premium everyday apparel. We wanted gear that looked just as good on the pavement as it does in the stands.
          </p>
          <p>
            Every piece we drop is strictly curated. From heavy-weight cotton graphic tees to athletic outerwear, we focus on raw aesthetics, sharp cuts, and unmatched durability. We aren't just selling clothes; we are outfitting a culture.
          </p>
          
          <div className='mt-4 border-l-4 border-black pl-6 py-2'>
              <b className='text-black font-black uppercase tracking-[0.15em] text-lg block mb-2'>Our Mission</b>
              <p className='font-medium'>
                To engineer high-fidelity streetwear that empowers creators, athletes, and hustlers to own their style without compromise. 
              </p>
          </div>
        </div>
      </div>

      
      <div className='text-center mt-32 mb-16'>
        <h2 className='text-3xl sm:text-4xl font-black uppercase tracking-tighter text-black'>
          Why <span className='text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-200'>Choose Us</span>
        </h2>
      </div>

      
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 mb-24'>
        
        {/* Card 1 */}
        <div className='border-2 border-black bg-[#FAFAFA] px-8 md:px-12 py-12 sm:py-16 flex flex-col gap-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform duration-300'>
          <b className='text-black font-black uppercase tracking-[0.15em] text-lg'>Premium Fabrics:</b>
          <p className='text-gray-600 text-sm leading-relaxed font-medium'>
            No cheap blends. We source heavyweight, durable materials that drape perfectly and stand up to the elements of the city.
          </p>
        </div>
        
        
        <div className='border-2 border-black bg-[#FAFAFA] px-8 md:px-12 py-12 sm:py-16 flex flex-col gap-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform duration-300'>
          <b className='text-black font-black uppercase tracking-[0.15em] text-lg'>Exclusive Drops:</b>
          <p className='text-gray-600 text-sm leading-relaxed font-medium'>
            We don't do mass production. Our collections are released in limited drops to ensure your gear remains exclusive and highly sought after.
          </p>
        </div>
        
        
        <div className='border-2 border-black bg-[#FAFAFA] px-8 md:px-12 py-12 sm:py-16 flex flex-col gap-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform duration-300'>
          <b className='text-black font-black uppercase tracking-[0.15em] text-lg'>24/7 Syndicate:</b>
          <p className='text-gray-600 text-sm leading-relaxed font-medium'>
            Our support team is locked in. From sizing questions to tracking your latest haul, we provide unparalleled service to our community.
          </p>
        </div>

      </div>

      <NewsletterBox/>
    </div>
  )
}

export default About