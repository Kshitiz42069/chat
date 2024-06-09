import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='flex items-center justify-center py-[2.5rem] bg-[#F1DFF7]'>
        <div className='flex lg:w-2/3 h-[90vh] overflow-hidden rounded-xl'>
            {/* image */}
            <div className='hidden lg:block relative w-1/2'>
                <img className=' w-full h-[90vh]' src="https://i.pinimg.com/736x/0c/c6/bd/0cc6bdb2906e2fca6c4073c634cf4955.jpg" alt="bg" />
                <p className='text-white font-bold absolute top-[18rem] left-4 text-8xl'>Welcome Back!</p>
                <img className='absolute top-10 w-[10rem]' src={require('../../assets/logo.png')} alt="" />
            </div>
            {/* details */}
            <div className='lg:w-1/2 bg-white pt-[7rem] flex flex-col pl-[5rem] pr-[3rem] gap-[2rem]'>
                <h1 className='text-5xl font-bold text-[#8551FF]'>Login</h1>
                <p className='font-thin w-[15rem]'>Welcome back! Please login to your Account</p>
                <form className='flex flex-col gap-[1rem]' action="submit">
                    <label className='text-gray-500 p-1' htmlFor="username">Username</label>
                    <input className='border-2 p-1 outline-none' type="email" placeholder='example@gmail.com' required/>
                    <label className='text-gray-500 p-1' htmlFor="password">Password</label>
                    <input className='border-2 p-1 outline-none' type="password" placeholder='******' required/>
                    <Link to={'/chat'}>
                        <button className='submit_button w-[15rem]'>Login</button>
                    </Link>
                </form>
                <Link to={'/register'}>
                    <p className='text-lg'>New User? <button className='text-[#8551FF] font-bold'>Sign up</button></p>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Login