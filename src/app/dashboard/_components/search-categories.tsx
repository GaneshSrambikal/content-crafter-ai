import Link from 'next/link'
import React from 'react'
import CategoryItem from './category-item'

const SearchCategories = () => {

    const lists = [
        {
            name: 'All',
            value: 'all'
        },
        {
            name: 'Youtube',
            value: 'youtube'
        },
        {
            name: 'Instagram',
            value: 'instagram'
        },
        {
            name: 'Tweet',
            value: 'tweet'
        },
        {
            name: 'Tiktok',
            value: 'tiktok'
        },
        {
            name: 'LinkedIn',
            value: 'linkedin'
        },

    ]
    return (
        <div className='flex gap-3 flex-wrap items-center'>
            {lists.map((list, index) => (
                <CategoryItem  key={index} name={list.name} value={list.value}/>
            ))}
        </div>
    )
}

export default SearchCategories