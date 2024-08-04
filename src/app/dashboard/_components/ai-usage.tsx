
import React, { Suspense } from 'react'
import { AIChart } from './ai-charts'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { db } from '@/lib/db'
import { revalidatePath } from 'next/cache'
import { AccordionSkeleton } from '@/components/ui/skeletons'
import { fetchChartData } from '@/lib/chart-data'
const AIUsage = async () => {
  const { availableCredit, totalUsage } = await fetchChartData()
  return (
    <div>
      <Suspense fallback={<AccordionSkeleton />}>

        <AIChart availableCredit={availableCredit} totalUsage={totalUsage} />
      </Suspense>
      <div className='absolute bottom-0 text-xs flex justify-center mb-3 w-full'><p className='text-gray-500 text-center'>version 2024-07-10</p></div>
    </div>
  )
}

export default AIUsage