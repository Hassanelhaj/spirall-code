import React from 'react'
import ContactPoter from './ContactPoter'
import ContactForm from './ContactForm'
import back from '../../public/background/bac.jpg'

const ContactCon = () => {
  return (
    <div className=' w-screen min-h-[86dvh]  overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-0'>
        <section className={`lg:col-span-1  poster text-white min-h-[86dvh]`}>
            <ContactPoter/></section>
        <section className='lg:col-span-1 bg-purple-50 min-h-[86dvh]'>
          <ContactForm/>
        </section>

    </div>
  )
}

export default ContactCon