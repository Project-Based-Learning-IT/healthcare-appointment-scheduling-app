import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer bg-dark text-white p-3 container-fluid">
      <div className="row">
        <div className="col-md-4">
          <address>
            <strong>Address</strong>
            <br />
            <span>
              <strong>
                <a href=" https://www.google.com/maps/place/pune">
                  Pune, Maharashtra, India
                </a>
              </strong>
            </span>
          </address>
        </div>
        <div className="col-md-4">
          <p>
            Teams:
            <br />
            <a href="https://www.mayanksahu.tech/" target="_blank">
                Mayank Sahu
            </a>
            <br />
            <a href="https://siddheshkothadi.vercel.app/" target="_blank">
                Siddesh Kothari
            </a>
            <br />
            <a href="https://www.linkedin.com/in/sidhant-khamankar/" target="_blank">
                Siddhant Khamankar
            </a>
            <br />
            <a href="https://www.linkedin.com/in/aaparikh/" target="_blank">
                Atharva Parikh
            </a>
            <br />

          </p>
        </div>
        <div className="col-md-4">
            <p>
                Want to contribute to this project?
                <br />
                <a href="https://github.com/mayanksahu">
                    <i className="fab fa-github"></i>
                </a>

            </p>
        </div>

      </div>
    </div>
  );
};

export default Footer;
