import React, { useContext } from "react";
import Navbar from "../Basic/Navbar";
import Leftside from "../Dashbaord/LeftsidePatient";
import { useState, useEffect } from "react";
import Axios from "axios";
import "../Dashbaord/dashboard.css";
import { AuthContext } from "../Auth/AuthContext";

const PersonalDetails = () => {
  const [patient, setPatient] = useState({});
  const [loading, setLoading] = useState(true);
  const { googleId } = useContext(AuthContext);

  useEffect(() => {
    setLoading(true);
    const getPatientDetails = async () => {
      const res = await Axios.get(
        `${process.env.REACT_APP_SERVER_URL}/patients/getPatientDetails/${googleId}`
      )
      if (res.status === 200) {
        setPatient(res.data);
        window.localStorage.setItem("user", JSON.stringify(res.data));
        setLoading(false)
      }
      else {
        console.log(res.data.message);
        setLoading(false);
      }
    }
    getPatientDetails();
  }, [googleId])

  return (
    <div className="bg-dark" style={{ height: "100vh" }}>
      <Navbar />
      {loading ? (
        <div className="row justify-content-center position-relative">
          <div
            className="spinner-border align-middle d-flex justify-content-center position-absolute top-50 start-50 translate-middle"
            style={{ width: "10rem", height: "10rem" }}
            role="status"
          ></div>
        </div>
      ) : (
        <div>
          <div className="row m-5" style={{ maxWidth: "100%" }}>
            <div
              className="col-3 col-md-3 p-4 bg-white "
              style={{ height: "80vh" }}
            >
              <Leftside />
            </div>
            <div
              className="col-9 col-md-9 p-4"
              style={{
                border: "15px solid yellow ",
                height: "80vh",
                backgroundColor: "#6c757d",
              }}
            >
              <div className="row ">
                <div className="col-9 col-md-9 p-4">
                  <div className="card mb-4">
                    <h4 className="card-header">Personal Details</h4>
                    <ul className="list-group">
                      <li className="list-group-item">
                        <span className="badge badge-success mr-2 p-2">
                          Name:
                        </span>{" "}
                        {patient.name}
                      </li>
                      <li className="list-group-item">
                        <span className="badge badge-success mr-2 p-2">
                          {" "}
                          Email:{" "}
                        </span>{" "}
                        {patient.email}
                      </li>
                      <li className="list-group-item">
                        <span className="badge badge-success mr-2 p-2">
                          Phone No:{" "}
                        </span>
                        {patient.phoneNumber}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-3 col-md-3 p-4 ">
                  <img
                    src={patient.picture}
                    // className="rounded-circle"

                    style={{ width: "100%" }}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default PersonalDetails;