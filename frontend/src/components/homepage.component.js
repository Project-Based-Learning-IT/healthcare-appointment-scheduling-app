import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class ExercisesList extends Component {
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
          <form>
            <div className="col-12">
              <label
                className="visually-hidden"
                htmlFor="inlineFormInputGroupUsername"
              >
                <centre>Username</centre>
              </label>
              <div className="input-group">
                <div className="input-group-text">@</div>
                <input
                  type="text"
                  className="form-control"
                  id="inlineFormInputGroupUsername"
                  placeholder="Username"
                />
              </div>
            </div>

            <div className="col-12">
              <label htmlFor="exampleInputPassword1" className="form-label">
                <centre>Password</centre>
              </label>
              <div className="input-group">
                <div className="input-group-text">🔑</div>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="********"
                />
              </div>
            </div>
            <br />
            <div class="text-center">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
