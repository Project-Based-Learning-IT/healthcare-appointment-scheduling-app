import React, { useState } from "react";
import Navbar from "../Basic/Navbar";
import Leftside from "../Dashbaord/LeftsidePatient";
import "react-calendar/dist/Calendar.css";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";

const Selectdate = (props) => {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };
  var pervious = new Date();
  pervious.setDate(pervious.getDate() - 1);
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
            <div className="d-flex justify-content-center">
              {/* <ReactCalendar /> */}
              <div>
                <Calendar
                  tileDisabled={({ date }) =>
                    date.getDay() === 0 || date < pervious
                  }
                  onChange={onChange}
                  value={date}
                />
                {console.log(date)}
                <p class="text-center">
                  {date.getFullYear().toString() +
                    "-" +
                    (date.getMonth() + 1).toString() +
                    "-" +
                    date.getDate().toString()}
                </p>
              </div>
            </div>
            {/* <Row className="w-100">
            <Col> */}
            <div className="row justify-content-center mt-5 ml-5">
              <div className="col-2">
                <Link to="/patient/searchdoctor">
                  <Button color="danger">GO BACK</Button>
                </Link>
              </div>
              {/* </Col>
            <Col> */}
              <div className="col-4">
                <Link
                  to={{
                    pathname: "/patient/book-slot",
                    state: {
                      date: date,
                      doctorId: props.location.doctor.doctorId,
                    },
                  }}
                >
                  <Button color="primary">Confirm And Go to Next Step</Button>
                </Link>
              </div>
              {/* </Col>
          </Row> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Selectdate;
