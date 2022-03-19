import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import ImageGallery from 'react-image-gallery';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import {map} from "react-bootstrap/ElementChildren";
import {Link, useLocation, useSearchParams} from "react-router-dom";
import {ImageViewer} from "react-image-viewer-dv";



export default function ImageCarousel() {

let khrf2021 = [
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_1.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_2.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_3.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_4.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_5.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_6.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_7.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_8.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_9.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_10.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_11.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_12.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_13.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_14.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_15.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_16.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_17.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_18.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_19.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_20.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_21.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_22.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_23.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_24.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_25.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_26.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_27.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_28.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_29.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_30.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_31.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_32.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_33.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_34.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_35.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_36.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_37.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_38.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_39.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_40.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_41.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_42.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_43.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_44.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_45.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_46.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_47.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_48.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_49.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_50.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_51.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_52.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_53.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_54.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_55.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_56.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_57.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_58.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_59.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_60.jpg'},
        // {url: '/images/galleries/khrf2021/Luku_and_Ulfhedinn_Immigrant_Song.mp4'},

    ];

let rh2021 = [
        {url: '/images/galleries/rh2021/Luku_Robinhood_2021_1.jpg'},
        {url: '/images/galleries/rh2021/Luku_Robinhood_2021_2.jpg'},
        {url: '/images/galleries/rh2021/Luku_Robinhood_2021_3.jpg'},
        {url: '/images/galleries/rh2021/Luku_Robinhood_2021_4.jpg'},
        {url: '/images/galleries/rh2021/Luku_Robinhood_2021_5.jpg'},
        {url: '/images/galleries/rh2021/Luku_Robinhood_2021_6.jpg'},
        {url: '/images/galleries/rh2021/Luku_Robinhood_2021_7.jpg'},
    ];



let irf2019 = [
        {url: '/images/galleries/irf2019/irf19_luku1.jpg',
},
        {url: '/images/galleries/irf2019/irf19_luku2.jpg'},
        {url: '/images/galleries/irf2019/irf19_luku3.jpg'},
        {url: '/images/galleries/irf2019/irf19_luku4.jpg'},
        ];

let khrf19 = [
        {url: '/images/galleries/khrf2019/luku1_khrf19.jpg'},
        {url: '/images/galleries/khrf2019/luku2_khrf19.jpg'},
        {url: '/images/galleries/khrf2019/luku3_khrf19.jpg'},
        {url: '/images/galleries/khrf2019/luku4_khrf19.jpg'},
        {url: '/images/galleries/khrf2019/luku5_khrf19.jpg'},
        {url: '/images/galleries/khrf2019/luku6_khrf19.jpg'},
        {url: '/images/galleries/khrf2019/luku7_khrf19.jpg'},
        {url: '/images/galleries/khrf2019/luku8_khrf19.jpg'},
        {url: '/images/galleries/khrf2019/luku9_khrf19.jpg'},
        {url: '/images/galleries/khrf2019/luku10_khrf19.jpg'},
        {url: '/images/galleries/khrf2019/luku11_khrf19.jpg'},
        {url: '/images/galleries/khrf2019/luku12_khrf19.jpg'},
        {url: '/images/galleries/khrf2019/luku13_khrf19.jpg'},
        {url: '/images/galleries/khrf2019/luku14_khrf19.jpg'},
        {url: '/images/galleries/khrf2019/luku15_khrf19.jpg'},
        {url: '/images/galleries/khrf2019/luku16_khrf19.jpg'},
        {url: '/images/galleries/khrf2019/luku17_khrf19.jpg'},
        {url: '/images/galleries/khrf2019/luku18_khrf19.jpg'},
        {url: '/images/galleries/khrf2019/luku19_khrf19.jpg'},
        {url: '/images/galleries/khrf2019/luku20_khrf19.jpg'},
        {url: '/images/galleries/khrf2019/luku21_khrf19.jpg'},
        {url: '/images/galleries/khrf2019/luku22_khrf19.jpg'},
        {url: '/images/galleries/khrf2019/luku23_khrf19.jpg'},
        {url: '/images/galleries/khrf2019/luku24_khrf19.jpg'},
        {url: '/images/galleries/khrf2019/luku25_khrf19.jpg'},
        {url: '/images/galleries/khrf2019/luku26_khrf19.jpg'},
        {url: '/images/galleries/khrf2019/luku27_khrf19.jpg'},
        {url: '/images/galleries/khrf2019/luku28_khrf19.jpg'},
        {url: '/images/galleries/khrf2019/luku29_khrf19.jpg'},
        {url: '/images/galleries/khrf2019/luku30_khrf19.jpg'},
        {url: '/images/galleries/khrf2019/luku31_khrf19.jpg'},

    ];

let khrf20 = [
        {url: '/images/galleries/khrf2020/khrf2020_1.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_2.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_3.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_4.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_5.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_6.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_7.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_8.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_9.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_10.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_11.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_12.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_13.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_14.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_15.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_16.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_17.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_18.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_19.jpeg'},
        {url: '/images/galleries/khrf2020/khrf2020_20.jpeg'},
        {url: '/images/galleries/khrf2020/khrf2020_21.jpeg'},
        {url: '/images/galleries/khrf2020/khrf2020_22.jpeg'},
        {url: '/images/galleries/khrf2020/khrf2020_23.jpeg'},
        {url: '/images/galleries/khrf2020/khrf2020_24.jpeg'},
        {url: '/images/galleries/khrf2020/khrf2020_25.jpeg'},
        {url: '/images/galleries/khrf2020/khrf2020_26.jpeg'},
        {url: '/images/galleries/khrf2020/khrf2020_27.jpeg'},
        {url: '/images/galleries/khrf2020/khrf2020_28.jpeg'},
        {url: '/images/galleries/khrf2020/khrf2020_29.jpeg'},
        {url: '/images/galleries/khrf2020/khrf2020_30.jpeg'},
        {url: '/images/galleries/khrf2020/khrf2020_31.jpeg'},
        {url: '/images/galleries/khrf2020/khrf2020_32.jpeg'},
        {url: '/images/galleries/khrf2020/khrf2020_33.jpeg'},
        {url: '/images/galleries/khrf2020/khrf2020_34.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_35.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_36.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_37.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_38.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_39.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_40.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_41.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_42.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_43.jpeg'},
        {url: '/images/galleries/khrf2020/khrf2020_44.jpeg'},
        {url: '/images/galleries/khrf2020/khrf2020_45.jpeg'},
        {url: '/images/galleries/khrf2020/khrf2020_46.jpeg'},
        {url: '/images/galleries/khrf2020/khrf2020_47.jpeg'},
        {url: '/images/galleries/khrf2020/khrf2020_48.jpeg'},
        {url: '/images/galleries/khrf2020/khrf2020_49.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_50.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_51.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_52.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_53.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_54.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_55.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_56.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_57.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_58.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_59.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_60.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_61.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_62.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_63.jpg'},

    ];

        const test = [
                {
                        original: 'https://picsum.photos/id/1018/1000/600/',
                        thumbnail: 'https://picsum.photos/id/1018/250/150/',
                },
                {
                        original: 'https://picsum.photos/id/1015/1000/600/',
                        thumbnail: 'https://picsum.photos/id/1015/250/150/',
                },
                {
                        original: 'https://picsum.photos/id/1019/1000/600/',
                        thumbnail: 'https://picsum.photos/id/1019/250/150/',
                },
        ];

        let galleryImages;


    const [searchParams] = useSearchParams();
    const galleryId =searchParams.get('galleryId')


        if(galleryId == "irf2019"){
                // @ts-ignore
                galleryImages = irf2019;
                console.log(galleryImages);
        }

        const galleryName =searchParams.get('galleryName')
    // console.log(searchParams);
        console.log(galleryImages);

    return(

        <div className="bg-white">

                <section className="overflow-hidden text-gray-700 ">
                        <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
                                <div className="flex flex-wrap -m-1 md:-m-2">
                                        {galleryImages.map((img) =>
                                        <div className="flex flex-wrap w-1/3">
                                                <div className="w-50 p-1 md:p-2">
                                                        <img alt="gallery"
                                                             className="block object-cover object-center w-25 h-full rounded-lg"
                                                             src={img.url} />
                                                </div>
                                        </div>)}
                                </div>
                        </div>
                </section>
            {/*<div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">*/}
            {/*    <div className="space-y-12">*/}
            {/*        <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">*/}
            {/*            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{galleryName} Gallery</h2>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*            /!*{galleryImages.map((img) => (*!/*/}
            {/*            /!*        <ImageViewer>*!/*/}
            {/*            /!*                <img src={img.url}  alt="Your image" />*!/*/}
            {/*            /!*        </ImageViewer>*!/*/}
            {/*            /!*))}*!/*/}

            {/*    <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">*/}

            {/*            {galleryImages.map((img) => (*/}
            {/*                <li  className="relative">*/}
            {/*                        <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">*/}

            {/*                                        <img src={img.url} alt="" className="object-cover pointer-events-none group-hover:opacity-75" />*/}

            {/*                                <button type="button" className="absolute inset-0 focus:outline-none">*/}

            {/*                                                /!*<img src={img.url}  alt="Your image" />*!/*/}

            {/*                                </button>*/}

            {/*                        </div>*/}
            {/*                        /!*<p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">{file.title}</p>*!/*/}
            {/*                        /!*<p className="block text-sm font-medium text-gray-500 pointer-events-none">{file.size}</p>*!/*/}
            {/*                </li>*/}
            {/*            ))}*/}
            {/*    </ul>*/}

        </div>
    )
}

// <div>
//     {galleryThumbs.map((gallery) => (
//         <div className="image-gallery-thumbnail">
//             <h3>{gallery.name}</h3>
//             <img src={gallery.url} />
//         </div>
//     ))}
// </div>