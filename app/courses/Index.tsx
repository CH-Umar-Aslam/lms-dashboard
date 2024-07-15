import SideBar from '@/components/SideBar'
import CoursePage from '@/pages/courses/CoursePage'
import React from 'react'

export default function Index() {
  return (
    <div className='flex'>
        <SideBar/>
        <div>
      <CoursePage/>
       </div>
    </div>
  )
}
