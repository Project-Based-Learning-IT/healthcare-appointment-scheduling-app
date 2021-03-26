import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link, useHistory } from "react-router-dom";

import Navbar from "../Basic/Navbar";
import Leftside from "../Dashbaord/LeftsidePatient";

const Payment = (props) => {
  const history = useHistory();
  // console.log(JSON.parse(localStorage.getItem("user")).name);

  const { dateId, doctor, slotId } = props.location.data;

  const BookSlot = async () => {

    


    const { data } = await Axios.post(
      `${process.env.REACT_APP_SERVER_URL}/doctors/book-slot/`,
      {
        googleId: localStorage.getItem("googleId"),
        patientName: JSON.parse(localStorage.getItem("user")).name,
        slotId: slotId,
        dateId: dateId,
        doctorId: doctor._id,
      }
    );
    history.push("/patient");
  };

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
            className="col-9 col-md-9 p-4"
            style={{
              border: "15px solid yellow ",
              height: "80vh",
              backgroundColor: "#6c757d",
            }}
          >
            <div className="container">
              <div className="row">
                <div className="well col-xs-10 col-sm-10 col-md-6 col-xs-offset-1 col-sm-offset-1 col-md-offset-3">
                  <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6">
                      <address>
                        <strong>Elf Cafe</strong>
                        <br />
                        2135 Sunset Blvd
                        <br />
                        Los Angeles, CA 90026
                        <br />
                        <abbr title="Phone">P:</abbr> (213) 484-6829
                      </address>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 text-right">
                      <p>
                        <em>Date: 1st November, 2013</em>
                      </p>
                      <p>
                        <em>Receipt #: 34522677W</em>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="text-center">
                      <h1>Receipt</h1>
                    </div>
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th>Doctor Name</th>
                          <th>Specialization</th>

                          <th className="text-center">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="col-md-9">
                            <em>{doctor.name}</em>
                          </td>
                          <td
                            className="col-md-1"
                            style={{ textAlign: "center" }}
                          >
                            {doctor.specialization}
                          </td>

                          <td className="col-md-1 text-center">
                            {doctor.feesPerSession}
                          </td>
                        </tr>

                        <tr>
                          <td> &nbsp; </td>

                          <td className="text-right">
                            <p>
                              <strong>Subtotal:&nbsp;</strong>
                            </p>
                            <p>
                              <strong>Tax:&nbsp;</strong>
                            </p>
                          </td>
                          <td className="text-center">
                            <p>
                              <strong>{doctor.feesPerSession}</strong>
                            </p>
                            <p>
                              <strong>{0.18 * doctor.feesPerSession}</strong>
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td> &nbsp; </td>

                          <td className="text-right">
                            <h4>
                              <strong>Total:&nbsp;</strong>
                            </h4>
                          </td>
                          <td className="text-center text-danger">
                            <h4>
                              <strong>{1.18 * doctor.feesPerSession}</strong>
                            </h4>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <button
                      type="button"
                      className="btn btn-success btn-lg btn-block"
                      onClick={BookSlot}
                    >
                      Pay Now&nbsp;&nbsp;&nbsp;
                      <span className="glyphicon glyphicon-chevron-right" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
