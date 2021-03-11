import React, { Component } from "react";
import { Link } from "react-router-dom";


 const Footer=()=> {
   
    return (
      <div
        className="navbar navbar-dark bg-dark navbar-expand-lg "
        style={{
          float: "left",
          width: "100%",
          position: "relative",
         
        }}
      >
        <div className="text-light bg-dark">
          <a href="#" className="text-reset">
            Send Feedback to Developers
          </a>
        </div>
      </div>
    );
  }

export default Footer;
