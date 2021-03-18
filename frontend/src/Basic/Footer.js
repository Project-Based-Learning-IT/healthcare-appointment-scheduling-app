import React from "react";
import { Link } from "react-router-dom";

 const Footer=()=> {
   
    return (
      
        
          <div className=" row text-light bg-dark p-2" 
          style={{maxWidth:"100%",margin:"auto"}}>
         
         <div className="col-12 col-md-6 w-100">
         <h4 className="white-text">Contact Us</h4>
                     <p className="grey-text">
                         ABC 5078, Mumbai, India
                     </p>
                     <p className="grey-text">
                        +919307531964
                     </p>
           
         </div>

         <div className="col-12 col-md-6 w-100">
         <h4 className="white-text">Social Media</h4>
                     <ul>
                         <li><Link to="#!"className="grey-text"> Facebook</Link></li>
                         <li><Link to="#!"className="grey-text"> Instagram</Link></li>
                         <li><Link to="#!"className="grey-text"> Twitter</Link></li>
                     </ul>
         </div>
</div>
          
      
    );
  }

export default Footer;
