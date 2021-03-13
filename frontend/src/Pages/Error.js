import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div>
      <h1 className="text-center mb-4 mt-4">Page Not Found</h1>
      <div class="d-flex justify-content-center">
        <Link to="/" className="btn">
          <button type="button" class="btn btn-outline-dark text-centre">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
