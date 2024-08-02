import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { db } from '@/lib/db'
import { auth } from '@clerk/nextjs/server'
import { FileClock } from 'lucide-react'
import React from 'react'
import { format } from 'date-fns'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import TemplateIcon from './_components/template-icon'
const HistoryPage = async () => {
  const { userId } = auth()
  const userHistory = await db.aIOutput.findMany({
    where: {
      userId: userId as string
    }
  })

  return (
    <div className='mx-5 py-2'>
      <div className='mt-5 py-6 px-4 bg-white flex gap-2 rounded items-center'>
        <FileClock className='bg-blue-700 p-2 text-white w-12 h-12 rounded' />
        <h2 className='font-medium'>Output History</h2>
      </div>
      <div className='bg-white mt-5 py-6 px-4 rounded pb-10'>
        {userHistory && userHistory.length > 0 ?
          userHistory.map((history, index) => (
            <Accordion key={index} type='single' collapsible className='w-full'>
              <AccordionItem value={history.id}>
                <AccordionTrigger>
                  <div className='flex gap-3 items-center'>
                    <TemplateIcon template={history.templateUsed as string} />
                    {history.title}
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Description</TableHead>
                        <TableHead className='text-right'>Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow key={index} className='h-[200px] overflow-hidden'>
                        <TableCell className='whitespace-break-spaces'>{history.description}</TableCell>
                        <TableCell>{format(history.createdAt, 'dd/mm/yyyy')}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))
          :
          null
        }
      </div>
    </div>
  )
}

export default HistoryPage