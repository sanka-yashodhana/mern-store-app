import React, { useState } from 'react'
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext.jsx';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

const Login = () => {

  const [currentState, setCurrentState] = useState('Login');
  const {token, setToken, navigate, backendUrl} = useContext(ShopContext)

  const [name,setName] = useState('');
  const [password,setPassword] = useState('');
  const [email,setEmail] = useState('');

  const onSubmitHandler = async (event)=>{
    event.preventDefault();

    try {
      if(currentState === 'Sign Up'){
        const response = await axios.post(backendUrl + '/api/user/register', {name,email,password})
        if(response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token',response.data.token)
        }
        else{
          toast.error(response.data.message)
        }
      } else{
        const response = await axios.post(backendUrl + '/api/user/login', {email,password})
        if(response.data.success){
          setToken(response.data.token)
          localStorage.setItem('token',response.data.token)
        } else {
          toast.error(response.data.message)
        }
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

 
  useEffect(()=>{
    if(token){
      navigate('/')
    }
  }, [token, navigate])

  return (
    <div className='flex justify-center items-center pt-10 sm:pt-20 mb-32 border-t-4 border-black'>
      
      
      <form 
        onSubmit={onSubmitHandler} 
        className='flex flex-col w-[90%] sm:max-w-[450px] border-2 border-black bg-[#FAFAFA] p-8 sm:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'
      >
        
        
        <div className='flex flex-col items-center mb-10'>
          <div className='flex items-center gap-3 mb-2'>
            <p className='w-6 md:w-8 h-[2px] bg-black'></p>
            <p className='font-bold text-xs tracking-[0.3em] text-black uppercase'>
              {currentState === 'Login' ? 'Access' : 'Join The Syndicate'}
            </p>
            <p className='w-6 md:w-8 h-[2px] bg-black'></p>
          </div>
          <h1 className='text-4xl sm:text-5xl font-black uppercase tracking-tighter text-black'>
            {currentState}
          </h1>
        </div>
        
        
        <div className='flex flex-col gap-5 mb-6'>
          {currentState === 'Login' ? null : (
            <input 
              onChange={(e)=> setName(e.target.value)} 
              value={name} 
              type='text' 
              className='border-2 border-black bg-white py-4 px-5 w-full font-bold uppercase tracking-wide text-sm placeholder-gray-400 focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none transition-all' 
              placeholder='Full Name' 
              required
            />
          )}
          
          <input 
            onChange={(e)=> setEmail(e.target.value)} 
            value={email} 
            type='email' 
            className='border-2 border-black bg-white py-4 px-5 w-full font-bold uppercase tracking-wide text-sm placeholder-gray-400 focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none transition-all' 
            placeholder='Email Address' 
            required
          />
          
          <input 
            onChange={(e)=> setPassword(e.target.value)} 
            value={password} 
            type='password' 
            className='border-2 border-black bg-white py-4 px-5 w-full font-bold uppercase tracking-wide text-sm placeholder-gray-400 focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none transition-all' 
            placeholder='Password' 
            required
          />
        </div>
        
        
        <div className='w-full flex justify-between text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-500 mb-10'>
          {currentState === 'Login' ? (
            <p className='cursor-pointer hover:text-black hover:underline underline-offset-4 transition-colors'>
              Forgot Password?
            </p>
          ) : <div></div>}
          
          {currentState === 'Login' ? (
            <p onClick={()=>setCurrentState('Sign Up')} className='cursor-pointer hover:text-black hover:underline underline-offset-4 transition-colors'>
              Create Account
            </p>
          ) : (
            <p onClick={()=>setCurrentState('Login')} className='cursor-pointer hover:text-black hover:underline underline-offset-4 transition-colors'>
              Login Here
            </p>
          )}
        </div>
        
        
        <button 
          type='submit'
          className='w-full bg-black text-white border-2 border-black font-black uppercase tracking-[0.2em] px-8 py-5 text-sm transition-all duration-300 shadow-[6px_6px_0px_0px_rgba(200,200,200,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] hover:bg-white hover:text-black'
        >
          {currentState === 'Login' ? 'Enter' : 'Create Account'}
        </button>

      </form>
    </div>
  )
}

export default Login;