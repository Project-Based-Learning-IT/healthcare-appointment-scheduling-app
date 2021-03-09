import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/navbar.component";
import Footer from "./components/footer.component";
import Patient from "./components/patient.component";
import Doctor_Login from "./components/doctor-login.component";
import Doctor from "./components/doctor.component";

// import Navbar from './Home/Navbar'
import Home from "./Home/Home";
import Homepage from "./components/homepage.component";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        
        <br />

        <Route exact path="/patient/:id" component={Patient} />
        <Route exact path="/" component={Homepage} />
        <Route exact path="/doctor/:id" component={Doctor} />
        <Route exact path="/doctor-login" component={Doctor_Login} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
