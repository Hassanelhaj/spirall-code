import React from 'react'
import PostText from './PostText'
import PostImg from './PostImg'

const Post = ({data}) => {
  return (
    <div className='flex justify-center items-center gap-3 flex-wrap arabic'>
        <section className=' bg-white rounded-lg'><PostText data = {data.text}/></section>
        <section className='w-screen overflow-hidden bg-red-500'><PostImg img = {data.img} className = 'w-full' /></section>

    </div>
  )
}

export default Post