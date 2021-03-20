import React, { useState } from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import DoctorLogin from "./Pages/DoctorLogin";
import DoctorDashboard from "./Pages/DoctorDashboard";
import PaitentDashboard from "./Pages/PaitentDashboard";
import Error from "./Pages/Error";
import { AuthContext } from "./Auth/AuthContext";
import PhoneNumber from "./components/PhoneNumber";
import PersonalDetails from "./Doctor/PersonalDetails"
import SearchDoctor from "./Patient/SearchDoctor";


function App() {
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  const [googleId, setGoogleId] = useState(
    window.localStorage.getItem("googleId")
  );

  return (
    <Router>
      
      <AuthContext.Provider value={{ token, setToken, googleId, setGoogleId }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/doctorlogin" component={DoctorLogin} />
          <Route exact path="/doctor" component={DoctorDashboard} />
          <Route exact path="/patient/searchdoctor" component={SearchDoctor} />
          <Route exact path="/patient" component={PaitentDashboard} />
          <Route exact path="/patient/update-phone" component={PhoneNumber} />
          <Route exact path="/doctor/perosnaldetails" component={PersonalDetails} />

          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </AuthContext.Provider>
    </Router>
  );
}

export default App;
