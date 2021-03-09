import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "./dashboard.module.css";


export default class Patient extends Component {
  render() {
    return (
      <div>
        <div className={styles.main}></div>
        <div>
          <button type="button" className={styles.button1}>
            <Link to="/doctor-login" className="nav-link text-white">
              Today's Schedule
            </Link>
          </button>
          <button type="button" className={styles.button2}>
            <Link to="/doctor-login" className="nav-link text-white">
              Personal Info
            </Link>
          </button>
          <button type="button" className={styles.button3}>
            <Link to="/doctor-login" className="nav-link text-white">
              Payment History
            </Link>
          </button>
          <button type="button" className={styles.button4}>
            <Link to="/doctor-login" className="nav-link text-white">
              Feedback
            </Link>
          </button>
        </div>
      </div>
    );
  }
}
