import { templateData } from '@/lib/template-data'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

const DashboardList = ({ searchInput }: { searchInput: string }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mx-5 mt-5'>
      {templateData.map((template, index) => (
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