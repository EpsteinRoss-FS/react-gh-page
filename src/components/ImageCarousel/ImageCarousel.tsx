import {Link, useLocation, useSearchParams} from "react-router-dom";
import "react-awesome-lightbox/build/style.css";
import DztImageGalleryComponent from "reactjs-image-gallery";
import "./carousel.css";


export default function ImageCarousel() {

let khrf2021 = [
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_1.jpg', thumbUrl: '/images/galleries/khrf2021/thumbs/thumb_Luku_Khrf_2021_1.jpg',},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_2.jpg', thumbUrl: '/images/galleries/khrf2021/thumbs/thumb_Luku_Khrf_2021_2.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_3.jpg', thumbUrl: '/images/galleries/khrf2021/thumbs/thumb_Luku_Khrf_2021_3.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_4.jpg', thumbUrl: '/images/galleries/khrf2021/thumbs/thumb_Luku_Khrf_2021_4.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_5.jpg', thumbUrl: '/images/galleries/khrf2021/thumbs/thumb_Luku_Khrf_2021_5.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_6.jpg', thumbUrl: '/images/galleries/khrf2021/thumbs/thumb_Luku_Khrf_2021_6.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_7.jpg', thumbUrl: '/images/galleries/khrf2021/thumbs/thumb_Luku_Khrf_2021_7.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_8.jpg', thumbUrl: '/images/galleries/khrf2021/thumbs/thumb_Luku_Khrf_2021_8.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_9.jpg', thumbUrl: '/images/galleries/khrf2021/thumbs/thumb_Luku_Khrf_2021_9.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_10.jpg', thumbUrl: '/images/galleries/khrf2021/thumbs/thumb_Luku_Khrf_2021_10.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_11.jpg', thumbUrl: '/images/galleries/khrf2021/thumbs/thumb_Luku_Khrf_2021_11.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_12.jpg', thumbUrl: '/images/galleries/khrf2021/thumbs/thumb_Luku_Khrf_2021_12.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_13.jpg', thumbUrl: '/images/galleries/khrf2021/thumbs/thumb_Luku_Khrf_2021_13.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_14.jpg', thumbUrl: '/images/galleries/khrf2021/thumbs/thumb_Luku_Khrf_2021_14.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_15.jpg', thumbUrl: '/images/galleries/khrf2021/thumbs/thumb_Luku_Khrf_2021_15.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_16.jpg', thumbUrl: '/images/galleries/khrf2021/thumbs/thumb_Luku_Khrf_2021_16.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_17.jpg', thumbUrl: '/images/galleries/khrf2021/thumbs/thumb_Luku_Khrf_2021_17.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_18.jpg', thumbUrl: '/images/galleries/khrf2021/thumbs/thumb_Luku_Khrf_2021_18.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_19.jpg', thumbUrl: '/images/galleries/khrf2021/thumbs/thumb_Luku_Khrf_2021_19.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_20.jpg', thumbUrl: '/images/galleries/khrf2021/thumbs/thumb_Luku_Khrf_2021_20.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_21.jpg', thumbUrl: '/images/galleries/khrf2021/thumbs/thumb_Luku_Khrf_2021_21.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_22.jpg', thumbUrl: '/images/galleries/khrf2021/thumbs/thumb_Luku_Khrf_2021_22.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_23.jpg', thumbUrl: '/images/galleries/khrf2021/thumbs/thumb_Luku_Khrf_2021_23.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_24.jpg', thumbUrl: '/images/galleries/khrf2021/thumbs/thumb_Luku_Khrf_2021_24.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_25.jpg', thumbUrl: '/images/galleries/khrf2021/thumbs/thumb_Luku_Khrf_2021_25.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_26.jpg', thumbUrl: '/images/galleries/khrf2021/thumbs/thumb_Luku_Khrf_2021_26.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_27.jpg', thumbUrl: '/images/galleries/khrf2021/thumbs/thumb_Luku_Khrf_2021_27.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_28.jpg', thumbUrl: '/images/galleries/khrf2021/thumbs/thumb_Luku_Khrf_2021_28.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_29.jpg', thumbUrl: '/images/galleries/khrf2021/thumbs/thumb_Luku_Khrf_2021_29.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_30.jpg', thumbUrl: '/images/galleries/khrf2021/thumbs/thumb_Luku_Khrf_2021_30.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_31.jpg', thumbUrl: '/images/galleries/khrf2021/thumbs/thumb_Luku_Khrf_2021_31.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_32.jpg', thumbUrl: '/images/galleries/khrf2021/thumbs/thumb_Luku_Khrf_2021_32.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_33.jpg', thumbUrl: '/images/galleries/khrf2021/thumbs/thumb_Luku_Khrf_2021_33.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_34.jpg', thumbUrl: '/images/galleries/khrf2021/thumbs/thumb_Luku_Khrf_2021_34.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_35.jpg', thumbUrl: '/images/galleries/khrf2021/thumbs/thumb_Luku_Khrf_2021_35.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_36.jpg', thumbUrl: '/images/galleries/khrf2021/thumbs/thumb_Luku_Khrf_2021_36.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_37.jpg', thumbUrl: '/images/galleries/khrf2021/thumbs/thumb_Luku_Khrf_2021_37.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_38.jpg', thumbUrl: '/images/galleries/khrf2021/thumbs/thumb_Luku_Khrf_2021_38.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_39.jpg', thumbUrl: '/images/galleries/khrf2021/thumbs/thumb_Luku_Khrf_2021_39.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_40.jpg', thumbUrl: '/images/galleries/khrf2021/thumbs/thumb_Luku_Khrf_2021_40.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_41.jpg', thumbUrl: '/images/galleries/khrf2021/thumbs/thumb_Luku_Khrf_2021_41.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_42.jpg', thumbUrl: '/images/galleries/khrf2021/thumbs/thumb_Luku_Khrf_2021_42.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_43.jpg', thumbUrl: '/images/galleries/khrf2021/thumbs/thumb_Luku_Khrf_2021_43.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_44.jpg', thumbUrl: '/images/galleries/khrf2021/thumbs/thumb_Luku_Khrf_2021_44.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_45.jpg', thumbUrl: '/images/galleries/khrf2021/thumbs/thumb_Luku_Khrf_2021_45.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_46.jpg', thumbUrl: '/images/galleries/khrf2021/thumbs/thumb_Luku_Khrf_2021_46.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_47.jpg', thumbUrl: '/images/galleries/khrf2021/thumbs/thumb_Luku_Khrf_2021_47.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_48.jpg', thumbUrl: '/images/galleries/khrf2021/thumbs/thumb_Luku_Khrf_2021_48.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_49.jpg', thumbUrl: '/images/galleries/khrf2021/thumbs/thumb_Luku_Khrf_2021_49.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_50.jpg', thumbUrl: '/images/galleries/khrf2021/thumbs/thumb_Luku_Khrf_2021_50.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_51.jpg', thumbUrl: '/images/galleries/khrf2021/thumbs/thumb_Luku_Khrf_2021_51.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_52.jpg', thumbUrl: '/images/galleries/khrf2021/thumbs/thumb_Luku_Khrf_2021_52.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_53.jpg', thumbUrl: '/images/galleries/khrf2021/thumbs/thumb_Luku_Khrf_2021_53.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_54.jpg', thumbUrl: '/images/galleries/khrf2021/thumbs/thumb_Luku_Khrf_2021_54.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_55.jpg', thumbUrl: '/images/galleries/khrf2021/thumbs/thumb_Luku_Khrf_2021_55.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_56.jpg', thumbUrl: '/images/galleries/khrf2021/thumbs/thumb_Luku_Khrf_2021_56.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_57.jpg', thumbUrl: '/images/galleries/khrf2021/thumbs/thumb_Luku_Khrf_2021_57.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_58.jpg', thumbUrl: '/images/galleries/khrf2021/thumbs/thumb_Luku_Khrf_2021_58.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_59.jpg', thumbUrl: '/images/galleries/khrf2021/thumbs/thumb_Luku_Khrf_2021_59.jpg'},
        {url: '/images/galleries/khrf2021/Luku_Khrf_2021_60.jpg', thumbUrl: '/images/galleries/khrf2021/thumbs/thumb_Luku_Khrf_2021_60.jpg'},
        // {url: '/images/galleries/khrf2021/Luku_and_Ulfhedinn_Immigrant_Song.mp4'},

    ];

