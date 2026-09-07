import React from 'react'
import Header from './Header'
import { useParams } from 'react-router-dom'
import blogs from '../data/blogsData';


const Blog = () => {
    const {id} = useParams();

    const blog = blogs.find((blog) => (blog.id === Number (id)));
  return (
    <>
        <Header/>
        <div className='blog-container'>
            <h1>{blog.title}</h1>
            <div className='blog-inner-container'>
                <img src={blog.img} alt="" />
                <div className='blog-right-side'>
                    <p>{blog.domain}</p>
                    <p>june 02 ,2024</p>
                    <p>{blog.content}</p>
                    <button>Read More</button>
                </div>
            </div>
        </div> 
    </>
  )
}

export default Blog
