import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem';

const LatestCollection = () => {

    const {products} = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(()=>{
      setLatestProducts(products.slice(0,10));
    }, [products])

  return (
    <div className='my-20'>
      <div className='flex flex-col items-center justify-center text-center py-8 mb-8'>
        
        
        <div className='flex items-center gap-3 mb-4'>
          <p className='w-8 md:w-12 h-[2px] bg-black'></p>
          <p className='font-bold text-xs md:text-sm tracking-[0.3em] text-black uppercase'>Season 01 / Drop</p>
          <p className='w-8 md:w-12 h-[2px] bg-black'></p>
        </div>
        
        
        <h2 className='text-4xl sm:text-5xl font-black uppercase tracking-tighter text-black mb-4'>
          Latest <span className='text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-300'>Arrivals</span>
        </h2>
        
        <p className='w-full sm:w-3/4 md:w-1/2 m-auto text-sm md:text-base text-gray-500 font-light leading-relaxed'>
          Upgrade your rotation with our newest heavyweight cuts and everyday essentials. Premium fabrics and raw aesthetics built for the pavement
        </p>
      </div>

     
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 gap-y-10' >
        {
            latestProducts.map((item, index)=>(
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))
        }
      </div>

    </div>
  )
}

export default LatestCollection