let rh2021 = [
        {url: '/images/galleries/rh2021/Luku_Robinhood_2021_1.jpg',thumbUrl: '/images/galleries/rh2021/thumbs/thumb_Luku_Robinhood_2021_1.jpg',},
        {url: '/images/galleries/rh2021/Luku_Robinhood_2021_2.jpg',thumbUrl: '/images/galleries/rh2021/thumbs/thumb_Luku_Robinhood_2021_2.jpg',},
        {url: '/images/galleries/rh2021/Luku_Robinhood_2021_3.jpg',thumbUrl: '/images/galleries/rh2021/thumbs/thumb_Luku_Robinhood_2021_3.jpg',},
        {url: '/images/galleries/rh2021/Luku_Robinhood_2021_4.jpg',thumbUrl: '/images/galleries/rh2021/thumbs/thumb_Luku_Robinhood_2021_4.jpg',},
        {url: '/images/galleries/rh2021/Luku_Robinhood_2021_5.jpg',thumbUrl: '/images/galleries/rh2021/thumbs/thumb_Luku_Robinhood_2021_5.jpg',},
        {url: '/images/galleries/rh2021/Luku_Robinhood_2021_6.jpg',thumbUrl: '/images/galleries/rh2021/thumbs/thumb_Luku_Robinhood_2021_6.jpg',},
        {url: '/images/galleries/rh2021/Luku_Robinhood_2021_7.jpg',thumbUrl: '/images/galleries/rh2021/thumbs/thumb_Luku_Robinhood_2021_7.jpg',},
    ];



