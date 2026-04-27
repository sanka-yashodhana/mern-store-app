import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
    
    const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);
    const [visible, setVisible] = useState(false);
    const location = useLocation();

    useEffect(()=>{
        if(location.pathname.includes('collection') ){
            setVisible(true);
        }
        else{
            setVisible(false)
        }
    }, [location]) 
    
  return showSearch && visible ? (
    <div className='border-b border-black bg-white text-center py-8 px-4 z-40 relative'>
      
      
      <div className='inline-flex items-center justify-center border-2 border-black bg-[#FBFBFB] px-6 py-4 mx-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] w-full sm:w-2/3 md:w-1/2'>
        <input 
            value={search} 
            onChange={(e)=>setSearch(e.target.value)} 
            type='text' 
            placeholder='SEARCH GEAR...' 
            className='flex-1 outline-none bg-transparent text-sm sm:text-base font-bold uppercase tracking-[0.15em] placeholder-gray-400 text-black'
        />
        <img src={assets.search_icon} alt='search' className='w-5 opacity-70' />
      </div>
      
      
      <img 
        onClick={()=>setShowSearch(false)} 
        src={assets.cross_icon} 
        alt='close' 
        className='inline w-5 ml-4 sm:ml-6 cursor-pointer hover:rotate-90 transition-transform duration-300 opacity-60 hover:opacity-100' 
      />
      
    </div>
  ) : null
}

export default SearchBar