import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import ProductItem from './../components/ProductItem';

const Collection = () => {

  const {products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProduct, setFilterProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relavent');
  
  const toggleCategory = (e)=>{
    if(category.includes(e.target.value)){
      setCategory(prev=> prev.filter(item => item !== e.target.value))
    }
    else{
      setCategory(prev=> [...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e)=>{
    if (subCategory.includes(e.target.value)){
      setSubCategory(prev=> prev.filter(item=> item !== e.target.value))
    }
    else{
      setSubCategory(prev=> [...prev, e.target.value])
    }
  }

  const applyFilter = ()=>{
    let productsCopy = products.slice();

    if(showSearch && search){
      productsCopy = productsCopy.filter(item=> item.name.toLowerCase().includes(search.toLowerCase()));
    }

    if(category.length > 0){
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    if(subCategory.length > 0){
      productsCopy = productsCopy.filter(item=> subCategory.includes(item.subCategory))
    }

    setFilterProduct(productsCopy)
  }

  const sortProduct = ()=>{
    let fpCopy = filterProduct.slice();

    switch(sortType) {
      case 'low-high':
        setFilterProduct(fpCopy.sort((a,b)=>(a.price - b.price)));
        break;
      
      case 'high-low':
        setFilterProduct(fpCopy.sort((a,b)=> (b.price - a.price)));
        break;

      default:
        applyFilter();
        break;
    }
  }

  useEffect(()=>{
    applyFilter();
  },[category, subCategory, search, showSearch, products])

  useEffect(()=>{
    sortProduct();
  },[sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t-2 border-black'>
      
      
      <div className='min-w-60'>
        <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-lg font-black uppercase tracking-[0.2em] flex items-center cursor-pointer gap-2 text-black'>
          Filters
          <img src={assets.dropdown_icon} alt='dropdown' className={`h-3 sm:hidden transition-transform duration-300 ${showFilter ? 'rotate-90' : ''}`}/>
        </p>
        
        
        <div className={`border-2 border-black pl-6 py-5 mt-6 bg-[#FAFAFA] ${showFilter ? '' : 'hidden'} sm:block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
          <p className='mb-4 text-xs font-bold tracking-[0.15em] uppercase text-black'>Categories</p>
          <div className='flex flex-col gap-3 text-sm font-semibold text-gray-600 uppercase tracking-wider'>
            <label className='flex items-center gap-3 cursor-pointer hover:text-black transition-colors'>
              <input className='w-4 h-4 accent-black cursor-pointer' type='checkbox' value={'Men'} onChange={toggleCategory}/> Men
            </label>
            <label className='flex items-center gap-3 cursor-pointer hover:text-black transition-colors'>
              <input className='w-4 h-4 accent-black cursor-pointer' type='checkbox' value={'Women'} onChange={toggleCategory}/> Women
            </label>
            <label className='flex items-center gap-3 cursor-pointer hover:text-black transition-colors'>
              <input className='w-4 h-4 accent-black cursor-pointer' type='checkbox' value={'Kids'} onChange={toggleCategory}/> Kids
            </label>
          </div>
        </div>
        
        
        <div className={`border-2 border-black pl-6 py-5 my-6 bg-[#FAFAFA] ${showFilter ? '' : 'hidden'} sm:block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
          <p className='mb-4 text-xs font-bold tracking-[0.15em] uppercase text-black'>Apparel Type</p>
          <div className='flex flex-col gap-3 text-sm font-semibold text-gray-600 uppercase tracking-wider'>
            <label className='flex items-center gap-3 cursor-pointer hover:text-black transition-colors'>
              <input className='w-4 h-4 accent-black cursor-pointer' type='checkbox' value={'Topwear'} onChange={toggleSubCategory}/> Topwear
            </label>
            <label className='flex items-center gap-3 cursor-pointer hover:text-black transition-colors'>
              <input className='w-4 h-4 accent-black cursor-pointer' type='checkbox' value={'Bottomwear'} onChange={toggleSubCategory}/> Bottomwear
            </label>
            <label className='flex items-center gap-3 cursor-pointer hover:text-black transition-colors'>
              <input className='w-4 h-4 accent-black cursor-pointer' type='checkbox' value={'Winterwear'} onChange={toggleSubCategory}/> Winterwear
            </label>
          </div>
        </div>
      </div>

      
      <div className='flex-1'>
        
        
        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center text-base sm:text-2xl mb-8 gap-4 sm:gap-0'>
          
          <h2 className='text-3xl sm:text-4xl font-black uppercase tracking-tighter text-black'>
            All <span className='text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-200'>Collections</span>
          </h2>
          
          
          <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-black text-xs font-bold uppercase tracking-widest px-4 py-3 bg-white text-black outline-none cursor-pointer hover:bg-gray-50 transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'>
            <option value="relavent">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 gap-y-10'>
          {
            filterProduct.map((item,index)=>(
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>
            ))
          }
        </div>
        
      </div>
    </div>
  )
}

export default Collection