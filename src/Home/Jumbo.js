import React from "react";
import Carousel from "react-bootstrap/Carousel";
import co1 from "../image/co1.png";
import co2 from "../image/co2.png";
import co3 from "../image/co3.png";

const Jumbo = () => {
  return (
    <div className="my-5 container-fluid">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-75 mx-auto"
            src={co1}
            height={400}
            alt="First slide"
          />
          {/* <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-75 mx-auto"
            height={400}
            src={co2}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-75 mx-auto"
            height={400}
            src={co3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Jumbo;
