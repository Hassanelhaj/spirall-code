import React from 'react'
import background from '../../public/background/bac1.jpg'
import Image from 'next/image'
// import { Image } from 'react-bootstrap'

const ContactForm = () => {
  return (
    <main className={`gredient
    contactForm flex flex-col justify-center items-center p-2 lg:p-12`}>


    <div className=" flex flex-col items-center w-fit bg-transparent  
     justify-center gap-3 p-6 
     shadow-[0_3px_10px_rgb(0,0,0,0.2)]  shadow-white rounded-lg ">
       <div className="flex flex-col justify-start items-start gap-2 mb-4">
        <p className="text-sm text-white">Name</p>
        <input
          type="text"
          className="w-64 sm:w-72 mt-1 px-3 py-2 bg-transparent border
   shadow-sm border-white placeholder-white focus:outline-none 
    focus:border-yellow-500 focus:ring-yellow-500   rounded-md flex justify-start
     sm:text-sm text-white focus:ring-1"
          placeholder=" Name"
        />
      </div> 
      <div className="flex flex-col justify-start items-start gap-2 mb-4">
        <p className="text-sm text-white">Email</p>
        <input
          type="text"
          className="w-64 sm:w-72 mt-1 px-3 py-2 bg-transparent border
   shadow-sm border-white placeholder-white focus:outline-none 
    focus:border-yellow-500 focus:ring-yellow-500   rounded-md flex justify-start
     sm:text-sm text-white focus:ring-1"
          placeholder=" Email"
        />
      </div>                   
      <div className="flex flex-col justify-start items-start gap-2 mb-4 text-white">
        <p lassName="text-sm text-white">Details</p>
        <textarea          
          
          className="w-64 sm:w-72 mt-1 px-3 py-2 bg-transparent border
   shadow-sm border-white placeholder-white focus:outline-none 
    focus:border-yellow-500 focus:ring-yellow-500   rounded-md flex justify-start
     sm:text-sm text-white focus:ring-1"
          placeholder=" Details"
        />
      </div>
    
      <p className=" bg-purple-600 poster  cursor-pointer text-white
       font-medium py-2 w-64 sm:w-72 text-center rounded-lg text-transparent">Send</p>
    </div>


{/* <Image src={background}/> */}
    </main>
  )
}

export default ContactForm