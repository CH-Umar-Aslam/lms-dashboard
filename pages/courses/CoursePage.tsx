import React from 'react'
import {cardsData} from "../../data/cards.data"
import { LiaEditSolid } from "react-icons/lia";
import { BiMessageDetail } from "react-icons/bi";

export default function CoursePage() {
  return (
    <div className='flex flex-col  mt-12 pl-3 sm:pl-12  mx-auto'>
      <div className='space-y-6 mb-8'>
        <hr />
        <h1 className='text-3xl'>Published Courses(0)</h1>
        <hr />
        
        <p>No courses to display</p>
      </div>
      <div className='space-y-2 text-gray-600 mb-5'>
        <h1 className='text-3xl'>Unpublished Courses(5)</h1>
        <hr />
      </div>
      {/* <h1 className='sm:text-2xl mb-5 text-gray-500'>Courses currently enrolled by our students</h1> */}
     <div className='flex flex-wrap gap-12 max-w-6xl mx-auto text-slate-500'>
      {
       
        cardsData?.map((course)=>(
        <div key={course.title} className='rounded-lg  pb-5 border bg-transparent'>
         <p className="rounded-sm h-28 w-52  bg-slate-400">
          <button className='bg-white rounded-md py-[5px] px-[12px] text-gray-500 mt-2 ml-2 '>Publish</button>
         </p>
       <h2 className='text-lg p-2 leading-tight'>{course.title}</h2>
       <p className='px-2 text-blue-600 leading-tight'>{course.subTitle}</p>
       <div className='flex px-3 gap-11 text-md  mt-4'>
       <LiaEditSolid/>
       <BiMessageDetail/>
       </div>
      </div>
      ),)
    }
    </div>
    </div>
  )
}
