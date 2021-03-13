import { Button } from 'react-bootstrap';
import React, { useContext, useState } from 'react';
import GoogleLogin from 'react-google-login';
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from '../Auth/AuthContext';
import axios from 'axios';

const Card = ({ login = "Doctor", Image, link }) => {
  const { token, googleId, setToken, setGoogleId } = useContext(AuthContext);
  const history = useHistory();

  const successResponse = async (response) => {
    try {
      window.localStorage.setItem("token", response.tokenId);
      window.localStorage.setItem("googleId", response.googleId);

      // Send the received token to the server
      const serverRes = await axios.post(`${process.env.REACT_APP_SERVER_URL}/patients/google-login/`,
        {
          tokenId: response.tokenId
        }
      )

      console.log(serverRes.data.phoneNumberExists)

      setToken(response.tokenId);
      setGoogleId(response.googleId);

      if (serverRes.data.phoneNumberExists === true) {
        history.push('/patient')
      }
      else {
        history.push('/patient/update-phone')
      }
    } catch (err) {
      console.log(err);
    }
  }

  const failureResponse = (err) => {
    console.log(err);
  }

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={Image} class="card-img-top" alt="..." height="240" />
      <div className="card-body">
        {((!token || googleId) && login === "Doctor") && <Link to={link} className="btn btn-primary justify-content-center w-100">Login As A Doctor</Link>}
        {((token && !googleId) && login === "Doctor") && <Link to={link} className="btn btn-primary justify-content-center w-100">My Dashboard</Link>}
        {((!googleId && login === "Patient") && <GoogleLogin
          clientId={process.env.REACT_APP_CLIENT_ID}
          render={(renderProps) => (
            <Button onClick={renderProps.onClick} disabled={false} className="btn btn-primary justify-content-center w-100">Login As A Patient</Button>
          )}
          onSuccess={successResponse}
          onFailure={failureResponse}
          cookiePolicy={'single_host_origin'}
        />)}
        {((token && googleId) && login === "Patient") && <Link to={link} className="btn btn-primary justify-content-center w-100">My Dashboard</Link>}
      </div>
    </div>
  )
}

export default Card;