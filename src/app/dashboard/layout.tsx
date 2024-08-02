
import React from 'react'
import SideBar from './_components/sidebar'

const DashboardLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <div className='bg-green-100 h-screen'>
            <div className='hidden md:w-64 md:flex flex-col fixed h-screen'>
                <SideBar />
            </div>
            <div className='md:ml-64 bg-green-100 h-auto'>
                {children}
            </div>
        </div>
    )
}

export default DashboardLayout