"use client"

import React, { useEffect, useState } from 'react';

import Hero from '../../Components/homePage/hero/Hero';
import SubTitle from '../../Components/SubTitle';
import Services from '../../Components/homePage/services/Services';



const Home = () => {
 
  const [mounted,setMounted] = useState(false);
  useEffect(()=>{setMounted(true)})
  if(!mounted)return null;
 
  return (
    <div className=' overflow-hidden p-4
   ' >
    <div className='w-screen'>
    <main className=' flex flex-col  items-center flex-wrap gap-3 '>
      <section className='w-full'>
      <Hero/>
      </section>
   
      <section className='w-full'>
        <SubTitle title={"Services"} />
        
        <Services/>
      </section>
    </main>
    </div>
    </div>
  )
}

export default Home