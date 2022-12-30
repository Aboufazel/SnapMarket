import image1 from '../assets/Images/ImageFooter/image1.png'
import image2 from '../assets/Images/ImageFooter/image2.png'
import image3 from '../assets/Images/ImageFooter/image3.png'
import image4 from '../assets/Images/ImageFooter/image4.png'
import bazzar from '../assets/Images/ImageFooter/bazzar.png'
import google from '../assets/Images/ImageFooter/google.png'
import iapps from '../assets/Images/ImageFooter/iapps.png'
import sibapp from '../assets/Images/ImageFooter/sibapp.png'
import mobile2 from "../assets/Images/newMobile-2.84a4e251.png"
import mobile1 from "../assets/Images/mobile1.png"

import { dataApplicationFooterType, dataGoodsFooterType } from "../Model/DataSendGoodsFooterType"
export const dataGoodsFooter:dataGoodsFooterType[]=[
    {id:1,image:image2,Description:'کالاها با قیمت کمتر از درج شده ارسال میشود',title:'تخفیف بیشتر محصولات'},
    {id:2,image:image1,Description:'سفارشات شما در زمان مقرر ارسال می‌شود',title:'ارسال به موقع سفارش ها'},
    {id:3,image:image3,Description:'محصولات ارسالی از بین بهترین‌ها گلچین می‌شود',title:'ارسال بهترین کالا ها'},
    {id:4,image:image4,Description:'سفارشات با بسته‌بندی مناسب ارسال می‌شود',title:' بسته بندی مناسب'},
]
export const dataApplicationFooter:dataApplicationFooterType[]=[
    {id:1,image:bazzar,title:'bazzar',width:118,height:35},
    {id:2,image:google,title:'google',width:118,height:35},
    {id:3,image:sibapp,title:'sibapp',width:118,height:35},
    {id:4,image:iapps,title:'iapps',width:218,height:35},
    {id:5,image:mobile1,title:'newMobile'},
    {id:5,image:mobile2,title:'newMobile'},
]