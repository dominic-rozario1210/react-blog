import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div
        className='mobile-menu-icon'
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <i className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>

      </div>
      <div className={`navbar ${menuOpen ? 'mobile-navbar' : ''}`}>
        <Link to="/" onClick={ () => setMenuOpen(false)}>All</Link>
        <Link to="/fullstack" onClick={ () => setMenuOpen(false)} >Full Stack Development</Link>
        <Link to="/datascience" onClick={ () => setMenuOpen(false)}>Data Science</Link>
        <Link to="/cybersecurity" onClick={ () => setMenuOpen(false)}>Cyber security</Link>
        <Link to="/ai" onClick={ () => setMenuOpen(false)}>AI</Link>
      </div>
    </>
  )
}

export default Navbar
