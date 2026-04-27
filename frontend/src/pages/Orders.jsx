import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios';

const Orders = () => {

  const {backendUrl, token, currency} = useContext(ShopContext);
  const [orderData, setOrderData] = useState([])

  const loadOrderData = async()=>{
    try {
      if(!token){
        return null
      }

      const response = await axios.post(backendUrl + '/api/order/userorders', {}, {headers:{token}})
      if(response.data.success){
        let allOrdersItem = []
        response.data.orders.map((order)=>{
          order.items.map((item)=>{
            item['status'] = order.status
            item['payment'] = order.payment
            item['paymentMethod'] = order.paymentMethod
            item['date'] = order.date
            allOrdersItem.push(item)
          })
        })
        setOrderData(allOrdersItem.reverse())
      }
      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    loadOrderData()
  },[token])
  
  return (
    <div className='border-t-4 border-black pt-14 mb-24'>
      
      
      <div className='mb-10'>
        <div className='flex items-center gap-3 mb-2'>
            <p className='w-8 md:w-12 h-[2px] bg-black'></p>
            <p className='font-bold text-xs md:text-sm tracking-[0.3em] text-black uppercase'>Your Arsenal</p>
        </div>
        <h1 className='text-4xl sm:text-5xl font-black uppercase tracking-tighter text-black'>
          Order <span className='text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-200'>History</span>
        </h1>
      </div>

      
      <div className='flex flex-col gap-6'>
        {orderData.map((item,index)=>(
          
          <div 
            key={index} 
            className='border-2 border-black bg-[#FAFAFA] p-4 sm:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
          >
           
            <div className='flex items-start gap-4 sm:gap-6 text-sm w-full md:w-2/3'>
              
              
              <div className='border-2 border-black p-1 bg-white shrink-0'>
                <img src={item.image[0]} alt='item' className='w-20 sm:w-24 aspect-[4/5] object-cover'/>
              </div>
              
              <div className='flex flex-col'>
                <p className='text-base sm:text-xl  uppercase tracking-tight text-black line-clamp-2'>
                    {item.name}
                </p>
                
                
                <div className='flex flex-wrap items-center gap-3 mt-3 text-sm font-bold tracking-widest text-black'>
                  <p>{currency}{item.price.toLocaleString()}</p>
                  <p className='px-2 py-1 bg-black text-white text-xs uppercase'>QTY: {item.quantity}</p>
                  <p className='px-2 py-1 bg-gray-200 text-black border border-black text-xs uppercase'>SIZE: {item.size}</p>
                </div>
                
               
                <div className='mt-4 flex flex-col gap-1 text-xs font-bold uppercase tracking-wider text-gray-500'>
                  <p>Date Captured: <span className='text-black'>{new Date(item.date).toDateString()}</span></p>
                  <p>Payment Method: <span className='text-black'>{item.paymentMethod}</span></p>
                </div>
              </div>
            </div>

            
            <div className='md:w-1/3 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-t-2 border-black md:border-t-0 pt-4 md:pt-0'>
              
              
              <div className='flex items-center gap-3'>
                {/* Sharp Status Square instead of round dot */}
                <p className='min-w-3 h-3 border border-black bg-green-500'></p>
                <p className='text-sm md:text-base uppercase tracking-widest text-black'>{item.status}</p>
              </div>
              
             
              <button 
                onClick={loadOrderData} 
                className='w-full sm:w-auto border-2 border-black bg-white text-black uppercase tracking-[0.1em] px-6 py-3 text-xs shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] hover:bg-black hover:text-white transition-all'
              >
                Track Status
              </button>

            </div>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default Orders