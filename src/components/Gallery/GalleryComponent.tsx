import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import ImageGallery from 'react-image-gallery';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'


const images = [
    {
        original: "/images/ragnatree.png",
        thumbnail: '/images/ragnatree.png',
    },
]
export default function GalleryComponent() {
    return(
        <ImageGallery items={images} />
    )
}