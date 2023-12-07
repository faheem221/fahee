'use client'
import React, { forwardRef } from 'react'
 
const options = forwardRef((colorSchematics,CricketSection) => {
  const cricketonClick = () =>{
    window.scrollTo({
      top:CricketSection.current.offsetTop,
      behavior:'smooth',

    })
  }
  return (
    <div className='flex justify-center items-center w-full mt-4'>
        <div className='flex justify-between items-center h-[80px] iphone:gap-5 ipadTablet:gap-0 scrollbar scrollbar-hide w-full max-w-[1300px] px-5 iphone:overflow-x-scroll ipadTablet:overflow-auto'>
            <a className={`bg-[${colorSchematics.colorVarient.buttonBgColor}] dark:bg-[#663e3b] dark:text-[#EDE0DF] iphone:py-2 iphone:px-2 ipadTablet:py-3 ipadTablet:px-4 rounded-full iphone:text-[1.02em] ipadTablet:text-[1em] hover:bg-[${colorSchematics.colorVarient.buttonHoverColor}] hover:shadow-md transition-all cursor-pointer font-poppins font-semibold text-[${colorSchematics.colorVarient.fontColor}]`}>All</a>
            <a className={`bg-[${colorSchematics.colorVarient.buttonBgColor}] dark:bg-[#663e3b] dark:text-[#EDE0DF] iphone:py-2 iphone:px-2 ipadTablet:py-3 ipadTablet:px-4 rounded-full iphone:text-[1.02em] ipadTablet:text-[1em] hover:bg-[${colorSchematics.colorVarient.buttonHoverColor}] hover:shadow-md transition-all cursor-pointer font-poppins font-semibold text-[${colorSchematics.colorVarient.fontColor}]`} onClick={cricketonClick}>Cricket</a>
            <a className={`bg-[${colorSchematics.colorVarient.buttonBgColor}] dark:bg-[#663e3b] dark:text-[#EDE0DF] iphone:py-2 iphone:px-2 ipadTablet:py-3 ipadTablet:px-4 rounded-full iphone:text-[1.02em] ipadTablet:text-[1em] hover:bg-[${colorSchematics.colorVarient.buttonHoverColor}] hover:shadow-md transition-all cursor-pointer font-poppins font-semibold text-[${colorSchematics.colorVarient.fontColor}]`}>Football</a>
            <a className={`bg-[${colorSchematics.colorVarient.buttonBgColor}] dark:bg-[#663e3b] dark:text-[#EDE0DF] iphone:py-2 iphone:px-2 ipadTablet:py-3 ipadTablet:px-4 rounded-full iphone:text-[1.02em] ipadTablet:text-[1em] hover:bg-[${colorSchematics.colorVarient.buttonHoverColor}] hover:shadow-md transition-all cursor-pointer font-poppins font-semibold text-[${colorSchematics.colorVarient.fontColor}]`}>Basketball</a>
            <a className={`bg-[${colorSchematics.colorVarient.buttonBgColor}] dark:bg-[#663e3b] dark:text-[#EDE0DF] iphone:py-2 iphone:px-2 ipadTablet:py-3 ipadTablet:px-4 rounded-full iphone:text-[1.02em] ipadTablet:text-[1em] hover:bg-[${colorSchematics.colorVarient.buttonHoverColor}] hover:shadow-md transition-all cursor-pointer font-poppins font-semibold text-[${colorSchematics.colorVarient.fontColor}]`}>MotorSport</a>
            <a className={`bg-[${colorSchematics.colorVarient.buttonBgColor}] dark:bg-[#663e3b] dark:text-[#EDE0DF] iphone:py-2 iphone:px-2 ipadTablet:py-3 ipadTablet:px-4 rounded-full iphone:text-[1.02em] ipadTablet:text-[1em] hover:bg-[${colorSchematics.colorVarient.buttonHoverColor}] hover:shadow-md transition-all cursor-pointer font-poppins font-semibold text-[${colorSchematics.colorVarient.fontColor}]`}>Hockey</a>
            <a className={`bg-[${colorSchematics.colorVarient.buttonBgColor}] dark:bg-[#663e3b] dark:text-[#EDE0DF] iphone:py-2 iphone:px-2 ipadTablet:py-3 ipadTablet:px-4 rounded-full iphone:text-[1.02em] ipadTablet:text-[1em] hover:bg-[${colorSchematics.colorVarient.buttonHoverColor}] hover:shadow-md transition-all cursor-pointer font-poppins font-semibold text-[${colorSchematics.colorVarient.fontColor}]`}>Chess</a>
            <a className={`bg-[${colorSchematics.colorVarient.buttonBgColor}] dark:bg-[#663e3b] dark:text-[#EDE0DF] iphone:py-2 iphone:px-2 ipadTablet:py-3 ipadTablet:px-4 rounded-full iphone:text-[1.02em] ipadTablet:text-[1em] hover:bg-[${colorSchematics.colorVarient.buttonHoverColor}] hover:shadow-md transition-all cursor-pointer font-poppins font-semibold text-[${colorSchematics.colorVarient.fontColor}]`}>Boxing</a>
        </div>
    </div>
  )
})

export default options
