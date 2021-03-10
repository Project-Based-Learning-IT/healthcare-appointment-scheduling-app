import React from 'react';


const Card =({login="Doctor"})=>{

  return(
    <div className="card" style={{width: "18rem"}}>
    <img src="..." class="card-img-top" alt="..."
    width= "100"
    height= "150"

    
    />
    <div class="card-body width "
    >
      <a href="#" class="btn btn-primary justify-content-center">Login as a {login}</a>
    </div>
    </div>
  )
}

export default Card