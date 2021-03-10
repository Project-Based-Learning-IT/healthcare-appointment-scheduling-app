import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from '../image/doctorlogo.jpg'

const Navbar=({login="login with Google"})=>  {
    return (
      <nav className="navbar navbar-dark  navbar-expand-lg pl-4 pr-4 " style={{ backgroundColor: " #1a1a1a"}}>
        <Link to="/" className="navbar-brand">
          <img
            src={logo}
            alt=""
            width="30"
            height="24"
            class="d-inline-block align-top mr-2 mt-1"
          ></img>
          WebDoc
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto text-light bg-dark">
            <li classname="navbar-item">
              <link to="/" classname="nav-link " />
              <button type="button" class="btn btn-outline-primary">
                {login}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

  export default Navbar;
