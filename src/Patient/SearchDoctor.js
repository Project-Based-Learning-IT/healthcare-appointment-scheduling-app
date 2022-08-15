import React from "react";
import Navbar from "../Basic/Navbar";
import LeftsidePatient from "../Dashbaord/LeftsidePatient";
import Search from "../Doctor/Search";

const SearchDoctor = () => {
  return (
    <div className="bg-dark" style={{ height: "100vh" }}>
      <Navbar />
      <div
      className="container mt-5 bg-light"
      style={{
        minHeight: "80vh",
      }}
      >
        <div className="row">
        
            <LeftsidePatient />
          
          <div
            className="col-9 col-md-9 p-4"
            style={{
              border: "15px solid yellow ",
              height: "80vh",
              backgroundColor: "#6c757d",
            }}
          >
            <Search />
          </div>
        </div>
      </div>
    </div> 
  );
};

export default SearchDoctor;
