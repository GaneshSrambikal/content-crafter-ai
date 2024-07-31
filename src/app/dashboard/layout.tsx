import SideBar from '@/components/sidebar'
import React from 'react'

const DashboardLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <div className='bg-gray-100 h-screen'>
            <div className='hidden md:w-64 md:flex flex-col fixed h-screen'>
                <SideBar />
            </div>
            <div className='md:ml-64 bg-green-50 h-auto'>
                {children}
            </div>
        </div>
    )
}

export default DashboardLayout