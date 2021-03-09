import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class Footer extends Component {
  render() {
    return (
      <div
        className="navbar navbar-dark bg-dark navbar-expand-lg "
        style={{
          float: "left",
          width: 1536,
          height: 56,
          top: 665,
          left: 0,
          position: "absolute",
          backgroundColor: "#BAE568",
        }}
      >
        <div className="text-light bg-dark">
          <a href="#" className="text-reset">
            Send Feedback to Developers
          </a>
        </div>
      </div>
    );
  }
}
