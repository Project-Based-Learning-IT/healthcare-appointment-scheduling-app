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
import PersonalDetails from "./Doctor/PersonalDetails";
import SearchDoctor from "./Patient/SearchDoctor";
import PerviousAppointments from "./Patient/PerviousAppointments";
import Spinner from "react-bootstrap/Spinner";
import Selectdate from "./Patient/Selectdate";
import BookingSlots from "./Doctor/BookingSlots";
import Payment from "./Patient/Payment";

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
      window.gapi.load("client:auth2", initClient);
      function initClient() {
        window.gapi.client
          .init({
            apiKey: process.env.REACT_APP_API_KEY,
            clientId: process.env.REACT_APP_CLIENT_ID,
            discoveryDocs: [process.env.REACT_APP_DISCOVERY_DOCS],
            scope: process.env.REACT_APP_SCOPE,
          })
          .then(
            function () {
              if (window.gapi.auth2.getAuthInstance().isSignedIn.get()) {
                console.log(
                  `Is signed in? ${window.gapi.auth2
                    .getAuthInstance()
                    .isSignedIn.get()}`
                );
              } else {
                console.log("Currently Logged Out!!");
              }
              setApiLoaded(true);
            },
            function (error) {
              console.log(`error ${error}`);
              setApiLoaded(true);
            }
          );
      }
      setApiLoaded(true);
    } else {
      console.log("[Google] inside the else block line 54 App.js");
      setApiLoaded(false);
    }
  }, []);

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
          <Route
            exact
            path="/patient/previousappointments"
            component={PerviousAppointments}
          />
          <Route
            exact
            path="/doctor/perosnaldetails"
            component={PersonalDetails}
          />
          <Route exact path="/patient/selectdate" component={Selectdate} />
          <Route exact path="/patient/book-slot" component={BookingSlots} />
          <Route exact path="/patient/payment" component={Payment} />
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </AuthContext.Provider>
    </Router>
  ) : (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Spinner animation="border" variant="danger" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
}

export default App;
