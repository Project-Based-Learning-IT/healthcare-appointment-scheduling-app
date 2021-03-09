import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
            backgroundColor: "#BAE568",
          }}
        />

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
              left: 809,
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
