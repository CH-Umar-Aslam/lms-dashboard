import Link from 'next/link'
import React from 'react'

export default function Index() {
  return (
    <div className='ml-12 mt-8'>
      <h1 className='text-3xl mb-3  text-gray-600 '>Welcome to Learning Management System </h1>
      <Link href="/courses" className='bg-blue-500 px-4 py-2 text-white rounded-full'>Browse Courses</Link>
    </div>
  )
}
