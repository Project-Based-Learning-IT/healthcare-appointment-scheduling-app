import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Basic/Navbar";
import LeftsidePatient from "../Dashbaord/LeftsidePatient";

import Axios from "axios";

const BookingSlots = (props) => {
  // console.log(props.location.state)
  const { date, doctorId } = props.location.state;
  console.log("Date: " + date + " DoctorId: " + doctorId);
  const [dateId, setdateId] = useState();
  const [Slots, setSlots] = useState([]);
  const fetchDate = async () => {
    const { data } = await Axios.post(
      `${process.env.REACT_APP_SERVER_URL}/doctors/get-slots/`,
      {
        doctorId: doctorId,
        date:
          date.getFullYear().toString() +
          "-" +
          (date.getMonth() + 1).toString() +
          "-" +
          date.getDate().toString(),
      }
    );
    console.log(data);
    setdateId(data._id);
    setSlots(data.slots);
  };

  useEffect(() => {
    fetchDate();
  }, []);

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
                  <th scope="col">Booking Status</th>
                </tr>
              </thead>
              <tbody>
                {Slots.map((slot) => (
                  <tr>
                    <th scope="row">{slot.time}</th>
                    {slot.isBooked ? (
                      <td>Booked</td>
                    ) : (
                      <td>
                        <Link
                          to={{
                            pathname: "/patient/payment",
                            data: {
                              dateId:dateId,
                              doctorId:doctorId,
                              slotId:slot._id,
                            },
                          }}
                        >
                          Book Now
                        </Link>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSlots;
