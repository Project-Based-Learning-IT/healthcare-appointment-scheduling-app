import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div>
      <h1 className="text-center mb-4 mt-4">Page Not Found</h1>
      <div className="d-flex justify-content-center">
        <Link to="/" className="btn">
          <button type="button" className="btn btn-outline-dark text-centre">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
