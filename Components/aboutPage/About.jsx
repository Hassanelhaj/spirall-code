import Image from 'next/image'
import React from 'react'

const About = ({data}) => {
  return (
    <div className='flex items-center justify-center overflow-hidden arabic p-6 gap-x-8 gap-y-4 flex-wrap'>
        <section><Image src={data.img} className='w-72 object-fill
         overflow-hidden rounded-lg  h-72 border-8 border-purple-900'/></section>
        <section className=' bg-purple-900 text-white p-4 rounded-lg max-w-[400px]'>{data.text}</section>

    </div>
  )
}

export default About