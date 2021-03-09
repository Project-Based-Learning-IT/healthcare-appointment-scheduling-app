import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";



import Navbar from "./components/navbar.component";
import Patient from "./components/patient.component";
import Doctor_Login from "./components/doctor-login.component";
import Doctor from "./components/doctor.component";
import Homepage from "./components/homepage.component";

function App() {
  return (
    <Router>
      <div >
        <Navbar />
        <br />
        <Route path="/" exact component={Homepage} />
        <Route path="/patient/:id" component={Patient} />
        <Route path="/doctor/:id" component={Doctor} />
        <Route path="/doctor-login" component={Doctor_Login} />
      </div>
    </Router>
  );
}

export default App;
