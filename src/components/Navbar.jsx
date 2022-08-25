import React from 'react'
import './Navbar.css';
const Navbar = () => {
  return (
    <nav className="navbar navbar-light justify-content-between mb-5">
      <div className="navbar-brand logo-bckg"><img src='logo.png' className='logo'/></div>
      <div >
      <a className="navbar-brand">BurgerBuilder</a>
      <a className="navbar-brand">Login</a>
      </div>
    </nav>

  )
}

export default Navbar
