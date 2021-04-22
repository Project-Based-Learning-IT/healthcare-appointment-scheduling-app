import React, { useState, useEffect, useMemo } from "react";
import Axios from "axios";
import Scrollbar from "react-scrollbars-custom";
// import { ListGroup, ListGroupItem } from "reactstrap";

import {
  Row,
  Col,
  Input,
  Button,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";

import Trie from "./Trie.js"; //import Trie object
import specialization from "./specialization"; //import specializations array
import { Link } from "react-router-dom";

const Search = () => {
  const [text, setText] = useState(); //value inside search box
  const [suggestions, setSuggestions] = useState([]); //autocomplete suggestions

  const memoized_trie = useMemo(() => {
    //memorize the output of function similar to memoization of dynamic programming (reuse solution)
    const trie = new Trie(); //create object

    // Insert each specialization from array into trie
    for (let i = 0; i < specialization.length; i++) {
      trie.insert(specialization[i]);
    }

    return trie;
  }, []); //dependency array to look for changes and re-run the function

  //called on value change in search box
  function onTextChanged(e) {
    //event parameter passed implicitly
    let value = e.target.value; //get search box value
    setText(value); //set value in search box
    fetchDoctor(); //fetches all doctors from database
    value = value.toLowerCase(); //convert to lowercase for comparison

    //if value is not empty set suggestions after finding all using trie
    if (value !== "") setSuggestions(memoized_trie.find(value));
    else setSuggestions([]); //if value is empty the set 0 suggestions
  }

  function suggestionSelected(value) {
    //set value of selected suggestion in search box
    setText(value);
    //set suggestions as empty
    setSuggestions([]);
  }

  function renderSuggestions() {
    //display suggestions as dropdown that is overlapped below search box elements
    if (suggestions.length === 0) {
      //no suggestions found don't display anything
      return null;
    }
    return (
      <InputGroup>
        <ul className="list-group dropdown-menu pt-0 pb-0">
          {
            //for each suggestion display it in list
            suggestions.map((item) => (
              <li
                className="list-group-item list-group-item-action"
                onClick={() => suggestionSelected(item)} //when user click on particular suggestion call suggestion selected by passing that suggestion value
                key={item} //maintains traversing order
              >
                {item}
              </li>
            ))
          }
        </ul>
      </InputGroup>
    );
  }

  const [Doctor, setDoctor] = useState([]); //doctors array

  const fetchDoctor = async () => {
    const { data } = await Axios.get(
      //make get request to server to fetch all doctors
      `${process.env.REACT_APP_SERVER_URL}/doctors/`
    );
    setDoctor(data); //set fetched data in doctors array
    console.log(data);
  };

  const UpdateDisplay = (text) => {
    //filter doctors matching searched specialization and set in doctors array
    setDoctor((Doctor) => {
      return Doctor.filter(
        (doctor) => doctor.specialization.toLowerCase() === text.toLowerCase()
      );
    });
    console.log(Doctor);
  };

  useEffect(() => {
    //executes once
    fetchDoctor();
  }, []);

  return (
    <div>
      <Row className="mb-3">
        <Col>
          <InputGroup>
            <Input
              value={text} //set value to appear in search box
              type="text"
              placeholder="Search Your Doctor" //text to show in empty search box
              onChange={onTextChanged} //call after change of input in search box
              className="mb-1"
            />
            <div style={{ height: 10 }} className="">
              <InputGroupAddon addonType="append">
                <Button
                  className="h-10 d-inline-block"
                  color="primary"
                  onClick={() => UpdateDisplay(text)} //filter results
                >
                  Search Doctor
                </Button>
              </InputGroupAddon>
            </div>
          </InputGroup>
          {
            renderSuggestions() //display suggestions as dropdown
          }
        </Col>
      </Row>

      {/* <ListGroup> */}
      <Scrollbar
        noScrollX
        style={{ position: "", height: "64vh", width: "144vh" }}
        className="col-12 col-md-12"
      >
        <div className="row">
          {
            //display doctor cards
            Doctor.map((doc) => (
              // <ListGroupItem key={doc.id} className="mb-3">
              <div className="col-sm-6 mb-2" key={doc._id}>
                <div className="card">
                  <div className="card-body">
                    <div className="text-info">
                      <h6>
                        Doctor Name:
                        <span className="text-uppercase"> {doc.name}</span>
                      </h6>
                    </div>
                    <div>Specialization : {doc.specialization}</div>
                    <div>Phone Number : {doc.phoneNumber}</div>
                    <div className="row mb-0 pb-0">
                      <div className="col-md-6 ">
                        FeesPerSession: {doc.feesPerSession}
                      </div>
                      <div
                        className=" col align-self-end col-md-2 offset-md-3 inline"
                        style={{ textAlign: "center" }}
                      >
                        <Link
                          to={{
                            pathname: "/patient/selectdate",
                            doctor: { doctor: doc },
                          }}
                        >
                          <button className="btn btn-sm btn-primary">
                            {" "}
                            Book
                          </button>{" "}
                        </Link>
                      </div>
                    </div>

                    {/* </ListGroupItem> */}
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </Scrollbar>
      {/* </ListGroup> */}
    </div>
  );
};

export default Search;
