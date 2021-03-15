import React, {useContext} from "react"
import Option from "./Option"
import "./dashboard.css"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'



const LeftsidePatient=()=>{
   


   return(
    <div>
    <ul className="mt-5" >
        <li>
        <Link to="/doctor">
            <Option Value= "Today's Schedule" Option="today"/>
            </Link>
            
        </li>
        <li style={{textDecoration:"none"}}>
            
        <Link to="/doctor/perosnaldetails">
            <Option Value= "Personal Details"/>
            </Link>
            

        </li >
        <li style={{textDecoration:"none"}}>
        <Link to="/doctor/paymenthistory">
            <Option Value= "Payment History"/>
            </Link>
        </li >
        
        <li style={{textDecoration:"none"}}>
        <Link to="/doctor/feedback">
            <Option Value= "Feedback"/>
            </Link>
        </li >

        
    
    </ul>
    
</div>
   )

}

export default LeftsidePatient