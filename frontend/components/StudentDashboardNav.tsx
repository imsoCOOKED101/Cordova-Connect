import Link from 'next/link'
import React from 'react'

const StudentDashboardNav = () => {
  return (
    <div className='w-75'>
        <div className='flex flex-col py-4 px-3'> 
            <h2 className='font-bold text-xl text-purple-300'>Cordova Connect</h2>
            <p className='text-sm text-gray-400'>Student Portal</p>
        </div>
        <hr />
        <ul className='px-1 flex flex-col'>
            <li className='px-2 py-2 hover:bg-gray-100 rounded-md'><Link href='student-dashboard' className='w-100 h-100' >Dashboard</Link></li>
            <li className='px-2 py-2 hover:bg-gray-100 rounded-md'><Link href='clubs' className='w-100 h-100' >Clubs</Link></li>
            <li className='px-2 py-2 hover:bg-gray-100 rounded-md'><Link href='calendar' className='w-100 h-100' >Calendar</Link></li>
            <li className='px-2 py-2 hover:bg-gray-100 rounded-md'><Link href='profile' className='w-100 h-100' >Profile</Link></li>
        </ul>
        <hr />
        <button className='px-2 py-2 text-red-500 hover:bg-gray-100 rounded-md w-full text-left'>Logout</button>
    </div>
  )
}

export default StudentDashboardNav