let irf2019 = [
        {url: '/images/galleries/irf2019/irf19_luku1.jpg',thumbUrl: '/images/galleries/irf2019/thumbs/thumb_irf19_luku1.jpg',
},
        {url: '/images/galleries/irf2019/irf19_luku2.jpg',thumbUrl: '/images/galleries/irf2019/thumbs/thumb_irf19_luku2.jpg'},
        {url: '/images/galleries/irf2019/irf19_luku3.jpg',thumbUrl: '/images/galleries/irf2019/thumbs/thumb_irf19_luku3.jpg'},
        {url: '/images/galleries/irf2019/irf19_luku4.jpg',thumbUrl: '/images/galleries/irf2019/thumbs/thumb_irf19_luku4.jpg'},
        ];

let khrf2019 = [
        {url: '/images/galleries/khrf2019/luku1_khrf19.jpg', thumbUrl: '/images/galleries/khrf2019/thumbs/thumb_luku1_khrf19.jpg'},
        {url: '/images/galleries/khrf2019/luku2_khrf19.jpg', thumbUrl: '/images/galleries/khrf2019/thumbs/thumb_luku2_khrf19.jpg'},
        {url: '/images/galleries/khrf2019/luku3_khrf19.jpg', thumbUrl: '/images/galleries/khrf2019/thumbs/thumb_luku3_khrf19.jpg'},
        {url: '/images/galleries/khrf2019/luku4_khrf19.jpg', thumbUrl: '/images/galleries/khrf2019/thumbs/thumb_luku4_khrf19.jpg'},
        {url: '/images/galleries/khrf2019/luku5_khrf19.jpg', thumbUrl: '/images/galleries/khrf2019/thumbs/thumb_luku5_khrf19.jpg'},
        {url: '/images/galleries/khrf2019/luku6_khrf19.jpg', thumbUrl: '/images/galleries/khrf2019/thumbs/thumb_luku6_khrf19.jpg'},
        {url: '/images/galleries/khrf2019/luku7_khrf19.jpg', thumbUrl: '/images/galleries/khrf2019/thumbs/thumb_luku7_khrf19.jpg'},
        {url: '/images/galleries/khrf2019/luku8_khrf19.jpg', thumbUrl: '/images/galleries/khrf2019/thumbs/thumb_luku8_khrf19.jpg'},
        {url: '/images/galleries/khrf2019/luku9_khrf19.jpg', thumbUrl: '/images/galleries/khrf2019/thumbs/thumb_luku9_khrf19.jpg'},
        {url: '/images/galleries/khrf2019/luku10_khrf19.jpg', thumbUrl: '/images/galleries/khrf2019/thumbs/thumb_luku10_khrf19.jpg'},
        {url: '/images/galleries/khrf2019/luku11_khrf19.jpg', thumbUrl: '/images/galleries/khrf2019/thumbs/thumb_luku11_khrf19.jpg'},
        {url: '/images/galleries/khrf2019/luku12_khrf19.jpg', thumbUrl: '/images/galleries/khrf2019/thumbs/thumb_luku12_khrf19.jpg'},
        {url: '/images/galleries/khrf2019/luku13_khrf19.jpg', thumbUrl: '/images/galleries/khrf2019/thumbs/thumb_luku13_khrf19.jpg'},
        {url: '/images/galleries/khrf2019/luku14_khrf19.jpg', thumbUrl: '/images/galleries/khrf2019/thumbs/thumb_luku14_khrf19.jpg'},
        {url: '/images/galleries/khrf2019/luku15_khrf19.jpg', thumbUrl: '/images/galleries/khrf2019/thumbs/thumb_luku15_khrf19.jpg'},
        {url: '/images/galleries/khrf2019/luku16_khrf19.jpg', thumbUrl: '/images/galleries/khrf2019/thumbs/thumb_luku16_khrf19.jpg'},
        {url: '/images/galleries/khrf2019/luku17_khrf19.jpg', thumbUrl: '/images/galleries/khrf2019/thumbs/thumb_luku17_khrf19.jpg'},
        {url: '/images/galleries/khrf2019/luku18_khrf19.jpg', thumbUrl: '/images/galleries/khrf2019/thumbs/thumb_luku18_khrf19.jpg'},
        {url: '/images/galleries/khrf2019/luku19_khrf19.jpg', thumbUrl: '/images/galleries/khrf2019/thumbs/thumb_luku19_khrf19.jpg'},
        {url: '/images/galleries/khrf2019/luku20_khrf19.jpg', thumbUrl: '/images/galleries/khrf2019/thumbs/thumb_luku20_khrf19.jpg'},
        {url: '/images/galleries/khrf2019/luku21_khrf19.jpg', thumbUrl: '/images/galleries/khrf2019/thumbs/thumb_luku21_khrf19.jpg'},
        {url: '/images/galleries/khrf2019/luku22_khrf19.jpg', thumbUrl: '/images/galleries/khrf2019/thumbs/thumb_luku22_khrf19.jpg'},
        {url: '/images/galleries/khrf2019/luku23_khrf19.jpg', thumbUrl: '/images/galleries/khrf2019/thumbs/thumb_luku23_khrf19.jpg'},
        {url: '/images/galleries/khrf2019/luku24_khrf19.jpg', thumbUrl: '/images/galleries/khrf2019/thumbs/thumb_luku24_khrf19.jpg'},
        {url: '/images/galleries/khrf2019/luku25_khrf19.jpg', thumbUrl: '/images/galleries/khrf2019/thumbs/thumb_luku25_khrf19.jpg'},
        {url: '/images/galleries/khrf2019/luku26_khrf19.jpg', thumbUrl: '/images/galleries/khrf2019/thumbs/thumb_luku26_khrf19.jpg'},
        {url: '/images/galleries/khrf2019/luku27_khrf19.jpg', thumbUrl: '/images/galleries/khrf2019/thumbs/thumb_luku27_khrf19.jpg'},
        {url: '/images/galleries/khrf2019/luku28_khrf19.jpg', thumbUrl: '/images/galleries/khrf2019/thumbs/thumb_luku28_khrf19.jpg'},
        {url: '/images/galleries/khrf2019/luku29_khrf19.jpg', thumbUrl: '/images/galleries/khrf2019/thumbs/thumb_luku29_khrf19.jpg'},
        {url: '/images/galleries/khrf2019/luku30_khrf19.jpg', thumbUrl: '/images/galleries/khrf2019/thumbs/thumb_luku30_khrf19.jpg'},
        {url: '/images/galleries/khrf2019/luku31_khrf19.jpg', thumbUrl: '/images/galleries/khrf2019/thumbs/thumb_luku31_khrf19.jpg'},

    ];

