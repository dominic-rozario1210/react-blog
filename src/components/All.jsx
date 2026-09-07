import React from 'react'
import BlogCard from './BlogCard'
import blogs from '../data/blogsData'

const All = () => {
  return (
    <>
      <div className='container'>
        {
          blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))
        }
      </div>
    </>
  )
}

export default All
