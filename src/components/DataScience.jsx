import React from 'react'
import BlogCard from './BlogCard'
import blogs from '../data/blogsData'

const DataScience = () => {

  const filteredBlog = blogs.filter( (blog) => (blog.domain === "Data Science"))
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

export default DataScience
