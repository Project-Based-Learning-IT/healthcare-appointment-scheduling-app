import React, { useEffect, useState } from "react";
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

  const [apiLoaded, setApiLoaded] = useState(false);

  // To load only when gapi is loaded
  useEffect(() => {
    if (window.gapi !== undefined) {
      setApiLoaded(false);
      window.gapi.load('client:auth2', initClient);
      function initClient() {
        window.gapi.client.init({
          apiKey: "AIzaSyAJO5wNT_dy2zKYt2Px7ZGvd2tLGyUA6QY",
          clientId: "365803515308-3pfe8sjf7lvg51hr2it5prlvdcfs1eu9.apps.googleusercontent.com",
          discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
          scope: "https://www.googleapis.com/auth/calendar"
        }).then(function () {
          if (window.gapi.auth2.getAuthInstance().isSignedIn.get()) {
            console.log(`Is signed in? ${window.gapi.auth2.getAuthInstance().isSignedIn.get()} as ${JSON.stringify(window.gapi.auth2.getAuthInstance().currentUser.get())}`)
          }
          else {
            console.log("Currently Logged Out!");
          }
          setApiLoaded(true);
        }, function (error) {
          console.log(`error ${error}`);
          setApiLoaded(true);
        });
      }
      setApiLoaded(true);
    }
    else {
      setApiLoaded(false);
    }
  }, [window.gapi])

  return apiLoaded ? (
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
  ) : (
    <div>Loading</div>
  )
}

export default App;
