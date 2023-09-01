"use client"
import React, { useEffect, useState } from 'react'
import About from '../../../Components/aboutPage/About'
import { aboutData } from '../../../aboutData'

const page = () => {
  const [mounted,setMounted] = useState(false);
  useEffect(()=>{setMounted(true)})
  if(!mounted)return null;
  return (

    <div className='min-h-full p-4'><About data ={aboutData}/></div>
  )
}

export default page