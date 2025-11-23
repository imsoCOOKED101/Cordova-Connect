import React from 'react'
import { ArrowLeft } from 'lucide-react'

export default function RegisterAdminPage() {
    return(
        <div className='text flex justify-center items-center bg-[#E7F1FF] p-20'>
            <div className='border p-10 bg-[white] flex flex-col gap-5 text-center shadow-2xl rounded-xl text-gray-500 w-[600px]'>
                <div>
                    <h1 className='text-blue-600 font-bold text-3xl'>Create an Admin Account</h1>
                    <p className='text-sm mt-3'>Join the Cordova Connect community</p>
                </div>
                
                <form action="" className='flex flex-col gap-5'>
                  <div className='grid grid-cols-1 gap-3'>
                    <div className='flex flex-col text-left gap-2 font-semibold'>
                        <label htmlFor="" className='text-sm'>Admin Name</label>
                        <input type="text" placeholder='Juan Dela Cruz' className='border p-3 rounded-lg'/>
                    </div>
                  </div>
                  <div className='flex flex-col text-left gap-2 font-semibold'>
                    <label htmlFor="" className='text-sm'>Email Address</label>
                    <input type="email" placeholder='your.email@cordova.edu' className='border p-3 rounded-lg'/>
                  </div>
                  <div className='grid grid-cols-2 gap-3'>
                    <div className='flex flex-col text-left gap-2 font-semibold'>
                        <label htmlFor="" className='text-sm'>Password</label>
                        <input type="password" placeholder='*******' className='border p-3 rounded-lg'/>
                    </div>
                    <div className='flex flex-col text-left gap-2 font-semibold'>
                        <label htmlFor="" className='text-sm'>Confirm Password</label>
                        <input type="password" placeholder='*******' className='border p-3 rounded-lg'/>
                    </div>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <div className='flex flex-col gap-2'>
                        <button className='border bg-blue-500 text-white p-3 rounded-lg'>Create Account</button>

                       <div className='flex items-center justify-center'>
                         <h1 className='text-blue-500 font-semibold flex items-center text-center'><ArrowLeft/>Back to Login</h1>
                       </div>
                    </div>
                  </div>

                </form>
            </div>
        </div>
    )
}