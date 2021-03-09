import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            width: 1536,
            height: 362,
            top: 63,
            left: 0,
            position: "absolute",
            backgroundColor: "#5f6063",
          }}
        >
          <div className="container-fluid">
            <Carousel interval={2000} keyboard={false} pauseOnHover={true}>
              <Carousel.Item style={{ height: "362px" }}>
                <img
                  style={{ height: "362px" }}
                  className="d-block w-100"
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyHCKIMPmHYJoKmUfIAGkVXeLQf9NPYy97NQ&usqp=CAU"
                  }
                />

                <Carousel.Caption>
                  <h3>First</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={{ height: "362px" }}>
                <img
                  style={{ height: "362px" }}
                  className="d-block w-100"
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyHCKIMPmHYJoKmUfIAGkVXeLQf9NPYy97NQ&usqp=CAU"
                  }
                />
                <Carousel.Caption>
                  <h3>Second</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={{ height: "362px" }}>
                <img
                  style={{ height: "362px" }}
                  className="d-block w-100"
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyHCKIMPmHYJoKmUfIAGkVXeLQf9NPYy97NQ&usqp=CAU"
                  }
                />
                <Carousel.Caption>
                  <h3>Third</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>

        <div className="text-center d-grid gap-2 d-md-block">
          <button
            type="button"
            className="btn btn-primary btn-lg "
            style={{
              float: "left",
              width: 300,
              height: 104,
              top: 458,
              left: 311,
              position: "absolute",
            }}
          >
            <Link to="/patient/:id" className=" nav-link text-white">
              Patient Login
            </Link>
          </button>

          <button
            type="button"
            className="btn btn-primary btn-lg"
            style={{
              float: "left",
              width: 300,
              height: 104,
              top: 455,
              left: 900,
              position: "absolute",
            }}
          >
            <Link to="/doctor-login" className="nav-link text-white">
              Doctor Login
            </Link>
          </button>
        </div>
      </div>
    );
  }
}
