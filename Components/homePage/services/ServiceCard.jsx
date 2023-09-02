import React from 'react'

const ServiceCard = ({data}) => {
  return (
    <div className='shadow-md w-44 h-28 flex flex-col gap-4 justify-center items-center bg-white text-slate-700 rounded-lg border'>
        <section><span className='text-3xl'>{data.logo}</span></section>
        <section className='text-sm font-medium'>{data.title}</section>


    </div>
  )
}

export default ServiceCard