import React from 'react'
import Post from '../../../../Components/singlePost/Post'
import { articles } from '../../../../Data';

const page = ({params}) => {
    const {id} = params;
    const posts = articles.filter((post)=>{
        return id == post.id
    })
    const post = posts[0]
  return (
    <div className='min-h-[89dvh] p-4'>
        <Post data = {post} />
    </div>
  )
}

export default page