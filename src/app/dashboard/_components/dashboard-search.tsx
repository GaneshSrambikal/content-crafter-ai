'use client'
import React from 'react'
import SearchCategories from './search-categories'
import Auth from '@/components/auth'
import { SearchIcon } from 'lucide-react'

const DashboardSearch = ({ onSearchInput }: { onSearchInput: React.Dispatch<React.SetStateAction<string | undefined>> }) => {
    return (
        <div className='mx-5 py-2'>
            <div className='bg-white flex flex-col md:flex-row rounded gap-4 mt-5 py-6 px-4 items-center'>
            <div className='flex gap-2 items-center p-2 border rounded w-full md:w-[20%]'>
                <SearchIcon className='md:hidden'/>
                <input
                    type='text'
                    placeholder='search...'
                    className='bg-transparent outline-none text-black'
                    onChange={(e) => onSearchInput(e.target.value)}
                />
            </div>
            <div>
                <SearchCategories />
            </div>
            <div className='ml-auto hidden md:block'>
                <Auth />
            </div>
            </div>
        </div>
    )
}

export default DashboardSearch