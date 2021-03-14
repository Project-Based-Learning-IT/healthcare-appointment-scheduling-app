import React,{useContext} from 'react';
import {Link} from "react-router-dom"



const Option =({Value="info",Option="today"})=>{
    

    return(
        <button type="button" 
        className="btn btn-secondary p-2 m-1 w-75 h-100"> 
        <Link to={Option}></Link>
            <h5 className="text-white">{Value}</h5>
        
       </button>
    )

}

export default Option;