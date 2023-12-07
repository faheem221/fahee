'use client'
import React from 'react'
import {BsLinkedin, BsFacebook, BsTwitter, BsInstagram, BsArrowUpRight} from 'react-icons/bs'
const Footer = () => {

    const facebook = <BsFacebook/>
    const twitter = <BsTwitter/>
    const instagram = <BsInstagram/>
    const linkedin = <BsLinkedin/>
    const arrow = <BsArrowUpRight className='font-[400]'/>
  return (
    <div className='flex  justify-center items-center w-full bg-[#A33B3E] dark:bg-[#281900] mt-20'>
        <div className='flex flex-col iphone:justify-center iphone:items-center ipadTablet:justify-between w-full max-w-[1300px] '>
                <div className='flex ipadTablet:flex-row iphone:flex-col ipadTablet:justify-between w-full px-5 iphone:items-center ipadTablet:items-start  py-6'>
                <div className='font-poppins text-[3em] font-semibold text-[#FFFFFF]'>Logo</div>
               <div className='flex iphone:flex-col ipadTablet:flex-row font-poppins ipadTablet:gap-14 iphone:gap-2 '>
                    
                    <div className='list-none'>
                            <div className=' text-[1.5em] mt-6 text-[#FFFFFF] font-medium cursor-default'>About us</div>
                                <li className='text-[#FFFFFF] flex items-center hover:cursor-pointer link link-underline link-underline-black '>{arrow} &nbsp; Example </li>
                                <li className='text-[#FFFFFF] flex items-center hover:cursor-pointer'>{arrow} &nbsp; Example </li>
                                <li className='text-[#FFFFFF] flex items-center hover:cursor-pointer'>{arrow} &nbsp; Example </li>
                                <li className='text-[#FFFFFF] flex items-center hover:cursor-pointer'>{arrow} &nbsp; Example </li>
                    </div>

                    <div className='list-none'>
                            <div className=' text-[1.5em] mt-6 text-[#FFFFFF] font-medium cursor-default'>About us</div>
                                <li className='text-[#FFFFFF] flex items-center hover:cursor-pointer'>{arrow} &nbsp; Example </li>
                                <li className='text-[#FFFFFF] flex items-center hover:cursor-pointer'>{arrow} &nbsp; Example </li>
                                <li className='text-[#FFFFFF] flex items-center hover:cursor-pointer'>{arrow} &nbsp; Example </li>
                                <li className='text-[#FFFFFF] flex items-center hover:cursor-pointer'>{arrow} &nbsp; Example </li>
                    </div>

                    <div className='list-none'>
                            <div className=' text-[1.5em] mt-6 text-[#FFFFFF] font-medium cursor-default'>About us</div>
                                <li className='text-[#FFFFFF] flex items-center hover:cursor-pointer'>{arrow} &nbsp; Example </li>
                                <li className='text-[#FFFFFF] flex items-center hover:cursor-pointer'>{arrow} &nbsp; Example </li>
                                <li className='text-[#FFFFFF] flex items-center hover:cursor-pointer'>{arrow} &nbsp; Example </li>
                                <li className='text-[#FFFFFF] flex items-center hover:cursor-pointer'>{arrow} &nbsp; Example </li>
                    </div>
                            

               </div>

                <div className='flex list-none mt-6 gap-3'>
                    <li className='text-[2em] text-[#FFFFFF]'>{facebook}</li>
                    <li  className='text-[2em] text-[#FFFFFF]'>{instagram}</li>
                    <li  className='text-[2em] text-[#FFFFFF]'>{twitter}</li>
                    <li  className='text-[2em] text-[#FFFFFF]'>{linkedin}</li>
                </div>
                
            </div>

            <div className='flex px-3 w-full iphone:justify-around ipadTablet:justify-between items-center iphone:gap-4 ipadTablet:gap-0 border-t iphone:py-2 ipadTablet:py-2 border-slate-50 list-none font-poppins mt-2 text-[#FFFFFF]'>
                    <li className='iphone:text-[.75em] ipadTablet:text-[1em] iphone:w-full ipadTablet:w-[300px] '>©2023 Brand All Rights Reserved</li>
                    <li className='iphone:text-[.75em] ipadTablet:text-[1em] iphone:w-full ipadTablet:w-[300px] iphone:text-center'>Privacy Policy</li>
                    <li className='iphone:text-[.75em] ipadTablet:text-[1em] iphone:w-full ipadTablet:w-[300px] iphone:text-right ipadTablet:text-right'>Terms and Conditions</li>
                </div>
            </div>
        </div>
    
  )
}

export default Footer
