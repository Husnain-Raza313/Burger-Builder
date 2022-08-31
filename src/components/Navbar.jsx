import React from 'react'
import './Navbar.css';
import { auth} from '../firebase-config';
import { signOut } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
const Navbar = () => {

  let navigate= useNavigate();

  const logout = async () => {
    await  signOut(auth);
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav className="navbar justify-content-between mb-5">
      <div className="navbar-brand logo-bckg"><img src='logo.png' className='logo'/></div>
      <div >
      <p className="navbar-brand" onClick={()=>{navigate("/");}}>BurgerBuilder</p>
      { localStorage.getItem("email") === null ?
      <p className="navbar-brand text-decoration-none" onClick={()=>{navigate("/signform")}}>Login</p>
      : <div className="navbar-brand">
      <p className="navbar-brand" onClick={()=>{navigate("/orderlist");}}>Orders</p>
      <p className="navbar-brand" onClick={logout}>Logout</p>
      </div>
      }

      </div>
    </nav>

  )
}

export default Navbar
