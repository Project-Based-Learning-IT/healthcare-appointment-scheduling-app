import React from "react"
import Option from "./Option"
import "./dashboard.css"

const LeftsidePatient=()=>{
   return(
    <div>
    <ul className="mt-5" >
        <li >
            <Option Value= "Today's Schedule"/>
        </li >
        <li style={{textDecoration:"none"}}>
            <Option Value= "Personal Details"/>
        </li >
        <li style={{textDecoration:"none"}}>
            <Option Value= "Payment History"/>
        </li >
        
        <li style={{textDecoration:"none"}}>
            <Option Value= "Feedback"/>
        </li >

        
    
    </ul>
    
</div>
   )

}

export default LeftsidePatient