'use client'
import { Button } from '@/components/ui/button'
import { Check, CheckCheckIcon, CreditCard } from 'lucide-react'
import React from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import Image from 'next/image'
import axios from 'axios'
import { useRouter } from 'next/navigation'
// import Razorpay from 'razorpay'
const UpgradePage = () => {
    const router = useRouter()
    const handlePayment = async (opts: string) => {
        if (opts === 'stripe') {

            const response = await axios.post('/api/upgrade/checkout', {
                opts: opts
            })
            router.push(response.data.url)
        }
        if (opts === 'razorpay') {
            const currency: string = 'INR';
            const receiptId: string = '123456789';
            const orders = await axios.post('/api/upgrade/checkout/razorpay', {
                currency,
                amount: 10000,
                receiptId
            })
            const response = await orders.data
            console.log(response)
            const option: object = {
                key: '',
                amount: 10000,
                currency,
                name: 'Content Crafter AI',
                description: '10,000 AI Credits',
                image: '',
                order_id: response.id,
                handler: async function (res: any) {
                    console.log('payment Captured')

                },
                prefill: {
                    name: 'Content Crafter AI',
                    email: 'contentcrafter@gmail.com',
                    contact: '900000000',
                },
                notes: {
                    address: 'Razorpay Corporate Office',
                },
                theme: {
                    color: '#3388cc',
                },
            }

            //@ts-ignore
            const rzp1 = new Razorpay(option)
            rzp1.on('payment failed', function (res: any) {
                alert(res.error.code)
            })
            rzp1.open()
        }
    }
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
                                        <Button className='bg-blue-200 hover:bg-white hover:border' onClick={() => handlePayment('razorpay')}>
                                            <Image src='/razorpay.png' width={100} height={100} alt='razorpay' />
                                        </Button>
                                        <Button className='bg-violet-200 hover:bg-white hover:border ' onClick={() => handlePayment('stripe')}>
                                            <Image src='/stripe.png' width={60} height={60} alt='razorpay' />
                                        </Button>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        </div>
                    </div>
                    {/* <div className='bg-white flex flex-col p-5 rounded'>
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
                                        <Button className='bg-blue-200 hover:bg-white hover:border' onClick={() => handlePayment('razorpay')}>
                                            <Image src='/razorpay.png' width={100} height={100} alt='razorpay' />
                                        </Button>
                                        <Button className='bg-violet-200 hover:bg-white hover:border ' onClick={() => handlePayment('stripe')}>
                                            <Image src='/stripe.png' width={60} height={60} alt='razorpay' />
                                        </Button>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default UpgradePage