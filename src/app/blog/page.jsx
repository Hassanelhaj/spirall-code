'use client'
import React, { useEffect, useState } from 'react'
import BlogCon from '../../../Components/blogPage/Blog'

const Blog = () => {
  const [mounted,setMounted] = useState(false);
  useEffect(()=>{setMounted(true)})
  if(!mounted)return null;
  return (
    <div className='min-h-[90dvh'><BlogCon/></div>
  )
}

export default Blog