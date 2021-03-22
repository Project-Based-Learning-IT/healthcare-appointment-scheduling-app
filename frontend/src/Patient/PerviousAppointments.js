import React from "react";
import Navbar from "../Basic/Navbar";
import LeftsidePatient from "../Dashbaord/LeftsidePatient";

const PreviousAppointments = () => {
  return (
    <div className="bg-dark" style={{ height: "100vh" }}>
      <Navbar />
      <div>
        <div className="row m-5" style={{ maxWidth: "100%" }}>
          <div className="col-3 col-md-3 p-4 bg-white ">
            <LeftsidePatient />
          </div>
          <div
            className="col-9 col-md-9 p-4"
            style={{
              border: "15px solid yellow ",
              height: "80vh",
              backgroundColor: "#6c757d",
            }}
          >
            <table className="table table-hover table-dark">
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Slot</th>
                  <th scope="col">Doctor Name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">23-3-21</th>
                  <td>9-10 AM</td>
                  <td>Mark</td>
                </tr>
                <tr>
                  <th scope="row">23-3-21</th>
                  <td>10-11 AM</td>
                  <td>Jacob</td>
                </tr>
                <tr>
                  <th scope="row">23-3-21</th>
                  <td>11-12 AM</td>
                  <td>Larry the Bird</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviousAppointments;
