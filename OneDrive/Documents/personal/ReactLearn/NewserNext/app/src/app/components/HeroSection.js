'use client'
import React from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link';

import { Navigation, Pagination, Scrollbar, Mousewheel, FreeMode} from 'swiper/modules';
 
import 'react-loading-skeleton/dist/skeleton.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const HeroSection = (props) => {
    
  
    const data = props.newsData
  return (
    <div className='w-full flex justify-center items-center mt-10'>
      <div className='w-full max-w-[1300px] ipadTablet:px-5 iphone:px-2  justify-between flex iphone:flex-col ipadTablet:flex-row'>

        <div className='w-full parentCard iphone:w-full ipadTablet:max-w-[700px] h-[850px] bg-[#FFEDEB] dark:bg-[#281900] rounded-lg ipadTabelt:px-5 iphone:px-2'>
            <div className=' head font-poppins py-2 text-[2.6em] border-b border-slate-400 text-[#410007] font-medium'>Top stories</div>

            <div className='cards h-[750px] rounded-3xl mt-2 '>
            
             <Swiper 
                    modules={[Navigation, Pagination, Scrollbar, Mousewheel, FreeMode]}
                    spaceBetween={0}
                    slidesPerView={4}
                    scrollbar={{ hide: true }}
                    mousewheel={{
                        forceToAxis:true,
                        sensitivity:.3,
                        releaseOnEdges:true
                    }}
                    direction='vertical'
                    className='h-full'
                    freeMode={true}
                    >      
                        {
                    data[0]?.topStories.map((news)=>{
                        return(
                            <SwiperSlide key={news.id}>
                             <motion.div animate={{y:0, rotate:0, opacity:1}} initial={{y:200,rotate:5, opacity:0}} transition={{delay:.1, type:'spring', stiffness:60,  damping:10}}>
                                <Link href={'./FullNewsDetail/'}>
                                    <div className='w-[100%] ipadTablet:h-[180px] iphone:h-[180px] bg-[#FFDAD8] hover:bg-[#FFB3B1] dark:bg-[#48391e] rounded-lg flex items-center gap-4 ipadTablet:px-5 iphone:px-3 mt-2 cursor-pointer hover:shadow-md transition-all'>
                                        <div className={`iphone:w-[380px] iphone:h-[160px] ipadTablet:w-[230px] medDevice:w-[220px] ipadTablet:h-[160px]  rounded-md bg-no-repeat bg-center bg-cover bg-[url('https://th.bing.com/th/id/R.538026aa95a382a32219577188a78701?rik=uYRuYyk%2bgRGBfw&riu=http%3a%2f%2fimages5.fanpop.com%2fimage%2fphotos%2f26600000%2fsoccer-soccer-26649442-2560-1600.jpg&ehk=eVp%2b4oF4IgUdG4jgZhik720wyWc4mP9GG2YZ6o4Jtzg%3d&risl=&pid=ImgRaw&r=0')] `}></div>
                                        <div className='flex flex-col px-1 w-[380px]'>
                                        <div className='font-sans iphone:text-[.9em]   ipadTablet:text-[1.1em] iphone:mt-0 border-b border-slate-400 font-semibold dark:text-[#EDE0DF] uppercase medDevice:text-[1.5em]'>{news.title}</div>
    
                                        <div className='iphone:text-[.73em] ipadTablet:text-[.85em] iphone:h-[110px] ipadTablet:h-[80px] dark:text-[#f6f2f1] overflow-clip ipadTablet:mt-2 iphone:mt-1 font-medium medDevice:text-[0.9em]  '>{news.subtitle}
                                            </div>
                                        
                                        </div>
                                    </div>
                                </Link>
                             </motion.div>
                         </SwiperSlide>
                        )
                    })
                 }
             </Swiper>
           
 
            </div>
        </div>

      

        <div className=' ipadTablet:w-[470px] h-[570px] bg-[#FFEDEB] dark:bg-[#281900] rounded-lg ipadTablet:px-5 iphone:px-2 iphone:mt-10 ipadTablet:mt-0'>
            <div className='head font-poppins py-2 text-[2.6em] border-b border-slate-400 text-[#410007] font-medium'>Your feed</div>

            <div className='cards h-[470px] mt-2 '>

                <Swiper
                        modules={[Navigation, Pagination, Scrollbar, Mousewheel, FreeMode]}
                        spaceBetween={0}
                        slidesPerView={3}
                        scrollbar={{ hide: true }}
                        mousewheel={{
                            forceToAxis:true,
                            sensitivity:.3,
                            releaseOnEdges:true
                            
                        }}
                        direction='vertical'
                        className='h-full'
                        freeMode={true}>

                    {data[0]?.currentFeed.map((news)=>{
                        return(
                            <SwiperSlide className='h-full'>
                                    <motion.div animate={{y:0, rotate:0, opacity:1}} initial={{y:150,rotate:-5, opacity:0}} transition={{delay:.1, type:'spring', stiffness:60,  damping:10}} >
                                        <div className='w-[100%]  h-[150px] bg-[#FFDAD8] hover:bg-[#FFB3B1] dark:bg-[#48391e] rounded-lg flex items-center gap-4 px-2 mt-2 cursor-pointer hover:shadow-md transition-all'>
                                        <div className='w-[240px] h-[125px] medDevice:w-[190px] bg-[url("https://www.sportscrunch.in/wp-content/uploads/2021/05/Pant-IPL-2021-Players-From-Uttarakhand.jpg")] bg-no-repeat bg-cover bg-center rounded-xl'></div>
                                        <div className='flex flex-col px-1 w-[380px] '>
                                        <div className='text-[1.05em]  h-[80px]  overflow-hidden mt-2 font-semibold dark:text-[#EDE0DF]'>{news.title}
                                            </div>
                                            </div>
                                        </div>
                                    </motion.div>  
                            </SwiperSlide>
                        )
                    })}

                        
                          

                </Swiper>

         
                  

            </div>
        

        </div>
      </div>
    </div>
  )
}

export default HeroSection
