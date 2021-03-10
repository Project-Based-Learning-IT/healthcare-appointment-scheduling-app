import React from "react";
import Card from "./Card";


const LoginButton=()=>{
 
    
return(
    <div class="row p-2 offset-2 mt-2 ">
    <div class="col-12 col-md-6 ">
        <Card/>
    </div>
    <div class="col-12 col-md-6"><Card login="Patient" /></div>
   
  </div>
)

 }



export default LoginButton