let khrf2020 = [
        {url: '/images/galleries/khrf2020/khrf2020_1.jpg', thumbUrl: '/images/galleries/khrf2020/thumbs/thumb_khrf2020_1.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_2.jpg', thumbUrl: '/images/galleries/khrf2020/thumbs/thumb_khrf2020_2.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_3.jpg', thumbUrl: '/images/galleries/khrf2020/thumbs/thumb_khrf2020_3.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_4.jpg', thumbUrl: '/images/galleries/khrf2020/thumbs/thumb_khrf2020_4.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_5.jpg', thumbUrl: '/images/galleries/khrf2020/thumbs/thumb_khrf2020_5.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_6.jpg', thumbUrl: '/images/galleries/khrf2020/thumbs/thumb_khrf2020_6.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_7.jpg', thumbUrl: '/images/galleries/khrf2020/thumbs/thumb_khrf2020_7.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_8.jpg', thumbUrl: '/images/galleries/khrf2020/thumbs/thumb_khrf2020_8.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_9.jpg', thumbUrl: '/images/galleries/khrf2020/thumbs/thumb_khrf2020_9.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_10.jpg', thumbUrl: '/images/galleries/khrf2020/thumbs/thumb_khrf2020_10.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_11.jpg', thumbUrl: '/images/galleries/khrf2020/thumbs/thumb_khrf2020_11.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_12.jpg', thumbUrl: '/images/galleries/khrf2020/thumbs/thumb_khrf2020_12.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_13.jpg', thumbUrl: '/images/galleries/khrf2020/thumbs/thumb_khrf2020_13.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_14.jpg', thumbUrl: '/images/galleries/khrf2020/thumbs/thumb_khrf2020_14.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_15.jpg', thumbUrl: '/images/galleries/khrf2020/thumbs/thumb_khrf2020_15.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_16.jpg', thumbUrl: '/images/galleries/khrf2020/thumbs/thumb_khrf2020_16.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_17.jpg', thumbUrl: '/images/galleries/khrf2020/thumbs/thumb_khrf2020_17.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_18.jpg', thumbUrl: '/images/galleries/khrf2020/thumbs/thumb_khrf2020_18.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_19.jpeg', thumbUrl: '/images/galleries/khrf2020/thumbs/thumb_khrf2020_19.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_20.jpeg', thumbUrl: '/images/galleries/khrf2020/thumbs/thumb_khrf2020_20.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_21.jpeg', thumbUrl: '/images/galleries/khrf2020/thumbs/thumb_khrf2020_21.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_22.jpeg', thumbUrl: '/images/galleries/khrf2020/thumbs/thumb_khrf2020_22.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_23.jpeg', thumbUrl: '/images/galleries/khrf2020/thumbs/thumb_khrf2020_23.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_24.jpeg', thumbUrl: '/images/galleries/khrf2020/thumbs/thumb_khrf2020_24.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_25.jpeg', thumbUrl: '/images/galleries/khrf2020/thumbs/thumb_khrf2020_25.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_26.jpeg', thumbUrl: '/images/galleries/khrf2020/thumbs/thumb_khrf2020_26.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_27.jpeg', thumbUrl: '/images/galleries/khrf2020/thumbs/thumb_khrf2020_27.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_28.jpeg', thumbUrl: '/images/galleries/khrf2020/thumbs/thumb_khrf2020_28.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_29.jpeg', thumbUrl: '/images/galleries/khrf2020/thumbs/thumb_khrf2020_29.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_30.jpeg', thumbUrl: '/images/galleries/khrf2020/thumbs/thumb_khrf2020_30.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_31.jpeg', thumbUrl: '/images/galleries/khrf2020/thumbs/thumb_khrf2020_31.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_32.jpeg', thumbUrl: '/images/galleries/khrf2020/thumbs/thumb_khrf2020_32.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_33.jpeg', thumbUrl: '/images/galleries/khrf2020/thumbs/thumb_khrf2020_33.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_34.jpg', thumbUrl: '/images/galleries/khrf2020/thumbs/thumb_khrf2020_34.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_35.jpg', thumbUrl: '/images/galleries/khrf2020/thumbs/thumb_khrf2020_35.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_36.jpg', thumbUrl: '/images/galleries/khrf2020/thumbs/thumb_khrf2020_36.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_37.jpg', thumbUrl: '/images/galleries/khrf2020/thumbs/thumb_khrf2020_37.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_38.jpg', thumbUrl: '/images/galleries/khrf2020/thumbs/thumb_khrf2020_38.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_39.jpg', thumbUrl: '/images/galleries/khrf2020/thumbs/thumb_khrf2020_39.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_40.jpg', thumbUrl: '/images/galleries/khrf2020/thumbs/thumb_khrf2020_40.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_41.jpg', thumbUrl: '/images/galleries/khrf2020/thumbs/thumb_khrf2020_41.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_42.jpg', thumbUrl: '/images/galleries/khrf2020/thumbs/thumb_khrf2020_42.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_43.jpeg', thumbUrl: '/images/galleries/khrf2020/thumbs/thumb_khrf2020_43.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_44.jpeg', thumbUrl: '/images/galleries/khrf2020/thumbs/thumb_khrf2020_44.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_45.jpeg', thumbUrl: '/images/galleries/khrf2020/thumbs/thumb_khrf2020_45.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_46.jpeg', thumbUrl: '/images/galleries/khrf2020/thumbs/thumb_khrf2020_46.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_47.jpeg', thumbUrl: '/images/galleries/khrf2020/thumbs/thumb_khrf2020_47.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_48.jpeg', thumbUrl: '/images/galleries/khrf2020/thumbs/thumb_khrf2020_48.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_49.jpg', thumbUrl: '/images/galleries/khrf2020/thumbs/thumb_khrf2020_49.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_50.jpg', thumbUrl: '/images/galleries/khrf2020/thumbs/thumb_khrf2020_50.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_51.jpg', thumbUrl: '/images/galleries/khrf2020/thumbs/thumb_khrf2020_51.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_52.jpg', thumbUrl: '/images/galleries/khrf2020/thumbs/thumb_khrf2020_52.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_53.jpg', thumbUrl: '/images/galleries/khrf2020/thumbs/thumb_khrf2020_53.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_54.jpg', thumbUrl: '/images/galleries/khrf2020/thumbs/thumb_khrf2020_54.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_55.jpg', thumbUrl: '/images/galleries/khrf2020/thumbs/thumb_khrf2020_55.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_56.jpg', thumbUrl: '/images/galleries/khrf2020/thumbs/thumb_khrf2020_56.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_57.jpg', thumbUrl: '/images/galleries/khrf2020/thumbs/thumb_khrf2020_57.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_58.jpg', thumbUrl: '/images/galleries/khrf2020/thumbs/thumb_khrf2020_58.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_59.jpg', thumbUrl: '/images/galleries/khrf2020/thumbs/thumb_khrf2020_59.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_60.jpg', thumbUrl: '/images/galleries/khrf2020/thumbs/thumb_khrf2020_60.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_61.jpg', thumbUrl: '/images/galleries/khrf2020/thumbs/thumb_khrf2020_61.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_62.jpg', thumbUrl: '/images/galleries/khrf2020/thumbs/thumb_khrf2020_62.jpg'},
        {url: '/images/galleries/khrf2020/khrf2020_63.jpg', thumbUrl: '/images/galleries/khrf2020/thumbs/thumb_khrf2020_63.jpg'},

    ];

        let sc2021 = [
                {url: '/images/galleries/sc2021/luku_suncoast2021_1.jpg', thumbUrl: '/images/galleries/sc2021/thumbs/thumb_luku_suncoast2021_1.jpg'},
                {url: '/images/galleries/sc2021/luku_suncoast2021_2.jpg', thumbUrl: '/images/galleries/sc2021/thumbs/thumb_luku_suncoast2021_2.jpg'},
                {url: '/images/galleries/sc2021/luku_suncoast2021_3.jpg', thumbUrl: '/images/galleries/sc2021/thumbs/thumb_luku_suncoast2021_3.jpg'},
        ];

        let nff2022 = [
                {url: '/images/galleries/nff2022/luku_nff2022_1.jpg', thumbUrl: '/images/galleries/nff2022/thumbs/thumb_luku_nff2022_1.jpg'},
                {url: '/images/galleries/nff2022/luku_nff2022_2.jpg', thumbUrl: '/images/galleries/nff2022/thumbs/thumb_luku_nff2022_2.jpg'},
                {url: '/images/galleries/nff2022/luku_nff2022_3.jpg', thumbUrl: '/images/galleries/nff2022/thumbs/thumb_luku_nff2022_3.jpg'},
                {url: '/images/galleries/nff2022/luku_nff2022_4.jpg', thumbUrl: '/images/galleries/nff2022/thumbs/thumb_luku_nff2022_4.jpg'},
                {url: '/images/galleries/nff2022/luku_nff2022_5.jpg', thumbUrl: '/images/galleries/nff2022/thumbs/thumb_luku_nff2022_5.jpg'},
                {url: '/images/galleries/nff2022/luku_nff2022_6.jpg', thumbUrl: '/images/galleries/nff2022/thumbs/thumb_luku_nff2022_6.jpg'},
                {url: '/images/galleries/nff2022/luku_nff2022_7.jpg', thumbUrl: '/images/galleries/nff2022/thumbs/thumb_luku_nff2022_7.jpg'},
                {url: '/images/galleries/nff2022/luku_nff2022_8.jpg', thumbUrl: '/images/galleries/nff2022/thumbs/thumb_luku_nff2022_8.jpg'},
                {url: '/images/galleries/nff2022/luku_nff2022_9.jpg', thumbUrl: '/images/galleries/nff2022/thumbs/thumb_luku_nff2022_9.jpg'},
                {url: '/images/galleries/nff2022/luku_nff2022_10.jpg', thumbUrl: '/images/galleries/nff2022/thumbs/thumb_luku_nff2022_10.jpg'},
                {url: '/images/galleries/nff2022/luku_nff2022_11.jpg', thumbUrl: '/images/galleries/nff2022/thumbs/thumb_luku_nff2022_11.jpg'},
                {url: '/images/galleries/nff2022/luku_nff2022_12.jpg', thumbUrl: '/images/galleries/nff2022/thumbs/thumb_luku_nff2022_12.jpg'},
                {url: '/images/galleries/nff2022/luku_nff2022_13.jpg', thumbUrl: '/images/galleries/nff2022/thumbs/thumb_luku_nff2022_13.jpg'},
                {url: '/images/galleries/nff2022/luku_nff2022_14.jpg', thumbUrl: '/images/galleries/nff2022/thumbs/thumb_luku_nff2022_14.jpg'},
                {url: '/images/galleries/nff2022/luku_nff2022_15.jpg', thumbUrl: '/images/galleries/nff2022/thumbs/thumb_luku_nff2022_15.jpg'},
                {url: '/images/galleries/nff2022/luku_nff2022_16.jpg', thumbUrl: '/images/galleries/nff2022/thumbs/thumb_luku_nff2022_16.jpg'},
                {url: '/images/galleries/nff2022/luku_nff2022_17.jpg', thumbUrl: '/images/galleries/nff2022/thumbs/thumb_luku_nff2022_17.jpg'},
        ];


        //template
        // let fairname = [
        //         {url: '/images/galleries/fairname/fairname_1.jpg', thumbUrl: '/images/galleries/fairname/thumbs/thumb_fairname_1.jpg'},
        // ];



        const test = [
                {
                        url: 'https://picsum.photos/id/1018/1000/600/',
                        thumbUrl: 'https://picsum.photos/id/1018/250/150/',
                },
                {
                        url: 'https://picsum.photos/id/1015/1000/600/',
                        thumbUrl: 'https://picsum.photos/id/1015/250/150/',
                },
                {
                        url: 'https://picsum.photos/id/1019/1000/600/',
                        thumbUrl: 'https://picsum.photos/id/1019/250/150/',
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

        switch(galleryId){
                case 'irf2019':
                        galleryImages = irf2019;
                        break;
                case 'nff2022':
                        galleryImages = nff2022;
                        break;
                case 'khrf2020':
                        galleryImages = khrf2020;
                        break;
                case 'khrf2021':
                        galleryImages = khrf2021;
                        break;
                case 'khrf2019':
                        galleryImages = khrf2019;
                        break;
                case 'robinct2021':
                        galleryImages = rh2021;
                        break
                case 'sc2021':
                        galleryImages = sc2021;
                        break;
        }

        const galleryName = searchParams.get('galleryName')
    // console.log(searchParams);
        console.log(galleryImages);


    return(

        <div className="relative bg-slate-400 pb-20 px-4 sm:px-6">


        <section className="overflow-hidden text-gray-700 ">

                        {/*<div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">*/}
                        <h1 className="lukuHeader-pages">{galleryName}</h1>
                        <DztImageGalleryComponent images={galleryImages} />
                                {/*<div className="flex flex-wrap -m-1 md:-m-2">*/}
                                {/*        {galleryImages.map((img) =>*/}
                                {/*        <div className="flex flex-wrap w-1/3">*/}
                                {/*                <div className="w-50 p-1 md:p-2">*/}
                                {/*                        <img alt="gallery"*/}
                                {/*                             className="block object-cover object-center w-25 h-25 rounded-lg"*/}
                                {/*                             src={img.url} />*/}
                                {/*                </div>*/}
                                {/*        </div>)}*/}
                                {/*</div>*/}
                        {/*</div>*/}
                </section>
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