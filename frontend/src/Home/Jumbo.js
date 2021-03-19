import React from "react";
import Carousel from "react-bootstrap/Carousel";
import co1 from "../image/co1.jpg"
import co2 from "../image/co2.jpg"
import co4 from "../image/co4.jpg"
// import co3 from "../image/co3.jpg"
// import co5 from "../image/co5.jpg"



const Jumbo=()=>{
    return(
        <div>
            <div
          style={{
            width: "100%",
            height:"100%",
            top: 1,
            position: "relative",
            
          }}
        >
          <div style={{width:"100%"}}>
            <Carousel interval={2000} keyboard={false}>
              <Carousel.Item style={{ height: "500px" }}>
                <img
                  alt = "carousel-image1"
                  className="d-block w-100"
                  
                  src={
                    co1
                  }
                />
{/* 
                <Carousel.Caption>
                  <h3>First</h3>
                </Carousel.Caption> */}
              </Carousel.Item>
              <Carousel.Item style={{ height: "500px" }}>
                <img
                  alt="carousel-image2"
                  className="d-block w-100"
                  src={
                    co2
                  }
                />
                {/* <Carousel.Caption>
                  <h3>Second</h3>
                </Carousel.Caption> */}
              </Carousel.Item>
              <Carousel.Item style={{ height: "500px" }}>
                <img
                  alt="carousel-image3"
                  className="d-block w-100"
                  src={
co4                  }
                />
                {/* <Carousel.Caption>
                  <h3>Third</h3>
                </Carousel.Caption> */}
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        </div>
    )
}


export default Jumbo