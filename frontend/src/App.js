import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import DoctorLogin from "./Pages/DoctorLogin";
import DoctorDashboard from "./Pages/DoctorDashboard";
import PaitentDashboard from "./Pages/PaitentDashboard";


function App() {
  return (
    <Router>
      
  <Switch>
  <Route exact path="/" component={Home}/>
    <Route exact  path="/doctorlogin" component={DoctorLogin}/>
    <Route exact path="/doctor" component={DoctorDashboard}/>
    <Route exact path="/patient" component={PaitentDashboard}/>

    
  
  </Switch>
  
    
  
  </Router>
  );
}

export default App;
