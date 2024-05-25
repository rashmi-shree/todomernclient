import React from 'react'
import Navbar from "../components/Navbar";
import "../style/style.css";

const Body = () => {
  return (
    <div>
        <div className='headingContainer'>
            <h2>Organise your day to day life using our todo</h2>
            <div className="navbar-nav">
                <a className="nav-link btnstyle " aria-current="page" href="#">Home</a>
            </div>
        </div>
    </div>
  )
}

export default Body