import React from 'react'
import { GiWhiteBook } from "react-icons/gi";
import "../style/style.css";
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
       <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <Link to="/"><a className="navbar-brand"> <GiWhiteBook /> &nbsp; Todo</a></Link>
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <Link to="/home"><a className="nav-link " aria-current="page" >Home</a></Link>
                <Link to="/aboutus"><a className="nav-link " aria-current="page" >About Us</a></Link>
                <Link to="/todo"><a className="nav-link " aria-current="page" >Todo</a></Link>
                <Link to="/signup"><a className="nav-link btnstyle " aria-current="page" >Sign Up</a></Link>
                <Link to="/login"><a className="nav-link btnstyle " aria-current="page" >Sign In</a></Link>
                <Link to="/"><a className="nav-link btnstyle " aria-current="page" >Log out</a></Link>
            </div>
            </div>
        </div>
        </nav>
    </div>
  )
}

export default Navbar