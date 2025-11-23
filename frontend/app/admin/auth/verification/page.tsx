import React from 'react'

export default function Verification() {
    return(
        <div className='text h-screen flex justify-center items-center bg-[#E7F1FF]'>
            <div className='border p-10 bg-[white] flex flex-col gap-5 text-center shadow-2xl rounded-xl text-gray-500 w-[450px]'>
                <div>
                    <h1 className='text-blue-600 font-bold text-3xl'>Cordova Connect</h1>
                    <p className='text-sm mt-3'>Verify your admin account</p>
                </div>
                
                <form action="" className='flex flex-col gap-5'>
                  <div className='flex flex-col text-left gap-3'>
                    <label htmlFor="" className='font-semibold text-xs text-center'>Enter OPT</label>
                    <input type="text" placeholder='******' className='border py-3 px-4 rounded-md text-center'/>
                  </div>
                  <button className='w-full p-3 bg-blue-500 rounded-lg text-white'>Confirm</button>
                </form>
            </div>
        </div>
    )
}