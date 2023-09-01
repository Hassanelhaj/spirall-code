import Image from 'next/image'
import React from 'react'

const PostImg = ({img}) => {
  return (
    <div className=' bg-green-600'>
        <Image src={img} className=' w-full  h-72 object-fill' />
    </div>
  )
}

export default PostImg 