import { Button } from '@/components/ui/button'
import { Check, CheckCheckIcon, CreditCard } from 'lucide-react'
import React from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
const UpgradePage = () => {
    return (
        <div className='mx-5 py-2'>
            <div className='bg-white mt-5 py-6 px-4 flex gap-3 items-center'>
                <CreditCard className='bg-purple-600 text-white p-2 w-10 h-10 rounded' />
                <h2 className='font-medium'>UpgradePage</h2>
            </div>
            <div className='py-6 px-4 mt-5 rounded'>
                <div className='flex flex-col md:flex-row items-center gap-5 justify-center'>
                    <div className='bg-white flex flex-col p-5 rounded'>
                        <div className='mb-1'>
                            <h2 className='font-bold text-xl'>Rs.199 One-Time Purchase</h2>
                            <p className='text-sm mb-2'>10,000 AI Credits</p>
                        </div>
                        <div className='mt-5 mb-5'>
                            <ul className='purchase-list-type-icons'>
                                <li className='flex items-center gap-1 '><Check className='w-4 h-4 text-green-600' /> 100,000 words/purchase</li>
                                <li className='flex items-center gap-1'><Check className='w-4 h-4 text-green-600' />All Template Access</li>
                                <li className='flex items-center gap-1'><Check className='w-4 h-4 text-green-600' />Retain All History</li>

                            </ul>
                        </div>
                        <div className='mt-5'>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button className='w-full'>Purchase</Button>
                                </PopoverTrigger>
                                <PopoverContent className='w-80'>
                                    <div className='grid gap-4'>
                                        <Button>Pay with RazorPay</Button>
                                        <Button>Pay with Stripe</Button>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        </div>
                    </div>
                    <div className='bg-white flex flex-col p-5 rounded'>
                        <div className='mb-1'>
                            <h2 className='font-bold text-xl'>Rs.299 One-Time Purchase</h2>
                            <p className='text-sm mb-2'>20,000 AI Credits</p>
                        </div>
                        <div className='mt-5 mb-5'>
                            <ul className='purchase-list-type-icons'>
                                <li className='flex items-center gap-1'><Check className='w-4 h-4 text-green-600' /> 100,000 words/purchase</li>
                                <li className='flex items-center gap-1'><Check className='w-4 h-4 text-green-600' />All Template Access</li>
                                <li className='flex items-center gap-1'><Check className='w-4 h-4 text-green-600' />Retain All History</li>

                            </ul>
                        </div>
                        <div className='mt-5'>
                        <Popover>
                                <PopoverTrigger asChild>
                                    <Button className='w-full'>Purchase</Button>
                                </PopoverTrigger>
                                <PopoverContent className='w-80'>
                                    <div className='grid gap-4'>
                                        <Button>Pay with RazorPay</Button>
                                        <Button>Pay with Stripe</Button>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpgradePage