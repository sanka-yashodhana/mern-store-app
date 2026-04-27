import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';

const ProductItem = ({id, image, name, price}) => {
    const {currency} = useContext(ShopContext);

  return (
    <Link className='cursor-pointer group flex flex-col gap-4' to={`/product/${id}`}>
        
       
        <div className='overflow-hidden relative bg-[#f4f4f4] aspect-[4/5] sm:aspect-[3/4]'>
            <img 
                src={image[0]} 
                alt={name} 
                className='w-full h-full object-cover object-center group-hover:scale-110 transition duration-700 ease-out'
            />
            
            
            <div className='absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10'>
                <span className='bg-white text-black text-xs font-bold px-5 py-3 uppercase tracking-[0.2em] translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl'>
                    View Gear
                </span>
            </div>
        </div>
        
        {/* Typography - Stark, bold, and high contrast */}
        <div className='flex flex-col items-start px-1'>
            <p className='text-sm md:text-base font-black text-black uppercase tracking-tight leading-snug line-clamp-2'>
                {name}
            </p>
            <p className='text-sm text-gray-500 mt-1 font-semibold'>
                {currency}{price.toLocaleString()}
            </p>
        </div>
        
    </Link>
  )
}

export default ProductItem