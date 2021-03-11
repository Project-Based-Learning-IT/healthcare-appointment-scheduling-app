import React from 'react';

import { Link } from "react-router-dom";

const Card =({login="Doctor",Image,link})=>{

  return(
    <div className="card" style={{width: "18rem"}}>
    <img src={Image} class="card-img-top" alt="..."
    height= "240"

    
    />
    <div className="card-body  "
    >
      <Link to={link} className="btn btn-primary justify-content-center w-100">Login As A {login}</Link>
    </div>
    </div>
  )
}

export default Card