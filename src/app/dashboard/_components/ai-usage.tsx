
import React from 'react'
import { AIChart } from './ai-charts'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { db } from '@/lib/db'
import { revalidatePath } from 'next/cache'

const AIUsage = async () => {
  const { userId } = auth()

  if (!userId) {
    redirect('/')
  }

  let availableCredit: number = 0;
  let totalUsage: number = 0

  const userAIoutput = await db.aIOutput.findMany({
    where: {
      userId: userId as string
    }
  })

  if (userAIoutput.length > 0) {
    userAIoutput.forEach((output) => {
      totalUsage = totalUsage + Number(output.description?.length)
    })

    revalidatePath('/')
  }
  const userCredit = await db.user.findUnique({
    where: {
      userId: userId as string
    }
  })

  availableCredit = userCredit ? Number(userCredit?.totalCredit) : 10000
  return (
    <div>

      <AIChart availableCredit={availableCredit} totalUsage={totalUsage} />
      <div className='absolute bottom-0 text-xs flex justify-center mb-3 w-full'><p className='text-gray-500 text-center'>version 2024-07-10</p></div>
    </div>
  )
}

export default AIUsage