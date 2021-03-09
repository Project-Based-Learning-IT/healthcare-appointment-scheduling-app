import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Homepage extends Component {
  render() {
    return (
      <div
        style={{
          width: 633,
          height: 346,
          top: 168,
          left: 449,
          position: "absolute",
          backgroundColor: "#BAE568",
        }}
      >
        <div
          style={{
            width: 304,
            height: 179,
            top: 78,
            left: 165,
            position: "absolute",
            backgroundColor: "#BAE568",
          }}
        >
          <div class="text-center">
            <button type="button" class="btn btn-outline-success">
              <Link to="/doctor-login" className="nav-link">
                Doctor Login
              </Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
