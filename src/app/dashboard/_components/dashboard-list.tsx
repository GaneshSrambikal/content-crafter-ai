'use client'
import { templateData } from '@/lib/template-data'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const DashboardList = ({ searchInput }: { searchInput: string }) => {
  const [templateList, setTemplateList] = useState(templateData)
  const searchParams = useSearchParams()
  const searchCategory = searchParams.get('category')

  useEffect(() => {
    if (searchCategory === 'all') {
      setTemplateList(templateData)
    } else if (searchCategory) {
      const templateByCategory = templateData.filter(template => template.category === searchCategory)
      setTemplateList(templateByCategory)
    } else {
      setTemplateList(templateData)
    }
  }, [searchCategory])

  useEffect(() => {
    if (searchInput && searchInput.length > 2) {
      const filtered = templateData.filter((item) => item.name.toLowerCase().includes(searchInput.toLowerCase()))
      setTemplateList(filtered)
    } else {
      setTemplateList(templateData)
    }
  }, [searchInput])
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mx-5 mt-5'>
      {templateList.map((template, index) => (
        <div key={index}>
          <Link href={`/dashboard/${template.slug}`} className='bg-white w-full rounded h-[200px] flex flex-col justify-center items-center'>
            <template.icon className={cn(template.textColor, 'h-12 w-12 mx-auto')}></template.icon>
            <h2 className='mt-5 text-center font-semibold'>{template.name}</h2>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default DashboardList