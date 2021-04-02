import React from "react";
import Option from "./Option";
import "./dashboard.css";
import { Link } from "react-router-dom";

const LeftsidePatient = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/patient">
            <Option Value="Personal Details" />
          </Link>
        </li>
        <li>
          <Link to="/patient/searchdoctor">
            <Option Value="Search Doctor" />
          </Link>
        </li>
        <li>
          <Link to="/patient/appointment-status">
            <Option Value="Appointment Status" />
          </Link>
        </li>

        <li>
          <Link to="/patient/previousappointments">
            <Option Value="Previous Appointments" />
          </Link>
        </li>

       
      </ul>
    </div>
  );
};

export default LeftsidePatient;
