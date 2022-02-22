import React from "react";

import Image from "../image/doctor.jpg";

const About = () => {
  return (
    <div className="container">
      <div className="card my-5  ">
        <div className="row g-0">
          <div className="col-md-6 my-auto  order-md-2">
            <img src={Image} className="img-fluid rounded-start px-3" alt="..." />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">
                Hospital Appointment Booking System
              </h5>
              <p className="card-text">
                One of main issue with current pandemic situation is that the
                hospitals are bit busy dealing with covid patients and other
                patients showing similar symptoms so its not easy for their
                regular patients who used to get a checkup or consultation. This
                is worsened by the restrictions due to lockdowns and the fear of
                contracting the contagious virus. So to deal with this issue we
                have come up with an approach and built this system which
                provides medical services and allows users to connect and
                consult with doctors. The aim was to build a minimalist UI for
                the system so people of any age group could easily navigate
                through it. A hospital can register their doctors in the system
                through their legal process and then patients can search doctors
                from varied specialization for consultation.
              </p>
              <p className="card-text">
                This system brings many advantages to both patients and doctors.
                It can solve the lack of resources and infrastructure problem
                for building large hospitals. As the process is automated it
                will reduce the manual work done by the staff of the hospital.
                Patient health records can be maintained which can be utilized
                in health research areas or advertising purpose. The best thing
                about this is patient can book appointment at any place and any
                time within 2 minutes without waiting in a long queue in a
                hospital. It will definitely help in countries like India where
                health sector has not progressed much.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
