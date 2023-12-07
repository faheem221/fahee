'use client'
import React, { useEffect } from 'react'
import { color, motion, } from 'framer-motion'
import { Navigation, Pagination, Scrollbar, FreeMode, Mousewheel} from 'swiper/modules';
import { FaPlayCircle } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Topvideos = (colorSchematics) => {
    
    const slideAnime = {
        initial:{
            x:100,
            opacity:0,
            scale:.9
            
        },

        animate:{
            x:0,
            opacity:1,
            scale:1
        }
    }

    const play = <FaPlayCircle />
  return (
    <div className='w-full flex justify-center items-center mt-10'>
        <div className={`w-full max-w-[1300px] h-[350px] bg-[${colorSchematics.colorVarient.cardBgColor}] dark:bg-[#281900] flex flex-col rounded-xl px-5`}>
            <div className={`font-poppins text-[2.6em] mt-4 border-b border-slate-400 text-[${colorSchematics.colorVarient.fontColor}] dark:text-[#EDE0DF] font-medium`}>
                Top videos
            </div>
            
            <div className='flex gap-2 mt-4 overflow-x-hidden scroll-py-2'>

                <Swiper
                // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, Mousewheel, FreeMode]}
                    spaceBetween={15}
                    slidesPerView={3}
                    scrollbar={{ hide: true }}
                    mousewheel={true}
                    freeMode={true}
                    className=' h-[250px] w-full px-5'
                >
                    <SwiperSlide className='h-full relative group overflow-y-hidden cursor-pointer'>
                        <div className='ipadTablet:w-full iphone:w-[180px]  h-[240px] rounded-2xl bg-[url("https://www.arabnews.pk/sites/default/files/styles/n_670_395/public/24/08/2016//5856246887701522.jpg?itok=v4WUPI_V")] bg-no-repeat bg-cover bg-center'>
                        </div>
                        <p className='absolute text-slate-200 w-full h-[175px] text-[1.35em]  translate-x-[-50%] translate-y-[100%] hover group-hover:translate-y-[-30%] group-hover:opacity-[1] opacity-0 py-5 rounded-b-2xl bg-gradient-to-t from-slate-900 to-[rgb(255,255, 255, 0.18)] transition-all duration-300 top-[50%] left-[50%] px-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <i className='absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] group-hover:scale-0 transition-all duration-500 scale-[5] text-slate-200  group-hover:rotate-6'>{play}</i>
                    </SwiperSlide>

                    <SwiperSlide className='h-full relative group overflow-y-hidden cursor-pointer'>
                        <div className='ipadTablet:w-full iphone:w-[180px]  h-[240px] rounded-2xl bg-[url("https://www.arabnews.pk/sites/default/files/styles/n_670_395/public/24/08/2016//5856246887701522.jpg?itok=v4WUPI_V")] bg-no-repeat bg-cover bg-center'>
                        </div>
                        <p className='absolute text-slate-200 w-full h-[175px] text-[1.35em]  translate-x-[-50%] translate-y-[100%] hover group-hover:translate-y-[-30%] group-hover:opacity-[1] opacity-0 py-5 rounded-b-2xl bg-gradient-to-t from-slate-900 to-[rgb(255,255, 255, 0.18)] transition-all duration-300 top-[50%] left-[50%] px-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <i className='absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] group-hover:scale-0 transition-all duration-500 scale-[5] text-slate-200  group-hover:rotate-6'>{play}</i>
                    </SwiperSlide>

                    <SwiperSlide className='h-full relative group overflow-y-hidden cursor-pointer'>
                        <div className='ipadTablet:w-full iphone:w-[180px]  h-[240px] rounded-2xl bg-[url("https://www.arabnews.pk/sites/default/files/styles/n_670_395/public/24/08/2016//5856246887701522.jpg?itok=v4WUPI_V")] bg-no-repeat bg-cover bg-center'>
                        </div>
                        <p className='absolute text-slate-200 w-full h-[175px] text-[1.35em]  translate-x-[-50%] translate-y-[100%] hover group-hover:translate-y-[-30%] group-hover:opacity-[1] opacity-0 py-5 rounded-b-2xl bg-gradient-to-t from-slate-900 to-[rgb(255,255, 255, 0.18)] transition-all duration-300 top-[50%] left-[50%] px-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <i className='absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] group-hover:scale-0 transition-all duration-500 scale-[5] text-slate-200  group-hover:rotate-6'>{play}</i>
                    </SwiperSlide>

                    <SwiperSlide className='h-full relative group overflow-y-hidden cursor-pointer'>
                        <div className='ipadTablet:w-full iphone:w-[180px]  h-[240px] rounded-2xl bg-[url("https://www.arabnews.pk/sites/default/files/styles/n_670_395/public/24/08/2016//5856246887701522.jpg?itok=v4WUPI_V")] bg-no-repeat bg-cover bg-center'>
                        </div>
                        <p className='absolute text-slate-200 w-full h-[175px] text-[1.35em]  translate-x-[-50%] translate-y-[100%] hover group-hover:translate-y-[-30%] group-hover:opacity-[1] opacity-0 py-5 rounded-b-2xl bg-gradient-to-t from-slate-900 to-[rgb(255,255, 255, 0.18)] transition-all duration-300 top-[50%] left-[50%] px-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <i className='absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] group-hover:scale-0 transition-all duration-500 scale-[5] text-slate-200  group-hover:rotate-6'>{play}</i>
                    </SwiperSlide>

                    <SwiperSlide className='h-full relative group overflow-y-hidden cursor-pointer'>
                        <div className='ipadTablet:w-full iphone:w-[180px]  h-[240px] rounded-2xl bg-[url("https://www.arabnews.pk/sites/default/files/styles/n_670_395/public/24/08/2016//5856246887701522.jpg?itok=v4WUPI_V")] bg-no-repeat bg-cover bg-center'>
                        </div>
                        <p className='absolute text-slate-200 w-full h-[175px] text-[1.35em]  translate-x-[-50%] translate-y-[100%] hover group-hover:translate-y-[-30%] group-hover:opacity-[1] opacity-0 py-5 rounded-b-2xl bg-gradient-to-t from-slate-900 to-[rgb(255,255, 255, 0.18)] transition-all duration-300 top-[50%] left-[50%] px-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <i className='absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] group-hover:scale-0 transition-all duration-500 scale-[5] text-slate-200  group-hover:rotate-6'>{play}</i>
                    </SwiperSlide>
    

                </Swiper>
               
            </div>

        </div>
    </div>
  )
}

export default Topvideos
