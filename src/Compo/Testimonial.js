import React from 'react'
import { ReviewCard } from './index'
export default function Testimonial() {
  return (
    <>
      <div className=" my-20 text-center space-y-2 text-2xl font-bold">
        <h1 className="text-xl font-bold text-red-500">Testimonial</h1>
        <p className='md:text-4xl'>What People Say About Nimrathan</p>
      </div>
      <ReviewCard/>
    </>
  )
}
