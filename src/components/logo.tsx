import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Archivo_Black, Lilita_One, Urbanist , Righteous} from 'next/font/google'
import { cn } from '@/lib/utils'

const archivo_b = Archivo_Black({ style: 'normal', subsets: ["latin"], weight: '400' })
const urbanist = Urbanist({ weight: '400', subsets: ['latin'] })
const lilitaOne = Lilita_One({ weight: '400', subsets: ['latin'] })
const righteous = Righteous({weight: '400', subsets:['latin']})
const Logo = () => {
    return (
        <Link href='/' className='flex items-center gap-2 mt-2'>
            <Image
                src='/logo.svg'
                width={40}
                height={40}
                alt='logo'
                className='w-5 md:w-10'
            />
            <div className={cn(righteous.className, ' flex flex-col')}>
                <p className='uppercase text-xs md:text-sm font-bold tracking-widest'><span className='text-green-600'>c</span>ontent</p>
                <p className='uppercase text-xs md:text-sm font-bold tracking-widest'><span className='text-green-600'>c</span>rafter</p>

            </div>

        </Link>
    )
}

export default Logo