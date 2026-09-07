import React from 'react'
import blogs from '../data/blogsData'
import BlogCard from './BlogCard'

const Fullstack = () => {

  const filteredBlog = blogs.filter((blog) => (blog.domain === "Full Stack Development"))


  return (
    <div className='container'>
      {
        filteredBlog.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))
      }
    </div>
  )
}

export default Fullstack
