import React, { useState, useEffect } from "react";
import Axios from "axios";
import Scrollbar from "react-scrollbars-custom";
import { BsPencilSquare } from "react-icons/bs";
import Navbar from "../Basic/Navbar";
import "../Dashbaord/dashboard.css";

import Leftside from "../Dashbaord/LeftsidePatient";

import { Link } from "react-router-dom";

const PatientAppointments = () => {
  const [Appointments, setAppointments] = useState([]);

  const fetchAppointments = async () => {

    const { data } = await Axios.post(
      `${process.env.REACT_APP_SERVER_URL}/patients/previous-appointments/`,
      {
        googleId: localStorage.getItem("googleId"),
      }
    );
    // console.log(data);
    setAppointments(data);
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <div className="bg-dark" style={{ height: "100vh" }}>
      <Navbar />
      <div>
        <div className="row m-5" style={{ maxWidth: "100%" }}>
          <div
            className="col-3 col-md-3 p-4 bg-white "
            style={{ height: "80vh" }}
          >
            <Leftside />
          </div>
          <div
            className="col-9 col-md-9 p-3"
            style={{
              border: "15px solid yellow ",
              height: "80vh",
              backgroundColor: "#6c757d",
            }}
          >
            <Scrollbar
              noScrollX
              style={{ position: "", height: "73vh", width: "150vh" }}
              className="col-12 col-md-12"
            >
              <table className="table table-hover table-dark">
                <thead>
                  <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Time</th>
                    <th scope="col">Doctor Name</th>
                    <th scope="col">Feedback</th>
                  </tr>
                </thead>
                <tbody>
                  {Appointments.map((Appointment) => (
                    <tr key={Appointment._id}>
                      <th scope="row">{Appointment.date}</th>
                      <th scope="row">{Appointment.slotTime}</th>
                      <th scope="row">{Appointment.doctorName}</th>
                      <th scope="row">
                        <div style={{
                          display: 'flex'
                        }}>
                          <Link to={`/patient/feedback/${Appointment._id}`}>
                            <BsPencilSquare />
                          </Link>
                          {Appointment.feedback.given && <div style={{
                            margin: '0 15px'
                          }}>{Appointment.feedback.stars}/5</div>}
                        </div>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Scrollbar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientAppointments;