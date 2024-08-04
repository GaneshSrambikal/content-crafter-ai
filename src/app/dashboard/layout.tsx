
import React from 'react'
import SideBar from './_components/sidebar'
import AIUsage from './_components/ai-usage'

const DashboardLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
   
    return (
        <div className='bg-emerald-600 h-screen'>
            <div className='hidden md:w-64 md:flex flex-col fixed bg-white h-screen justify-between'>
                <SideBar />
                <AIUsage />
            </div>

            <div className='md:ml-64 bg-emerald-600 h-auto'>
                {children}
            </div>
        </div>
    )
}

export default DashboardLayout