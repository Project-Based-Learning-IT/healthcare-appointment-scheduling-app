import React, { useState, useEffect } from "react";
import Axios from "axios";
import {
  Row,
  Col,
  Input,
  Button,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";

const Search = () => {
  const [Doctor, setDoctor] = useState([]);

  const fetchDoctor = async () => {
    const { data } = await Axios.get(
      `${process.env.REACT_APP_SERVER_URL}/doctors/`
    );
    setDoctor(data);
    console.log(data);
  };

  useEffect(() => {
    fetchDoctor();
  }, []);

  return (
    <div>
      <Row className="mb-3">
        <Col>
          <InputGroup>
            <Input type="text" placeholder="Search Your Doctor" />
            <InputGroupAddon addonType="append">
              <Button color="primary">Search Doctor</Button>
            </InputGroupAddon>
          </InputGroup>
        </Col>
      </Row>
      {/* <ListGroup> */}
      <div className="overflow-auto ">
        <div className="row">
          {Doctor.map((doc) => (
            // <ListGroupItem key={doc.id} className="mb-3">
            <div className="col-sm-6 mb-2">
              <div className="card">
                <div className="card-body">
                  <div className="text-info">
                    {" "}
                    <h6>
                      Doctor Name:
                      <span className="text-uppercase"> {doc.name}</span>
                    </h6>{" "}
                  </div>
                  <div>Specialization : {doc.specialization}</div>
                  <div>Phone Number : {doc.phoneNumber}</div>
                  <div>FeesPerSession: {doc.feesPerSession}</div>

                  {/* </ListGroupItem> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* </ListGroup> */}
    </div>
  );
};

export default Search;
