import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../image/doctorlogo.jpg";
import { AuthContext } from "../Auth/AuthContext";
import GoogleLogin from "react-google-login";
import axios from "axios";

const Navbar = () => {
  const { token, setToken, setGoogleId } = useContext(AuthContext);
  const history = useHistory();

  const successResponse = async (response) => {
    try {
      window.localStorage.setItem("token", response.tokenId);
      window.localStorage.setItem("googleId", response.googleId);

      // Send the received token to the server
      const serverRes = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/patients/google-login/`,
        {
          tokenId: response.tokenId,
        }
      );

      console.log(serverRes.data.phoneNumberExists);

      setToken(response.tokenId);
      setGoogleId(response.googleId);

      if (serverRes.data.phoneNumberExists === true) {
        history.push("/patient");
      } else {
        history.push("/patient/update-phone");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const failureResponse = (err) => {
    console.log(err);
  };

  function logout() {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("googleId");
    setToken(null);
    setGoogleId(null);
    history.push("/");
  }

  return (
    <nav
      className="navbar navbar-dark bg-dark navbar-expand-lg pl-4 pr-4 w-100 "
      style={{ backgroundColor: " #1a1a1a" }}
    >
      <Link to="/" className="navbar-brand">
        <img
          src={logo}
          alt=""
          width="30"
          height="24"
          className="d-inline-block align-top mr-2 mt-1"
        ></img>
        Hospital Management System
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="collapsibleNavbar">
        <ul className="navbar-nav ml-auto text-light bg-dark">
          <li className="navbar-item" style={{ textAlign: "right" }}>
            <link to="/" className="nav-link " />
            {!token && (
              <GoogleLogin
                clientId={process.env.REACT_APP_CLIENT_ID}
                render={(renderProps) => (
                  <button
                    onClick={renderProps.onClick}
                    disabled={false}
                    className="btn btn-outline-primary"
                  >
                    Login As A Patient
                  </button>
                )}
                onSuccess={successResponse}
                onFailure={failureResponse}
                cookiePolicy={"single_host_origin"}
              />
            )}
            {token && (
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={logout}
              >
                Logout
              </button>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
} 

export default Navbar;
