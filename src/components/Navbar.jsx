import React from 'react'
import './Navbar.css';
import { auth} from '../firebase-config';
import { useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged,signInWithEmailAndPassword, signOut } from 'firebase/auth';
const Navbar = () => {
  const [user, setUser] = useState({hell: "hello"});

  onAuthStateChanged(auth,(currentUser)=>{
    setUser(currentUser);
  });
  return (
    <nav className="navbar justify-content-between mb-5">
      <div className="navbar-brand logo-bckg"><img src='logo.png' className='logo'/></div>
      <div >
      <a className="navbar-brand">BurgerBuilder</a>
      { user === null ?
        <a className="navbar-brand">Login</a>
      : <div className="navbar-brand">
      <a className="navbar-brand">Orders</a>
      <a className="navbar-brand">Logout</a>
      </div>

      }

      </div>
    </nav>

  )
}

export default Navbar
