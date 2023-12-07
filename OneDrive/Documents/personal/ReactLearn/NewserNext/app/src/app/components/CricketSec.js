'use client'
import React, { forwardRef, useEffect } from 'react'
import {motion} from 'framer-motion'

import { Navigation, Pagination, Scrollbar, Mousewheel, FreeMode} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const CricketSec = forwardRef((props, CricketSection) => {
    const animations = {
        initial:{
            y:100,
            opacity:0,
            scale:.9  
        },
        animate:{
            y:0,
            opacity:1,
            scale:1
        }
    }
    const data = props.newsData

    useEffect(()=>{
        console.log(props.colorVarient.buttonHoverColor) 
    },[])
  return (
    <div className='w-full flex justify-center items-center mt-10'  ref={CricketSection}>
      <div className='w-full max-w-[1300px] flex justify-between gap-2 iphone:flex-col  ipadTablet:flex-row iphone:px-2 ipadTablet:px-0'>
            <div className='flex iphone:flex-col ipadTablet:flex-row ipadTablet:gap-4 max-w-[800px] iphone:h-[1200px] ipadTablet:h-[550px] justify-between px-2 bg-[#FFEDEB] dark:bg-[#281900] rounded-3xl'>
                <div className=''>
                    <div className={`font-poppins text-[2.7em] px-1 mt-4 text-[${props.colorVarient.fontColor}] dark:text-[#EDE0DF] font-medium`}>Cricket</div>
                    <div className='flex justify-center items-center'>
                    <div className='ipadTablet:w-[400px] iphone:w-full h-[310px] bg-no-repeat bg-cover bg-center  bg-[url("https://cdn.britannica.com/63/211663-050-A674D74C/Jonny-Bairstow-batting-semifinal-match-England-Australia-2019.jpg")] rounded-3xl mt-3'>
                        </div>

                    </div>
                    <div className='iphone:text-[1.6em] dark:text-[#EDE0DF] ipadTablet:text-[1.25em] mt-4 font-montserrat font-medium'>
                        {data[0]?.cricketHead.map((news)=>{
                            return(<div>{news.title}</div>)
                        })} 
                    </div>
                    <div className='iphone:text-[1.15em] ipadTablet:text-[.95em] iphone:w-full max-w-[400px] dark:text-[#f3eaea] mt-2'>
                     {data[0]?.cricketHead[0].subtitle}
                    </div>
                </div>

                <div className='flex flex-col iphone:h-[600px] ipadTablet:h-[530px] overflow-hidden iphone:mt-10 mb-3 ipadTablet:mt-3  iphone:border-t ipadTablet:border-l ipadTablet:border-t-0  border-slate-500 px-2 '>

                <Swiper 
                    modules={[Navigation, Pagination, Scrollbar, Mousewheel, FreeMode]}
                    spaceBetween={-15}
                    slidesPerView={5}
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
                  
              {data[0]?.CricketCard.map((news)=>{
                return(
                    <SwiperSlide >
                        <motion.div variants={animations} initial="initial" whileInView="animate" transition={{type:'spring', stiffness:50, delay:.1}} viewport={{once:true}}>
                                
                            <div className={`w-full iphone:h-[110px] ipadTablet:h-[100px] bg-[${props.colorVarient.cardColor}] dark:bg-[#48391e] hover:bg-[${props.colorVarient.cardHoverColor}] rounded-lg flex items-center gap-3 px-2 mt-2 cursor-pointer hover:shadow-md transition-all`}>
                                    <div className='w-[180px] android:w-[220px] medDevice:w-[160px] iphone:h-[90px] ipadTablet:h-[80px] bg-white rounded-md'></div>
                                    <div className='flex flex-col px-1'>
                                    <div className='text-[.9em] iphone:h-[60px] dark:text-[#EDE0DF] ipadTablet:h-[50px] overflow-hidden mt-1'>{news.title}
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

            <div className={`flex flex-col justify-center ipadTablet:max-w-[500px] w-full ipadTablet:h-[550px] iphone:[600px] bg-[${props.colorVarient.cardBgColor}] dark:bg-[#281900] rounded-2xl  iphone:mt-10 ipadTablet:mt-0`}>
               
                  <div className={`font-poppins text-[2.6em] text-[${props.colorVarient.fontColor}] font-medium px-5 mt-4 iphone:mt-6`}>
                    Read More
                  </div>

                  <div className={`flex flex-col iphone:h-[600px] ipadTablet:h-[530px] iphone:py-2 desktop:h-[460px] rounded-2xl iphone:mt-2 ipadTablet:mt-0 ipadTablet:px-5 iphone:px-3`}>
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
                    className='h-full w-full rounded-2xl'
                    freeMode={true}
                    >      
                       {
                        data[0]?.CricketReadMore.map((news)=>{
                            return(
                                <SwiperSlide >
                                    <motion.div animate={{y:0, rotate:0, opacity:1}} initial={{y:150,rotate:-5, opacity:0}} transition={{delay:.1, type:'spring', stiffness:60,  damping:10}} >
                                        <div className='w-full ipadTablet:h-[145px] iphone:h-[120px] bg-[#FFDAD8] hover:bg-[#FFB3B1] rounded-xl flex items-center gap-4 px-2 mt-2 cursor-pointer hover:shadow-md transition-all'>
                                        <div className='ipadTablet:w-[240px] ipadTablet:h-[130px] medDevice:w-[170px] iphone:h-[100px] iphone:w-[270px] android:w-[220px] bg-[url("https://www.sportscrunch.in/wp-content/uploads/2021/05/Pant-IPL-2021-Players-From-Uttarakhand.jpg")] bg-no-repeat bg-cover bg-center rounded-xl'></div>
                                        <div className='flex flex-col px-1 w-[380px] '>
                                        <div className='ipadTablet:text-[1.05em] iphone:text-[.85em] h-[80px] android:text-[.95em] overflow-hidden mt-2 font-semibold'>{news.title}</div>
                                        </div>
                                        </div>
                                    </motion.div>  
                                </SwiperSlide>
                            )
                        })
                       }

                        

                    </Swiper>
                  </div>

                

                    
                 

                    
                  
                    
                     
                
            </div>
      </div>
    </div>
  )
})

export default CricketSec
