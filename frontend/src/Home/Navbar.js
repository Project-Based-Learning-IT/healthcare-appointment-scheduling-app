import React from 'react';
import { Link } from "react-router-dom";
import Image from '../image/doctorlogo.jpg'

const Navbar= ()=>{
return(
    <nav className="navbar text-white bg-dark">
      <div style={{content:"contents"}}>
      <Link to="/" className="navbar-brand text-success" >
    <img src={Image} alt="" width="30" height="24"/>
      <span className="h3 ml-1">Doctor</span> </Link>
      </div> 
    

    <div className=" justify-content-end">
      <ul className="navbar-nav mr-auto ">
        <li className="nav-item active">
          <Link to="" className="nav-link text-white">  Login With Google </Link>
        </li>   
        
      </ul>
      
    </div>
  </nav>

)
}

export default Navbar;