'use client'
import React from 'react'
import {MdKeyboardArrowRight} from 'react-icons/md'
import {BsArrowRight} from 'react-icons/bs'
const SeeMore = (props) => {
  const icons = <MdKeyboardArrowRight/>
  const data = props.newsData
  const arrow = <BsArrowRight/>

  return (
    <div className='flex justify-center items-center w-full mt-20'>
      <div className='max-w-[1300px] w-full flex flex-col justify-center items-center px-3 '>
            <h1 className='font-poppins text-[2.7em] text-[#410007] dark:text-[#EDE0DF] font-medium text-center flex items-center gap-4'>See More <span className='bg-[#FFDAD8] dark:bg-[#281900] hover:bg-[#FFB3B1] rounded-full w-[50px] h-[50px] flex justify-center items-center hover:shadow-md cursor-pointer transition-shadow duration-400 ease-out'>{icons}</span>  </h1>

            <div className='cards grid ipadTablet:grid-cols-4 gap-3 place-items-center w-full mt-7'>


              {
                data[0]?.seeMore.map((news)=>{
                  return(
                    <div className=' bg-[#FFEDEB] dark:bg-[#281900] ipadTablet:h-[400px] android:h-[450px] medDevice:h-[500px] iphone:h-[400px] rounded-2xl hover:shadow-lg transition-all duration-300 shadow-black'>
                      <div className='w-full iphone:h-[200px] android:h-[250px] medDevice:h-[325px] ipadTablet:h-[200px] bg-slate-400 rounded-2xl bg-no-repeat bg-cover bg-center bg-[url("https://media.formula1.com/image/upload/content/dam/fom-website/sutton/2022/Italy/Sunday/1422823415.jpg")]'></div>
                      <div className='px-3 mt-2'>
                        <div className='text-[1.2em] dark:text-[#EDE0DF] font-semibold line-clamp-2 max-h-[2*1.4em] '>{news.title}</div>
                        <div className='h-[90px] text-[.9em] dark:text-[#ffffff]  line-clamp-3 max-h-[3*1.4em]'>{news.subtitle}</div>
                        <div className='flex justify-center mt-1'><button className='bg-[#FFDAD8] dark:bg-[#382424] hover:bg-[#FFB3B1] px-5 py-1 rounded-full flex items-center gap-2 font-semibold font-poppins text-[#410007] dark:text-[#EDE0DF] transition-all duration-500 hover:shadow-md'>Read more <span className='mt-[3px]'>{arrow}</span> </button></div>
                      </div>
                  </div>
                  )
                })
              }

             
            </div>

      </div>
    </div>
  )
}

export default SeeMore
