import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'

const BlogCard = ({data}) => { 
    const[readMore,setReadMore] = useState('cut');


  return (
    <div dir='rtl' className='shadow-md w-72 
    flex flex-col gap-4 justify-center items-center bg-white text-slate-700 rounded-lg border'>
       
        <section className='text-sm font-medium p-3'>
            <article className = 'arabic font-medium'>
               <p className=' p-2'>{ 
                readMore == 'full' ? data.text: data.text.slice(0,399)

                // data.text.slice(0,399)
                }
                </p> 
                <Link href={`/blog/${data.id}`}

                className='cursor-pointer text-purple-800 mx-1'>اقراء المزيد</Link>
            </article>
        </section>
        <section>
            <Image src={data.img} className='w-72 h-48 rounded-lg' />
        </section>


    </div>
  )
}

export default BlogCard