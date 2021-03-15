import React ,{useContext, useMemo} from 'react';
import Navbar from '../Basic/Navbar';
import Leftside from '../Dashbaord/LeftsideDoctor';
import jwt_decode from "jwt-decode";

import "../Dashbaord/dashboard.css"
import { AuthContext } from '../Auth/AuthContext';

const PersonalDetails=()=>{
	const { token } = useContext(AuthContext);
	const doctor = useMemo(() => jwt_decode(token), [token]);

	return(
		<div className="bg-dark" style = {{height:"100vh"}}>
			<Navbar/>
			<div>
		  
		  <div className="row m-5" style={{maxWidth:"100%"}} >
		<div className="col-3 col-md-3 p-4 bg-white " style = {{height:"80vh"}} ><Leftside/></div>
		<div className="col-9 col-md-9 p-4"
		 style={{ border: "15px solid yellow ",height:"80vh",backgroundColor:"#6c757d" }}> 
		    <div className="card mb-4">
				<h4 className="card-header">Personal Details</h4>
				<ul className="list-group">
					<li className="list-group-item">
						<span className="badge badge-success mr-2 p-2">Name:</span>  {doctor.name}
					</li>
                    <li className="list-group-item">
						<span className="badge badge-success mr-2 p-2"> Specialization: </span> {doctor.specialization}
					</li>
                    <li className="list-group-item">
						<span className="badge badge-success mr-2 p-2">Phone No: </span> {doctor.phoneNumber}
					</li>
					<li className="list-group-item">
						<span className="badge badge-success mr-2 p-2">Phone No: </span> {doctor. feesPerSession}
					</li>
					
				</ul>
			</div>
		  </div>
	  </div>
		  </div>
		
	  
		</div>)

    
    
    
}
export default PersonalDetails