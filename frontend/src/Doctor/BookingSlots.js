import React from "react";
import Navbar from "../Basic/Navbar";
import LeftsidePatient from "../Dashbaord/LeftsidePatient";

const BookingSlots = ({ no }) => {
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
                  <th scope="col">Slot</th>
                  <th scope="col">Booked</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">9-10 AM</th>
                  <td>Book Now</td>
                </tr>
                <tr>
                  <th scope="row">10-11 AM</th>
                  <td>Book Now</td>
                </tr>
                <tr>
                  <th scope="row">11-12 AM</th>
                  <td>Book Now</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSlots;
