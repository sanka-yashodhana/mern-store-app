import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem';

const BestSeller = () => {

    const {products} = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);
   
    useEffect(()=>{
        const bestProduct = products.filter((item)=>(item.bestSeller === true || item.bestSeller === "true"));
        setBestSeller(bestProduct.slice(0,5))
    },[products])
    
  return (
     <div className='my-24 bg-[#0a0a0a] py-16 px-6 sm:px-12 rounded-2xl shadow-2xl'>
        <div className='flex flex-col items-center justify-center text-center mb-12'>
            
            
            <div className='flex items-center gap-3 mb-4'>
              <p className='w-8 md:w-12 h-[2px] bg-[#E5E7EB]'></p>
              <p className='font-bold text-xs md:text-sm tracking-[0.3em] text-[#E5E7EB] uppercase'>Most Wanted</p>
              <p className='w-8 md:w-12 h-[2px] bg-[#E5E7EB]'></p>
            </div>

            
            <h2 className='text-4xl sm:text-5xl font-black uppercase tracking-tighter text-white mb-4'>
              Best <span className='text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-100'>Sellers</span>
            </h2>
            
            <p className='w-full sm:w-3/4 md:w-1/2 m-auto text-sm md:text-base text-gray-400 font-light leading-relaxed'>
              The pieces everyone is after. From exclusive graphic tees to heavy-duty essentials, secure our most coveted drops before they sell out
            </p>
        </div>
        
        
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 gap-y-10'>
            {
                bestSeller.map((item,index)=>(
                    <div key={index} className='bg-white p-2 rounded-xl'>
                       <ProductItem id={item._id} name={item.name} image={item.image} price={item.price}/>
                    </div>
                ))
            }
        </div>
     </div>
  )
}

export default BestSeller