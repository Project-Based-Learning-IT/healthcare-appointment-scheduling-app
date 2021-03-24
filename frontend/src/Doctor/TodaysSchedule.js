import React from "react";

const TodaysSchedule = ({ no }) => {
  return (
    <table className="table table-hover table-dark">
      <thead>
        <tr>
          <th scope="col">Slot</th>
          <th scope="col">Patient Name</th>
          <th scope="col">Meet Link</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">9-10 AM</th>
          <td>Mark</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">10-11 AM</th>
          <td>Jacob</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">11-12 AM</th>
          <td>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TodaysSchedule;
