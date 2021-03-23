import React, {useState} from 'react';

import Navbar from '../Basic/Navbar';

import Leftside from "../Dashbaord/LeftsidePatient";
import 'react-calendar/dist/Calendar.css';
import ReactCalendar from './ReactCalendar';
import {  Button, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
 

const Selectdate=()=>{
   
    
return(
    <div className="bg-dark" style={{ height: "100vh" }}>
    <Navbar />
    <div>
      <div className="row m-5" style={{ maxWidth: "100%" }}>
        <div
          className="col-3 col-md-3 p-4 bg-white "
          style={{ height: "80vh" }}
        >
          <Leftside />
        </div>
        <div
          className="col-9 col-md-9 p-4"
          style={{
            border: "15px solid yellow ",
            height: "80vh",
            backgroundColor: "#6c757d",
            
          }}
        >
            <div className="d-flex justify-content-center">
               <ReactCalendar />
              
           </div>
           <Row className="w-100">
                   <Col>
                   <Link to="/patient/searchdoctor">
                   <Button color="danger" className="p-2 ml-5 mt-5 text-white">GO BACK</Button>
                   </Link>
                   </Col>
                   <Col>
                   <Button color="primary" className="p-2 ml-5 mt-5 text-white ">Confirm And Go to Next Step</Button>
                   </Col>
               </Row>
         
        </div>
      </div>
    </div>
  </div>
);

}

export default Selectdate