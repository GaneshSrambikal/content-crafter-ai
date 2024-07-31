import SideBar from '@/components/sidebar'
import React from 'react'

const DashboardLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <div className='flex'>
            <div>
                <SideBar />
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default DashboardLayout