import React from "react";
import {
  FaGithub,
  FaLocationArrow,
  FaEnvelope,
  FaPhone,
  FaOpera,
  FaTeamspeak,
  FaGlobe,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer bg-dark text-white px-3 pt-3 container-fluid">
      <div className="row">
        <div className="col-md-4 text-center">
          <address>
            <h3>
              <FaLocationArrow />
            </h3>
            <h4>Address</h4>
            <p>
              {" "}
              <a href="https://goo.gl/maps/Kc5H7FDAXsddri6F9" target="_blank">
                VIIT, Survey No. 3/4, Kondhwa, Pune
              </a>
            </p>
          </address>
        </div>
        <div className="col-md-4 text-center">
          <h3>
            <FaOpera />
          </h3>
          <h4>Contact Us</h4>
          <p>
            <a href="mailto:maatsisipbl@gmail.com" target="_blank">
              <FaEnvelope />
              &nbsp; maatsisipbl@gmail.com
            </a>
            <br />
            <a href="tel:+919307531964" target="_blank">
              <FaPhone />
              &nbsp; +91-930-753-1964
            </a>
          </p>
        </div>
        <div className="col-md-4 text-center">
          <h3>
            <FaTeamspeak />
          </h3>
          <h4>Team</h4>
          <div className="row text-center">
            <div className="col-6 text-center">
              <p className="text-center">
                <a href="https://www.mayanksahu.tech/" target="_blank">
                  <FaGlobe />
                  &nbsp; Mayank Sahu
                </a>
                <br />
                <a href="https://siddheshkothadi.vercel.app/" target="_blank">
                  <FaGlobe />
                  &nbsp;Siddesh Kothari
                </a>
              </p>
            </div>
            <div className="col-6 text-center">
              <p className="text-center">
                <a
                  href="https://www.linkedin.com/in/sidhant-khamankar/"
                  target="_blank"
                >
                  <FaLinkedin />
                  &nbsp; Siddhant Khamankar
                </a>
                <br />
                <a href="https://www.linkedin.com/in/aaparikh/" target="_blank">
                  <FaLinkedin />
                  &nbsp; Atharva Parikh
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-2 py-2"
      style={
        {
  backgroundColor: "#242B2E"
          
        }
      }
      >
        <div className="col-md-12 text-center">
          <h4>
            Contridute to the project here 
            <a
              href="https://github.com/Project-Based-Learning-IT/healthcare-appointment-scheduling-app"
              target="_blank"
            >
              &nbsp;<FaGithub />
            </a>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
