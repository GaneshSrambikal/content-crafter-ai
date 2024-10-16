import {
  FaYoutube,
  FaInstagram,
  FaTiktok,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';

export const templateData = [
  {
    name: 'Youtube Video Description',
    desc: 'An AI tool that generate youtube video description from your information',
    category: 'youtube',
    icon: FaYoutube,
    aiPrompt:
      'Give me youtube video description Ideas based on given video description outline and title and give me result in Rich Text Editor format',
    slug: 'youtube-description',
    form: [
      {
        label: 'Youtube Video Description Title',
        field: 'input',
        name: 'niche',
        required: true,
      },
      {
        label: 'Enter Video Description Outline',
        field: 'textarea',
        name: 'outline',
      },
    ],
    textColor: 'text-red-600',
    bgColor: 'bg-red-600',
  },
  {
    name: 'Youtube Video Idea',
    desc: 'An AI tool that generate Youtube Video Idea based on given information',
    category: 'youtube',
    icon: FaYoutube,
    aiPrompt:
      'Give me youtube video idea on given video niche & outline topic and give me result in Rich Text Editor format',
    slug: 'generate-youtube-video-idea',
    form: [
      {
        label: 'Enter your video niche',
        field: 'input',
        name: 'niche',
        required: true,
      },
      {
        label: 'Enter video outline',
        field: 'textarea',
        name: 'outline',
      },
    ],
    textColor: 'text-red-600',
    bgColor: 'bg-red-600',
  },
  {
    name: 'Instagram Hashtags',
    desc: 'An AI tool that generate Instagram hashtags based on your post niche and outline information',
    category: 'instagram',
    icon: FaInstagram,
    aiPrompt:
      'Give me some good examples of instagram hashtags on given niche & outline topic and give me result in Rich Text Editor format',
    slug: 'generate-instagram-hashtags',
    form: [
      {
        label: 'Enter your post niche',
        field: 'input',
        name: 'niche',
        required: true,
      },
      {
        label: 'Enter post outline',
        field: 'textarea',
        name: 'outline',
      },
    ],
    textColor: 'text-pink-600',
    bgColor: 'bg-pink-600',
  },
  {
    name: 'Tiktok Hashtags',
    desc: 'An AI tool that generate Tiktok topic idea based on your post niche and outline information',
    category: 'tiktok',
    icon: FaTiktok,
    aiPrompt:
      'Give me some good examples of instagram hashtags on given niche & outline topic and give me result in Rich Text Editor format',
    slug: 'generate-tiktok-hashtags',
    form: [
      {
        label: 'Enter your post niche',
        field: 'input',
        name: 'niche',
        required: true,
      },
      {
        label: 'Enter post outline',
        field: 'textarea',
        name: 'outline',
      },
    ],
    textColor: 'text-purple-600',
    bgColor: 'bg-purple-600',
  },
  {
    name: 'Linkedin Post',
    desc: 'An AI tool that generate Linkedin Post idea based on your post niche and outline information',
    category: 'linkedin',
    icon: FaLinkedin,
    aiPrompt:
      'Give me some good examples of Linkedin Post idea on given niche & outline topic and give me result in Rich Text Editor format',
    slug: 'generate-linkedin-post',
    form: [
      {
        label: 'Enter your post niche',
        field: 'input',
        name: 'niche',
        required: true,
      },
      {
        label: 'Enter post outline',
        field: 'textarea',
        name: 'outline',
      },
    ],
    textColor: 'text-blue-600',
    bgColor: 'bg-blue-400',
  },
  {
    name: 'Tweet',
    desc: 'An AI tool that generate Linkedin Post idea based on your post niche and outline information',
    category: 'tweet',
    icon: FaTwitter,
    aiPrompt:
      'Give me 280 characters of tweet example on given niche & outline topic',
    slug: 'generate-tweet-post',
    form: [
      {
        label: 'Enter your tweet niche',
        field: 'input',
        name: 'niche',
        required: true,
      },
      {
        label: 'Enter tweet outline',
        field: 'textarea',
        name: 'outline',
      },
    ],
    textColor: 'text-blue-400',
    bgColor: 'bg-blue-600',
  },
];
