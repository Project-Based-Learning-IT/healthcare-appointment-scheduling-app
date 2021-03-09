import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";


import Patient from "./components/patient.component";
import DoctorLogin from "./components/doctor-login.component";
import Doctor from "./components/doctor.component";
import Navbar from './Home/Navbar'
import Home from "./Home/Home";

function App() {
  return (
   
    <Router>
       <Navbar/>
       <Home/>
      <div className="container">
      
       
        <br />
        <Route path="/patient/:id" component={Patient} />
        <Route path="/doctor/:id" component={Doctor} />
        <Route path="/doctor-login" component={DoctorLogin} />
      </div>
    </Router>
  );
}

export default App;
