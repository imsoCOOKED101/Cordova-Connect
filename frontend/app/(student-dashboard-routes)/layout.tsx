import StudentDashboardNav from '@/components/StudentDashboardNav'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex'>
        <StudentDashboardNav />
        <main>
            {children}
        </main>
    </div>
  )
}

export default layout