import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets';
import { NavLink, Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const {setShowSearch, getCartCount, navigate, token, setToken, setCartItems} = useContext(ShopContext);

    const logout = ()=>{
        navigate('/login')
        localStorage.removeItem('token')
        setToken('')
        setCartItems({})
    }

    return (
        <>
            
            <div className='flex items-center justify-between py-5 font-medium border-b border-gray-100 sticky top-0 bg-white/90 backdrop-blur-md z-40'>
                
                
                <Link to='/'><img src={assets.logo} className='w-36' alt='logo'/></Link>

                
                <ul className='hidden sm:flex gap-8 text-sm text-gray-800 uppercase tracking-[0.15em]'>
                    <NavLink to='/' className='flex flex-col items-center gap-1 group'>
                        <p>HOME</p>
                        <hr className='w-full border-none h-[1.5px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left'/>
                    </NavLink>
                    <NavLink to='/collection' className='flex flex-col items-center gap-1 group'>
                        <p>COLLECTION</p>
                        <hr className='w-full border-none h-[1.5px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left'/>
                    </NavLink>
                    <NavLink to='/about' className='flex flex-col items-center gap-1 group'>
                        <p>ABOUT</p>
                        <hr className='w-full border-none h-[1.5px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left'/>
                    </NavLink>
                    <NavLink to='/contact' className='flex flex-col items-center gap-1 group'>
                        <p>CONTACT</p>
                        <hr className='w-full border-none h-[1.5px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left'/>
                    </NavLink>
                </ul>

                
                <div className='flex items-center gap-6'>
                    <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer hover:opacity-60 transition-opacity' alt='search' />

                    <div className='group relative'>
                        <img onClick={()=> token ? null : navigate('/login')} src={assets.profile_icon} className='w-5 cursor-pointer hover:opacity-60 transition-opacity' alt='profile'/>
                        
                        
                        {token && 
                        <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                            <div className='flex flex-col gap-2 w-40 py-3 px-5 bg-white shadow-xl text-gray-600 rounded-lg border border-gray-100'>
                                <p className='cursor-pointer hover:text-black transition-colors'>My Profile</p>
                                <p onClick={()=>navigate('/orders')} className='cursor-pointer hover:text-black transition-colors'>Orders</p>
                                <p onClick={logout} className='cursor-pointer text-red-500 hover:text-red-700 transition-colors font-semibold'>Logout</p>
                            </div>
                        </div>}
                    </div>

                    
                    <Link to='/cart' className='relative group'>
                        <img src={assets.cart_icon} className='w-5 min-w-5 group-hover:scale-110 transition-transform' alt='cart'/>
                        <p className='absolute -right-2 -bottom-2 w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[9px] font-bold'>
                            {getCartCount()}
                        </p>
                    </Link>
                    
                    
                    <img src={assets.menu_icon} onClick={()=>setVisible(true)} className='w-5 cursor-pointer sm:hidden hover:opacity-60 transition-opacity' alt='menu'/>
                </div>
            </div>

            
            <div className={`fixed top-0 right-0 bottom-0 z-[999] overflow-hidden bg-white transition-all duration-300 shadow-2xl ${visible ? 'w-full sm:w-[350px]' : 'w-0'}`}>
                <div className='flex flex-col text-gray-800 h-full w-full'>
                    
                    
                    <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-6 border-b border-gray-100 cursor-pointer hover:bg-gray-50 bg-white'>
                        <img src={assets.dropdown_icon} className='h-4 rotate-180' alt='back'/>
                        <p className='font-bold text-black tracking-[0.2em] uppercase text-sm'>Close Menu</p>
                    </div>
                    
                    
                    <div className='flex flex-col pt-4'>
                        <NavLink onClick={()=>setVisible(false)} to='/' className='py-5 px-10 border-b border-gray-50 text-lg text-black font-semibold tracking-wide hover:bg-gray-50 hover:pl-12 transition-all'>HOME</NavLink>
                        <NavLink onClick={()=>setVisible(false)} to='/collection' className='py-5 px-10 border-b border-gray-50 text-lg text-black font-semibold tracking-wide hover:bg-gray-50 hover:pl-12 transition-all'>COLLECTION</NavLink>
                        <NavLink onClick={()=>setVisible(false)} to='/about' className='py-5 px-10 border-b border-gray-50 text-lg text-black font-semibold tracking-wide hover:bg-gray-50 hover:pl-12 transition-all'>ABOUT</NavLink>
                        <NavLink onClick={()=>setVisible(false)} to='/contact' className='py-5 px-10 border-b border-gray-50 text-lg text-black font-semibold tracking-wide hover:bg-gray-50 hover:pl-12 transition-all'>CONTACT</NavLink>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Navbar