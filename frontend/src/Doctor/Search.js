import React, { useState, useEffect, useMemo } from "react";
import Axios from "axios";
// import { ListGroup, ListGroupItem } from "reactstrap";

import {
  Row,
  Col,
  Input,
  Button,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";

import Trie from "./Trie.js";
import specialization from "./specialization";

const Search = () => {
  const [text, setText] = useState();
  const [suggestions, setSuggestions] = useState([]);

  const memoized_trie = useMemo(() => {
    const trie = new Trie();

    // Insert
    for (let i = 0; i < specialization.length; i++) {
      trie.insert(specialization[i]);
    }

    return trie;
  }, []);

  function onTextChanged(e) {
    let value = e.target.value;
    setText(value);
    value = value.toLowerCase();
    if (value !== "") setSuggestions(memoized_trie.find(value));
    else setSuggestions([]);
  }

  function suggestionSelected(value) {
    setText(value);
    setSuggestions([]);
  }

  function renderSuggestions() {
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <InputGroup>
        <ul className="list-group dropdown-menu pt-0 pb-0">
          {suggestions.map((item) => (
            <li
              className="list-group-item list-group-item-action"
              onClick={() => suggestionSelected(item)}
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
      </InputGroup>
    );
  }

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
            <Input
              value={text}
              type="text"
              placeholder="Search Your Doctor"
              onChange={onTextChanged}
              className="mb-1"
            />
            <div style={{ height: 10 }} className="">
              <InputGroupAddon addonType="append">
                <Button className="h-10 d-inline-block" color="primary">
                  Search Doctor
                </Button>
              </InputGroupAddon>
            </div>
          </InputGroup>
          {renderSuggestions()}
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
