import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { login: "Login with Google" };
  }

  changeLogin = (login) => {
    this.setState({ login });
  };
  render() {
    var logout = (
      <li classname="navbar-item ">
        <link to="/" classname="nav-link " />
        Logout
      </li>
    );
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            width="30"
            height="24"
            class="d-inline-block align-top"
          ></img>
          WebDoc
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto text-light bg-dark">
            <li classname="navbar-item">
              <link to="/" classname="nav-link " />
              <button type="button" class="btn btn-outline-primary">
                {this.state.login}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
