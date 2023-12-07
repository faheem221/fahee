'use client'
import React from 'react'
import { Navigation, Pagination, Scrollbar, Mousewheel, FreeMode} from 'swiper/modules';
import {motion} from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const page = () => {
  return (
    <div className='w-full flex justify-center items-center mt-5'>
      <div className='w-full max-w-[1300px] flex flex-col ipadTablet:px-5 iphone:px-2'>
        <div className='w-full ipadTablet:h-[550px] iphone:h-[250px] rounded-xl bg-[url("https://th.bing.com/th/id/R.e6fdc6544fc8e5f2f0fc2a87a19e0b20?rik=hCKboJn1JEQR%2bw&riu=http%3a%2f%2fblog.sspf.in%2fwp-content%2fuploads%2fWhat-Sports-Means-To-An-Athlete.jpg&ehk=sW4tFWsbZRDVBzXU2%2fz8fekErMXntbf0bUXwlxeEot0%3d&risl=&pid=ImgRaw&r=0")] bg-no-repeat bg-cover bg-center'></div>
        <div className='flex justify-between items-start mt-5 iphone:flex-col ipadTablet:flex-row'>
          <div className='ipadTablet:w-[800px] iphone:w-full h-auto py-3 bg-[#FFEDEB] rounded-xl px-3'>
            <div className='font-poppins ipadTablet:text-[3em] iphone:text-[2.2em] font-semibold'>
            Headline Lorem Epsum Cognimts 
            </div>
            <div className='font-quicksand ipadTablet:text-[1.5em] iphone:text-[1.1em] iphone:mt-5'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Tincidunt id aliquet risus feugiat in ante metus dictum at. Sit amet nisl suscipit adipiscing bibendum est ultricies integer quis. Tempor nec feugiat nisl pretium fusce. Integer malesuada nunc vel risus commodo viverra maecenas. Platea dictumst quisque sagittis purus sit. Bibendum arcu vitae elementum curabitur. Montes nascetur ridiculus mus mauris vitae ultricies leo integer. Eget magna fermentum iaculis eu non diam phasellus vestibulum lorem. Euismod quis viverra nibh cras pulvinar mattis nunc sed blandit. Odio ut sem nulla pharetra diam sit amet nisl. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Est ante in nibh mauris. Penatibus et magnis dis parturient. Vitae semper quis lectus nulla at volutpat diam ut. Urna id volutpat lacus laoreet non. Vel elit scelerisque mauris pellentesque pulvinar. Aliquet enim tortor at auctor urna. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Mollis nunc sed id semper risus. Tempor nec feugiat nisl pretium fusce id velit ut tortor. Morbi tristique senectus et netus et. Bibendum est ultricies integer quis auctor. Ante in nibh mauris cursus mattis molestie a iaculis at. Lorem donec massa sapien faucibus. Faucibus ornare suspendisse sed nisi lacus. A condimentum vitae sapien pellentesque habitant morbi. Donec adipiscing tristique risus nec feugiat in fermentum posuere. Accumsan lacus vel facilisis volutpat est velit egestas.
            </div>
            <div></div>
          </div>
          <div className='ipadTablet:w-[440px] iphone:w-full h-[560px] iphone:mt-5 ipadTablet:mt-0 bg-[#FFEDEB] rounded-xl p-3 font-semibold flex flex-col'>
            <div className='ipadTablet:text-[3em] iphone:text-[2.2em] font-poppins'>Know More</div>
            <div className='w-full h-full overflow-y-hidden'>
            <Swiper 
                    modules={[Navigation, Pagination, Scrollbar, Mousewheel, FreeMode]}
                    spaceBetween={-10}
                    slidesPerView={3}
                    scrollbar={{ hide: true }}
                    mousewheel={{
                        forceToAxis:true,
                        sensitivity:1,
                        releaseOnEdges:true
                        
                    }}
                    direction='vertical'
                    className='h-full'
                    freeMode={true}
                    >      
                            <SwiperSlide className='h-full'>
                                                      <motion.div animate={{y:0, rotate:0, opacity:1}} initial={{y:150,rotate:-5, opacity:0}} transition={{delay:.1, type:'spring', stiffness:60,  damping:10}} >
                                                          <div className='w-[100%]  ipadTablet:h-[150px] iphone:h-[120px] bg-[#FFDAD8] hover:bg-[#FFB3B1] rounded-xl flex items-center gap-4 px-2 mt-2 cursor-pointer hover:shadow-md transition-all'>
                                                          <div className='ipadTablet:w-[240px] ipadTablet:h-[125px] iphone:h-[100px] iphone:w-[270px] bg-[url("https://www.sportscrunch.in/wp-content/uploads/2021/05/Pant-IPL-2021-Players-From-Uttarakhand.jpg")] bg-no-repeat bg-cover bg-center rounded-xl'></div>
                                                          <div className='flex flex-col px-1 w-[380px] '>
                                                          <div className='ipadTablet:text-[1.05em] iphone:text-[.85em] h-[80px]  overflow-hidden mt-2 font-semibold'>Lorem ipsum dolor sit amet consectetur adipiscing elitsdfsdffsa safgwe
                                                              </div>

                                                              <p className='text-[.7em] text-right'>text and date</p>
                                                              </div>
                                                          </div>
                                                      </motion.div>  
                              </SwiperSlide>
 
                      
                            </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
