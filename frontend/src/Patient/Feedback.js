import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Basic/Navbar";
import { Col, Row, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { FaRegStar, FaStar } from "react-icons/fa";

const Feedback = () => {
  const [rating, setRating] = useState(0);
useEffect(() => {
 setRating(0)
}, [])

  const GetRating = () => {
    setRating(rating + 1);
  };

  const reduceRatting=()=>{
    setRating(rating - 1);
  }

  return (
    <div>
      <Navbar />
      <div
        class="container mt-5"
        style={{
          border: "15px solid #03203C ",
          height: "65vh",
          backgroundColor: "#35BDD0",
        }}
      >
        <h4 className="text-center m-3">
          It will be helful if you share your Experience
        </h4>
        <Row className="m-3">
          <Input placeholder="Feel Free to Share your Experience" />
        </Row>
        <Row className="m-3">
          <Input
            type="textarea"
            placeholder="Provide Short Information"
            maxLength="50px"
            style={{ height: "25vh" }}
          />
        </Row>
        <Row className="m-3">
          <Col className="ml-4">
            <h5>Rating</h5>
          </Col>
          <Col>
            {rating >= 1 ? (
              <FaStar className="ml-1" onClick={reduceRatting} />
            ) : (
              <FaRegStar className="ml-1" onClick={GetRating} />
            )}
            {rating >= 2 ? (
              <FaStar className="ml-1" onClick={reduceRatting} />
            ) : (
              <FaRegStar className="ml-1" onClick={GetRating} />
            )}
            {rating >= 3 ? (
              <FaStar className="ml-1" onClick={reduceRatting} />
            ) : (
              <FaRegStar className="ml-1" onClick={GetRating} />
            )}

            {rating >= 4 ? (
              <FaStar className="ml-1" onClick={reduceRatting} />
            ) : (
              <FaRegStar className="ml-1" onClick={GetRating} />
            )}
            {rating >= 5 ? (
              <FaStar className="ml-1" onClick={reduceRatting}  />
            ) : (
              <FaRegStar className="ml-1" onClick={GetRating} />
            )}

            {console.log(rating)}
          </Col>
          <Col>
            <h5>{rating}/5</h5>
          </Col>
        </Row>
        <div className="row  mt-5 ml-5">
          <div className="col-4">
            <Link to="/patient/previousappointments">
              <Button color="danger">GO BACK</Button>
            </Link>
          </div>
          <div className="col-4 justify-content-end"></div>

          <div className="col-4 justify-content-end ">
            <Button color="warning">Sumbit</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
