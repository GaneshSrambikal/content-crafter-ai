import { cn } from '@/lib/utils';
import React from 'react'

import {
    FaYoutube,
    FaInstagram,
    FaTiktok,
    FaLinkedin,
    FaTwitter,
} from "react-icons/fa";

const iconList = [
    {
        name: 'Youtube Video Description',
        icon: FaYoutube,
        bgColor: 'bg-red-600'

    },
    {
        name: 'Youtube Video Idea',
        icon: FaYoutube,
        bgColor: 'bg-red-600'

    },
    {
        name: 'Tiktok Hashtags',
        icon: FaTiktok,
        bgColor: 'bg-purple-600'
    }, {
        name: 'Instagram Hashtags',
        icon: FaInstagram,
        bgColor: 'bg-pink-600'
    },
    {
        name: 'Linkedin Post',
        icon: FaLinkedin,
        bgColor: 'bg-blue-400'
    },
    {
        name: 'Tweet',
        icon: FaTwitter,
        bgColor: 'bg-blue-600'
    }
]

const TemplateIcon = ({ template }: { template: string }) => {

    const selectedList = iconList.filter((item) => item.name === template)
    const iconStyles = 'w-10 h-10 p-2 text-white rounded'
    switch (selectedList[0].name) {
        case 'Youtube Video Description':
            return <FaYoutube className={cn(selectedList[0].bgColor, iconStyles)} />
            break;
        case 'Youtube Video Idea':
            return <FaYoutube className={cn(selectedList[0].bgColor, iconStyles)} />
            break;
        case 'Tiktok Hashtags':
            return <FaTiktok className={cn(selectedList[0].bgColor, iconStyles)} />
            break;
        case 'Instagram Hashtags':
            return <FaInstagram className={cn(selectedList[0].bgColor, iconStyles)} />
            break;
        case 'Linkedin Post':
            return <FaLinkedin className={cn(selectedList[0].bgColor, iconStyles)} />
            break;
        case 'Tweet':
            return <FaTwitter className={cn(selectedList[0].bgColor, iconStyles)} />
            break;

        default:
            break;
    }
}

export default TemplateIcon