import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Sidebar = () => {
  return (
    <div className='w-[20%] min-h-screen border-r border-gray-100 bg-gray-50/50'>
      <div className='flex flex-col gap-3 pt-8 pl-6 text-[15px]'>

        <NavLink className='flex items-center gap-3 border border-transparent px-4 py-3 rounded-l-full hover:bg-white transition-all' to="/add">
            <img className='w-5 h-5 opacity-70' src={assets.add_icon} alt='add'/>
            <p className='hidden md:block font-medium'>Add items</p>
        </NavLink>

        <NavLink className='flex items-center gap-3 border border-transparent px-4 py-3 rounded-l-full hover:bg-white transition-all' to="/list">
            <img className='w-5 h-5 opacity-70' src={assets.order_icon} alt='add'/>
            <p className='hidden md:block font-medium'>List items</p>
        </NavLink>

        <NavLink className='flex items-center gap-3 border border-transparent px-4 py-3 rounded-l-full hover:bg-white transition-all' to="/orders">
            <img className='w-5 h-5 opacity-70' src={assets.order_icon} alt='add'/>
            <p className='hidden md:block font-medium'>Orders</p>
        </NavLink>


      </div>
    </div>
  )
}

export default Sidebar
