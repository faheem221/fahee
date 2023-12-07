'use client'
import { color } from 'framer-motion'
import React from 'react'

const Navbar = (colorVarient) => {
  return (
    <div className={`flex justify-center items-center iphone:h-32 ipadTablet:h-20 w-full bg-[#FF8888] dark:bg-[#2C1515]`}>
        <div className='flex iphone:flex-col iphone:justify-center iphone:gap-3 ipadTablet:gap-0 ipadTablet:justify-center items-center h-full w-full max-w-[1300px] px-5'>
            
           <div className='flex w-full justify-between items-center'>
           <div className='font-poppins iphone:text-[2em] ipad-tablet:text-[2.4em] text-slate-50 font-semibold'>
                Logo
            </div>

            <div className='iphone:hidden ipadTablet:flex'>
                <input  className='
                                  w-[600px] h-[45px]
                                 bg-[#F5F7F8]
                                   rounded-lg px-4  
                                   focus:outline-none
                                 placeholder:text-slate-500 placeholder:font-montserrat 
                                    hover:shadow-md
                                    focus:shadow-lg 
                                    transition-shadow
                                    ease-out duration-300
                                    ' 
                        placeholder='Search for Topics, Locations & Sources '/>
            </div>

            <div>
                <button className={` 
                                    w-[100px] h-[38px] 
                                    font-poppins text-[1.1em] text-[${colorVarient.colorVarient.fontColor}] font-semibold
                                    rounded-lg 
                                    bg-[${colorVarient.colorVarient.buttonBgColor}] 
                                    hover:shadow-md hover:bg-[${colorVarient.colorVarient.buttonHoverColor}]
                                    transition-all  ease-out duration-300
                                    
                                    `}>
                          Eng-In
                </button>
            </div>

           </div>

          
            
          <div className=' iphone:flex ipadTablet:hidden justify-center items-center w-full'>
                <input  className='
                                  iphone:w-full h-[45px]
                                 bg-[#F5F7F8]
                                   rounded-lg px-4  
                                   focus:outline-none
                                 placeholder:text-slate-500 placeholder:font-montserrat 
                                    hover:shadow-md
                                    focus:shadow-lg 
                                    transition-shadow
                                    ease-out duration-300
                                    ' 
                        placeholder='Search for Topics, Locations & Sources '/>
            </div>
          
            


        </div>
    </div>
  )
}

export default Navbar
