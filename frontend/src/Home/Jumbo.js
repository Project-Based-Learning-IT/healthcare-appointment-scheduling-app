import React, { Component } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import cor1 from '../image/cors1.jpg'

const Jumbo=()=>{
    return(
        <div>
            <div
          style={{
            width: "100%",
            height:"400px",
            top: 1,
            position: "relative",
            
          }}
        >
          <div className="container-fluid" style={{width:"100%"}}>
            <Carousel interval={2000} keyboard={false} pauseOnHover={true}>
              <Carousel.Item style={{ height: "400px" }}>
                <img
                  style={{ height: "400px" }}
                  className="d-block w-100"
                  
                  src={
                    cor1
                  }
                />

                <Carousel.Caption>
                  <h3>First</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={{ height: "400px" }}>
                <img
                  style={{ height: "400px" }}
                  className="d-block w-100"
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyHCKIMPmHYJoKmUfIAGkVXeLQf9NPYy97NQ&usqp=CAU"
                  }
                />
                <Carousel.Caption>
                  <h3>Second</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={{ height: "400px" }}>
                <img
                  style={{ height: "400px" }}
                  className="d-block w-100"
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyHCKIMPmHYJoKmUfIAGkVXeLQf9NPYy97NQ&usqp=CAU"
                  }
                />
                <Carousel.Caption>
                  <h3>Third</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        </div>
    )
}


export default Jumbo