import React from 'react'
import { useNavigate } from 'react-router-dom'

const BlogCard = ({blog}) => {

    const navigate = useNavigate();

  return (
    <div  onClick={() => (navigate(`/blog/${blog.id}`))} className='blog-card'>
      <img src={blog.img} alt="" />
      <p>{blog.title}</p>
    </div>
  )
}

export default BlogCard
