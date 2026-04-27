import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const {productId} = useParams();
  const {products, currency, addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('')
  const [size, setSize] = useState('')
  const [activeTab, setActiveTab] = useState('description')

  const fetchProductData = async () => {
    const item = products.find((item) => item._id === productId);
    if (item) {
        setProductData(item);
        setImage(item.image[0]);
    }
  };

  useEffect(()=>{
     fetchProductData();
  },[productId, products])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  return productData ? (
    <div className='border-t-2 border-black pt-10 transition-opacity ease-in duration-500 opacity-100 mb-20'>
      
      
      <div className='flex gap-12 sm:gap-16 flex-col sm:flex-row'>
        
       
        <div className='flex-1 flex flex-col-reverse gap-4 sm:flex-row'>
          
          
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-auto justify-between sm:justify-start sm:w-[20%] w-full gap-4 sm:gap-4 pb-2 sm:pb-0 scrollbar-hide'>
            {
              productData.image.map((item, index)=>(
                <div 
                  key={index} 
                  onClick={()=> setImage(item)} 
                  className={`border-2 p-1 shrink-0 cursor-pointer transition-all ${image === item ? 'border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' : 'border-transparent hover:border-gray-300'}`}
                >
                  <img src={item} className='w-[80px] sm:w-full object-cover aspect-[4/5]' alt='thumbnail' />
                </div>
              ))
            }
          </div>
          
          {/* Main Hero Image */}
          <div className='w-full sm:w-[80%] border-2 border-black p-2 bg-[#FAFAFA] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]'>
            <img className='w-full h-full object-cover aspect-[4/5] sm:aspect-auto' src={image} alt='product_img'/>
          </div>
        </div>

        
        <div className='flex-1 pr-0 sm:pr-8 flex flex-col justify-center'>
          
          
          <p className='font-bold text-xs tracking-[0.3em] text-gray-500 uppercase mb-2'>
            {productData.category} / {productData.subCategory}
          </p>
          <h1 className='font-black uppercase tracking-tighter text-3xl sm:text-5xl text-black leading-none'>
            {productData.name}
          </h1>
          
          
          <div className='flex items-center gap-2 mt-4'>
            <div className='flex gap-1 px-3 py-1'>
                <img src={assets.star_icon} alt='star' className='w-3 h-3 invert'/>
                <img src={assets.star_icon} alt='star' className='w-3 h-3 invert'/>
                <img src={assets.star_icon} alt='star' className='w-3 h-3 invert'/>
                <img src={assets.star_icon} alt='star' className='w-3 h-3 invert'/>
                <img src={assets.star_dull_icon} alt='star' className='w-3 h-3 invert opacity-50'/>
            </div>
            <p className='font-bold text-xs uppercase tracking-widest text-gray-500'> (122 Verified) </p>
          </div>

          
          <p className='mt-6 text-3xl sm:text-4xl font-black tracking-widest text-black'>
            {currency}{productData.price.toLocaleString()}
          </p>
          
          <p className='mt-6 text-gray-600 font-medium text-sm sm:text-base leading-relaxed md:w-4/5'>
            {productData.description}
          </p>
          
          
          <div className='flex flex-col gap-4 my-8'>
            <p className='font-black uppercase tracking-[0.15em] text-sm text-black'>Select Fit</p>
            <div className='flex flex-wrap gap-3'>
              {productData.sizes.map((item,index)=>(
                <button 
                  onClick={()=>setSize(item)} 
                  key={index} 
                  className={`border-2 border-black font-black uppercase text-sm py-3 px-5 transition-all duration-200 
                  ${item === size 
                    ? 'bg-black text-white shadow-none translate-x-[2px] translate-y-[2px]' 
                    : 'bg-white text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-gray-100'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          
          
          <button 
            onClick={()=>addToCart(productData._id, size)} 
            className='w-full sm:w-2/3 bg-black text-white border-2 border-black font-black uppercase tracking-[0.2em] px-8 py-5 text-sm sm:text-base transition-all duration-300 shadow-[6px_6px_0px_0px_rgba(200,200,200,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] hover:bg-white hover:text-black'
          >
            Add To Cart
          </button>
          
          <hr className='mt-10 border-t-2 border-gray-100 sm:w-4/5'/>
          
          
          <div className='text-xs font-bold uppercase tracking-[0.1em] text-gray-500 mt-6 flex flex-col gap-3'>
            <p className='flex items-center gap-2'><span className='w-2 h-2 bg-black block'></span> 100% Verified Gear. Authentic drops only.</p>
            <p className='flex items-center gap-2'><span className='w-2 h-2 bg-black block'></span> Cash on delivery available.</p>
            <p className='flex items-center gap-2'><span className='w-2 h-2 bg-black block'></span> Hassle-free exchanges within 7 days.</p>
          </div>
        </div>
      </div>

      
      <div className='mt-32'>
        <div className='flex border-b-4 border-black'>
          <button 
            onClick={()=>setActiveTab('description')} 
            className={`px-8 py-4 font-black uppercase tracking-[0.1em] text-sm sm:text-base transition-colors ${activeTab === 'description' ? 'bg-black text-white' : 'bg-[#FAFAFA] text-gray-500 hover:text-black'}`} 
          >
            The Details
          </button>
          <button 
            onClick={()=> setActiveTab('reviews')} 
            className={`px-8 py-4 font-black uppercase tracking-[0.1em] text-sm sm:text-base transition-colors ${activeTab === 'reviews' ? 'bg-black text-white' : 'bg-[#FAFAFA] text-gray-500 hover:text-black'}`}
          >
            Reviews (0)
          </button>
        </div>

        
        <div className='p-8 sm:p-12 border-2 border-t-0 border-black bg-[#FAFAFA] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-20'>
          {activeTab === 'description' ? (
            <div className='text-gray-600 font-medium leading-relaxed text-sm sm:text-base'>
              <p>{productData.description}</p>
            </div>
          ) : (
            <div className='text-gray-600 font-medium leading-relaxed text-sm sm:text-base'>
              <p>No verified reviews for this drop yet. Be the first to secure it and leave your thoughts.</p>
            </div>
          )}
        </div>
      </div>

      {/* Display Related Products */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>

    </div>
  ) : <div className='opacity-0'></div>
}

export default Product