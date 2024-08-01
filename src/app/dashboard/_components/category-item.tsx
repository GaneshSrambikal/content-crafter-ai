'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import queryString from 'query-string'
const CategoryItem = ({ name, value }: { name: string, value: string }) => {
    const pathname = usePathname()
    const router = useRouter()
    const searchParams = useSearchParams()
    const currentCategory = searchParams.get('category')
    const isSelected = currentCategory === value
    const handleClick = () => {
        const url = queryString.stringifyUrl({
            url: pathname,
            query: {
                category: isSelected ? null : value
            }
        },
            { skipEmptyString: true, skipNull: true }
        )
        router.push(url)
    }
    return (
        <button
            onClick={handleClick}
            className='rounded border text-sm items-center cursor-pointer px-4 py-2'>{name}</button>
    )
}

export default CategoryItem