import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Template = () => {
  return (
    <>
      <div className='sticky-header'>
        <Header />
        <Navbar />
      </div>

      <Outlet />
    </>
  )
}

export default Template
