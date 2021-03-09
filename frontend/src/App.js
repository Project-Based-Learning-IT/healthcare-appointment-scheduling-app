import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

<<<<<<< HEAD

=======
import Navbar from "./components/navbar.component";
import Footer from "./components/footer.component";
>>>>>>> ce1bfb2876b343215ee99bdccf1fca0a00f0b937
import Patient from "./components/patient.component";
import Doctor_Login from "./components/doctor-login.component";
import Doctor from "./components/doctor.component";
import Navbar from './Home/Navbar'
import Home from "./Home/Home";

function App() {
  return (
<<<<<<< HEAD
   
    <Router>
       <Navbar/>
       <Home/>
      <div className="container">
      
       
=======
    <div>
      <Router>
        <Navbar />
>>>>>>> ce1bfb2876b343215ee99bdccf1fca0a00f0b937
        <br />
        <Route path="/patient/:id" component={Patient} />
        <Route path="/doctor/:id" component={Doctor} />
        <Route path="/doctor-login" component={Doctor_Login} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
