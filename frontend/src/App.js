import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import "./App.css";

import Patient from "./components/patient.component";
import Doctor_Login from "./components/doctor-login.component";
import Doctor from "./components/doctor.component";


import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      
  <Switch>
  <Route exact path="/" component={Home}/>
    {/* <Route  path="/user" component={}/> */}
    {/* <Route  path="/visit" component={}/> */}
    {/* <Route   component={}/> */}
  </Switch>
  
    
  
  </Router>
  );
}

export default App;
