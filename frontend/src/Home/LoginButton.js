import React from "react";
import Card from "./Card";

import doctorlogin from "../image/doctorlogin.png";
import patientlogin from "../image/patientlogin.png";

const LoginButton = () => {
  return (
    <div className="d-flex flex-md-row flex-column justify-content-around align-items-center my-4">
      <Card Image={doctorlogin} link={"/doctorlogin"} />
      <Card
        LoginButton="Patient"
        Image={patientlogin}
        link={"/patient"}
        login="Patient"
      />
    </div>
  );
};

export default LoginButton;

// <div
//   className="row "
//   style={{
//     maxWidth: "100%",
//     padding: "10px",
//     margin: "10px",
//     marginLeft: "190px",
//   }}
// >
//   <div className="col-12 col-md-6 mb-4  ">
//     <Card Image={doctorlogin} link={"/doctorlogin"} />
//   </div>
//   <div className="col-12 col-md-6 mb-4">
//     <Card
//       LoginButton="Patient"
//       Image={patientlogin}
//       link={"/patient"}
//       login="Patient"
//     />
//   </div>
// </div>
