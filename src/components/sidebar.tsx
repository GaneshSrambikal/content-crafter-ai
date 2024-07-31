'use client'
import React from 'react'
import Logo from './logo'
import { menuList } from '@/lib/sidebar-menus'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

const SideBar = () => {
    const path = usePathname()
    return (
        <div className='relative bg-white h-screen p-5 flex flex-col items-center'>
            <Logo />
            <div className='mt-10 h-max flex flex-col w-full'>
                {menuList.map((menu, index) => (
                    <Link href={menu.path} key={index} className={cn(path === menu.path && 'bg-primary text-white','flex gap-2 mb-2 p-3  rounded-lg items-center cursor-pointer hover:bg-primary hover:text-white')}>
                        {<menu.icon className='w-6 h-6'></menu.icon>}
                        <h2 className='text-lg'>{menu.name}</h2>
                    </Link>
                ))}
            </div>
            <div className='absolute bottom-0 text-xs flex justify-center mb-1'><p className='text-gray-500'>version 2024-07-10</p></div>
        </div>
    )
}

export default SideBar