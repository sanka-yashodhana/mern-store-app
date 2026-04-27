import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {

  const {products, currency, cartItems, updateQuantity, navigate} = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(()=>{
    if(products.length > 0) {
      const temData = [];
      for(const items in cartItems){
        for(const item in cartItems[items]){
          if(cartItems[items][item] > 0){
            temData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item]
            })
          }
        }
      }
      setCartData(temData)
    }
  }, [cartItems, products])

  return (
    <div className='border-t-4 border-black pt-14 mb-24'>
      
      
      <div className='mb-10'>
        <div className='flex items-center gap-3 mb-2'>
            <p className='w-8 md:w-12 h-[2px] bg-black'></p>
            <p className='font-bold text-xs md:text-sm tracking-[0.3em] text-black uppercase'>Review Gear</p>
        </div>
        <h1 className='text-4xl sm:text-5xl font-black uppercase tracking-tighter text-black'>
          Your <span className='text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-200'>Stash</span>
        </h1>
      </div>

      
      <div className='flex flex-col gap-6'>
        {
          cartData.map((item, index)=>{
            const productData = products.find((product)=> product._id === item._id);

            return(
              <div 
                className='border-2 border-black bg-[#FAFAFA] p-4 sm:p-6 grid grid-cols-[3fr_1fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' 
                key={index}
              >
                <div className='flex items-center gap-4 sm:gap-6'>
                  
                  <div className='border-2 border-black p-1 bg-white shrink-0'>
                    <img src={productData.image[0]} alt='product' className='w-16 sm:w-24 aspect-[4/5] object-cover'/>
                  </div>
                  
                  <div className='flex flex-col items-start'>
                    <p className='text-sm sm:text-xl font-black uppercase tracking-tight text-black line-clamp-2'>
                        {productData.name}
                    </p>
                    <div className='flex items-center gap-4 mt-3'>
                      <p className='font-bold text-sm sm:text-lg tracking-widest'>
                          {currency}{productData.price.toLocaleString()}
                      </p>
                      
                      <p className='px-3 py-1 bg-black text-white text-xs font-bold uppercase tracking-widest'>
                          Size: {item.size}
                      </p>
                    </div>
                  </div>
                </div>
                
                
                <input 
                  onChange={(e)=> e.target.value === '' || e.target.value ==='0' ? null : updateQuantity(item._id, item.size, Number(e.target.value))} 
                  type='number' 
                  defaultValue={item.quantity} 
                  min={1} 
                  className='border-2 border-black bg-white text-black font-bold outline-none max-w-[60px] sm:max-w-[80px] px-2 py-2 text-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                />
                
                
                <img 
                  onClick={()=>updateQuantity(item._id, item.size, 0)} 
                  src={assets.bin_icon} 
                  className='w-5 sm:w-6 cursor-pointer hover:scale-110 hover:rotate-12 transition-transform duration-300 ml-auto' 
                  alt='Remove item'
                />
              </div>
            )
          })
        }
      </div>

      
      <div className='flex justify-center my-20'>
        <div className='w-full sm:w-[450px] flex flex-col'>
          
          
          <div className='border-2 border-black p-6 bg-[#FAFAFA] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8'>
            <CartTotal/>
          </div>
          
          <div className='w-full text-end'>
            <button 
                onClick={()=>navigate('/place-orders')} 
                className='w-full bg-black text-white border-2 border-black font-black uppercase tracking-[0.2em] px-8 py-5 text-sm sm:text-base transition-all duration-300 shadow-[6px_6px_0px_0px_rgba(200,200,200,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] hover:bg-white hover:text-black'
            >
              Secure The Bag
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Cart