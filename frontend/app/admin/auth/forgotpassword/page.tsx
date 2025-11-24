"use client";
import React, { useState } from 'react'

export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    return(
        <div className='text h-screen flex justify-center items-center bg-[#E7F1FF]'>
            <div className='border p-10 bg-[white] flex flex-col gap-5 text-center shadow-2xl rounded-xl text-gray-500 w-[450px]'>
                <div>
                    <h1 className='text-blue-600 font-bold text-3xl'>Cordova Connect</h1>
                    <p className='text-sm mt-3'>Reset your Admin Password</p>
                </div>
                
                <form action="" className='flex flex-col gap-5'>
                  <div className='flex flex-col text-left gap-3'>
                    <div className='flex justify-between'>
                    <label htmlFor="" className='font-semibold text-xs'>Enter Email Address</label>
                     </div>

                    <input 
                    type="email" 
                    placeholder='admin@gmail.com' 
                    className='border py-3 px-4 rounded-md' 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className='flex flex-col text-left gap-3'>
                    <div className='flex justify-between'>
                    <label htmlFor="" className='font-semibold text-xs'>Enter OTP</label>
                    <button 
                    className='text-xs font-semibold text-blue-600'
                    type='button'
                    onClick={() => alert(email)}
                    >Request OTP</button>
                     </div>
                    <input type="text" placeholder='*****' className='border py-3 px-4 rounded-md'/>
                  </div>
                  <div className='flex flex-col text-left gap-3'>
                    <label htmlFor="" className='font-semibold text-xs'>Password</label>
                    <input type="text" placeholder='*******' className='border py-3 px-4 rounded-md'/>
                  </div>
                  <button className='w-full p-3 bg-blue-500 rounded-lg text-white'>Log in</button>
                  <p className='text-sm'>Dont have an account? <span className='text-blue-500 font-bold ml-2'>Sign up here</span></p>

                </form>
            </div>
        </div>
    )
}