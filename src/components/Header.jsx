import React from 'react'

const Header = () => {
  return (
    <div className='top-header'>
      <div className='logo-section'>
        <h2>Logo</h2>
        <span>Blog</span>
      </div>
      <div className='input-section'>
        <input type="text" placeholder='What do you want to read?' />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <div className='sign-in'>
        <span>Sign in</span>
      </div>
    </div>
  )
}

export default Header
