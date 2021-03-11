import React from "react"
import Option from "./Option"
import "./dashboard.css"

const LeftsidePatient=()=>{
   return(
    <div>
    <ul >
        <li >
            <Option Value= "Personal Details"/>
        </li >
        <li style={{textDecoration:"none"}}>
            <Option Value= "Search Doctor"/>
        </li >
        <li style={{textDecoration:"none"}}>
            <Option Value= "Appointment Status"/>
        </li >
        <li style={{textDecoration:"none"}}>
            <Option Value= "My Prescription"/>
        </li >
        <li style={{textDecoration:"none"}}>
            <Option Value= "Previous Appointments"/>
        </li >

        <li style={{textDecoration:"none"}}>
            <Option Value= "Payment Details"/>
        </li >
    
    </ul>
    
</div>
   )

}

export default LeftsidePatient