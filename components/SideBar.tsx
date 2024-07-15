import Image from 'next/image'
import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdSpeedometer } from "react-icons/io";
import { SiGoogledocs } from "react-icons/si";
import { FaCalendarAlt } from "react-icons/fa";
import { HiInboxIn } from "react-icons/hi";
import { MdHistory } from "react-icons/md";
import { PiArrowSquareRightFill } from "react-icons/pi";
import { GrHelpBook } from "react-icons/gr";


export default function SideBar() {
  return (
    <div className='w-24  text-white space-y-5   py-5 h-screen  bg-slate-700'>
     <div className='flex flex-col items-center leading-5'>
     <FaRegUserCircle className='text-3xl  text-white'/>
     <p className='text-[14px]'>Account</p>
     </div>
     <div className='flex flex-col items-center leading-5'>
     <IoMdSpeedometer className='text-3xl  text-white'/>
     <p className='text-[14px]'>Dashboard</p>
     </div>
     <div className='flex flex-col items-center leading-5'>
     <SiGoogledocs className='text-3xl  text-white'/>
     <p className='text-[14px]'>Courses</p>
     </div>
     <div className='flex flex-col items-center leading-5'>
     <FaCalendarAlt className='text-3xl  text-white'/>
     <p className='text-[14px]'>Calender</p>
     </div>
     <div className='flex flex-col items-center leading-5'>
     <HiInboxIn className='text-3xl  text-white'/>
     <p className='text-[14px]'>Inbox</p>
     </div>
     <div className='flex flex-col items-center leading-5'>
     <MdHistory className='text-3xl  text-white'/>
     <p className='text-[14px]'>History</p>
     </div>
     <div className='flex flex-col items-center leading-5'>
     <PiArrowSquareRightFill className='text-3xl  text-white'/>
     <p className='text-[14px]'>Commons</p>
     </div>
     <div className='flex flex-col items-center leading-5'>
     <GrHelpBook className='text-3xl  text-white'/>
     <p className='text-[14px]'>Help</p>
     </div>
    
    </div>
  
  )
}
