import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import DoctorLogin from "./Pages/DoctorLogin";
import DoctorDashboard from "./Pages/DoctorDashboard";
import PaitentDashboard from "./Pages/PaitentDashboard";
import { AuthContext } from './Auth/AuthContext'
import PhoneNumber from "./components/PhoneNumber";

function App() {
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  const [googleId, setGoogleId] = useState(window.localStorage.getItem("googleId"));

  return (
    <Router>
      <Switch>
        <AuthContext.Provider value={{ token, setToken, googleId, setGoogleId }}>
          <Route exact path="/" component={Home} />
          <Route exact path="/doctorlogin" component={DoctorLogin} />
          <Route exact path="/doctor" component={DoctorDashboard} />
          <Route exact path="/patient" component={PaitentDashboard} />
          <Route exact path="/patient/update-phone" component={PhoneNumber} />
        </AuthContext.Provider>
      </Switch>
    </Router>
  );
}

export default App;
