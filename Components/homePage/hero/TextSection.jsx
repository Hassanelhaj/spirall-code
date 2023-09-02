import Link from 'next/link'
import React from 'react'

const TextSection = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-4 px-1'>
        <h1 className='text-lg font-bold capitalize '>
             help your business to grow up with our 
             <span className='text-purple-600 font-extrabold'>tecnical soulutions</span>
        </h1>
        <p className='w-64'>
            we intend and seek to create the future through programming and 
            artificial intelligence in order to create healthy and future environment
             for humanscand and facilitate the lives of all pepole 
        </p>
        <div className='capitalize flex items-center gap-2 mt-4'>
        <Link href='/blog' className='px-2 py-2  rounded-lg shadow-md  border border-purple-600 text-purple-600 bg-white'>
              browse articles
            </Link>
            <Link href='/' className='px-2 py-2  rounded-lg shadow-md bg-purple-600 text-white'>
              browse Service
            </Link>
            
          
        </div>
    </div>
  )
}

export default TextSection