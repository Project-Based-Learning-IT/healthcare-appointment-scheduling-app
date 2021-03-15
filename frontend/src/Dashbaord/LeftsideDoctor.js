import React, {useContext} from "react"
import Option from "./Option"
import "./dashboard.css"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'



const LeftsidePatient=()=>{
   


   return(
    <div>
    <ul className="mt-5" >
        <li>
            
            <Option Value= "Today's Schedule" Option="today"/>
            
        </li>
        <li style={{textDecoration:"none"}}>
            
            <Link to="/perosnaldetails">
            <Option Value= "Personal Details"/>
            </Link>
            

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