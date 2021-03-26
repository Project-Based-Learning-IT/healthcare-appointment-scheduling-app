import React, { useState, useEffect } from "react";
import Axios from "axios";

const Payment = (props) => {
  const { dateId, doctorId, slotId } = props.location.data;
  const BookSlot = async () => {
    const { data } = await Axios.post(
      `${process.env.REACT_APP_SERVER_URL}/doctors/book-slot/`,
      {
        googleId: localStorage.getItem("googleId"),
        patientName: localStorage.getItem("name"),
        slotId: slotId,
        dateId: dateId,
        doctorId: doctorId,
      }
    );
  };
};

export default Payment;
