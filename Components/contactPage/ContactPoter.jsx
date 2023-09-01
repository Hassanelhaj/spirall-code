import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail} from 'react-icons/md'

const ContactPoter = () => {
  return (
    <main className={`flex flex-col justify-center items-center gap-4 p-4 capitalize h-full`}>

        <section className='flex flex-col justify-center items-center text-lg gap-2 p-2 lg:p-12'>
        <h2 className='text-xl font-extrabold'>Have a project in mind ?</h2> 
        

        <p className='font-semibold w-64'>
          reach out to us . We can make something awsome together

        </p>
        <section className='flex  justify-center items-center gap-2 font-medium'>
           <span className='text-3xl cursor-pointer hover:opacity-80'><MdEmail/></span>
           <span className='text-3xl cursor-pointer hover:opacity-80'><FaFacebook/></span>
           <span className='text-3xl cursor-pointer hover:opacity-80'><FaLinkedin/></span>
           <span className='text-3xl cursor-pointer hover:opacity-80'><FaGithub/></span>

          
            
        </section>
        </section>
       
    </main>
  )
}

export default ContactPoter