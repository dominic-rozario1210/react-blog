import React from 'react'
import blogs from '../data/blogsData'
import BlogCard from './BlogCard'

const Ai = () => {
  
  const filteredBlog = blogs.filter( (blog) => (blog.domain === "AI"))
  return (
    <div className='container'>
      {
        filteredBlog.map( (blog) => (
          <BlogCard key={blog.id} blog={blog}/>
        ))
      }
    </div>
  )
}

export default Ai
