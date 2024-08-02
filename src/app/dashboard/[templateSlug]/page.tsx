'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { iconList } from '@/lib/icon-list'
import { templateData } from '@/lib/template-data'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React, { useState } from 'react'
import QuillEditor from './_components/editor'
import { NextResponse } from 'next/server'
import { chatSession } from '@/lib/gemini-ai'
import axios from 'axios'
import { Loader } from 'lucide-react'
interface templateSlug {
    templateSlug: string
}
const TemplateSlugPage = ({ params }: { params: templateSlug }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [aiOutput, setAiOutput] = useState<string>('')
    const selectedTemplate = templateData.find((template) => template.slug === params.templateSlug)

    // Icon
    const templateIcon = iconList.filter((list) => list.name === selectedTemplate?.category)

    const generateAIContent = async (formData: FormData) => {
        setIsLoading(true)
        try {
            let dataSet = {
                title: formData.get('title'),
                description: formData.get('description')

            }
            const selectedPrompt = selectedTemplate?.aiPrompt;
            const finalAIPrompt = JSON.stringify(dataSet) + "," + selectedPrompt

            const result = await chatSession.sendMessage(finalAIPrompt)
            setAiOutput(result.response.text())

            const response = await axios.post('/api/gemini', {
                title: dataSet.title,
                description: result.response.text(),
                templateUsed: selectedTemplate?.name
            })
            setIsLoading(false)
        } catch (error) {
            return new NextResponse('Internal error', { status: 500 })
        }
    }
    const handleSubmit = async (formData: FormData) => {
        generateAIContent(formData)
    }
    return (
        <div className='mx-5 py-2 min-h-full'>
            <div className='mt-5 py-6 px-4 bg-white rounded flex items-center gap-3'>
                {templateIcon.map((item, index) => (
                    <div key={index}>

                        <item.icon className={cn(item.bgColor, 'w-12 h-12 text-white p-2 rounded-sm')}></item.icon>
                    </div>
                ))}
                <h2 className='font-medium'>{selectedTemplate?.name}</h2>
            </div>
            <form action={handleSubmit}>
                <div className='flex flex-col gap-4 p-5 mt-5 bg-white'>
                    {selectedTemplate?.form.map((form, index) => (
                        <div key={index}>

                            <label htmlFor='title'>{form.label}</label>
                            {form.field === 'input' ?
                                <div className='mt-5'><Input name='title'></Input></div>
                                :
                                <div className='mt-5'>
                                    <Textarea name='description' className='max-h-[200px]'></Textarea>
                                </div>
                            }
                        </div>

                    ))}
                    <div className='mt-5'>
                        <Button>{isLoading ? <Loader className='animate-spin' /> : "Generate"}</Button>
                    </div>
                </div>
            </form>
            <div className='bg-white rounded mt-5 py-2'>
                <div className='mx-5 flex flex-col gap-3 mb-3'>

                    <h2 className='font-medium'>Generated Output</h2>
                    <QuillEditor value={isLoading ? 'Generating' : aiOutput} />
                </div>
            </div>
        </div>
    )
}

export default TemplateSlugPage