import React from 'react';
import {Link} from "react-router-dom"

const Option =({Value="info"})=>{
    return(
        <button type="button" 
        className="btn btn-secondary p-2 m-1 w-75 h-100"> 
        <Link to="#" style={{textDecoration:"none"}}>
            <h5 className="text-white">{Value}</h5>
        
        </Link> </button>
    )

}

export default Option;