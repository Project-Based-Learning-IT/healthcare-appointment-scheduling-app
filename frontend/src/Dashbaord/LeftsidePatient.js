import React from "react"
import Option from "./Option"
import "./dashboard.css"
import { Link } from 'react-router-dom'



const LeftsidePatient=()=>{
    

   return(
    <div>
    <ul >

        <li >
        <Link to="/patient">

            <Option Value= "Personal Details" />
            </Link>
        </li >
        <li>
    <Link to="/patient/searchdoctor">

            <Option Value= "Search Doctor"/>
            </Link>
        </li >
        <li>
            <Option Value= "Appointment Status"/>
        </li >
        <li >
            <Option Value= "My Prescription"/>
        </li >
        <li >
            <Option Value= "Previous Appointments"/>
        </li >

        <li>
            <Option Value= "Payment Details"/>
        </li >
    
    </ul>
    
</div>
   )

}

export default LeftsidePatient