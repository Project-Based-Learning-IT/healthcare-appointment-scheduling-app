import React from 'react';

const Card=({Option})=> {
    return(
        <div>
            <div className="card" style={{width: "18rem"}}>

  <div className="card-body">
    <h5 className="card-title">{Option}</h5>
    <a href="#" className="btn btn-primary">Go to {Option}</a>
  </div>
</div>
        </div>

    )
}
 export default Card;
