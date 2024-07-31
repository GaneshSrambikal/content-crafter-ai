import {Gem, BadgePlus, FileClock  } from 'lucide-react'

export const menuList = [
    {
        name: 'Create Tools',
        icon: BadgePlus,
        path: '/dashboard'
    },
    {
        name: 'AI Output History',
        icon: FileClock,
        path: '/dashboard/history'
    },
    {
        name: 'Upgrade Credits',
        icon: Gem,
        path: '/dashboard/upgrade'
    },
]