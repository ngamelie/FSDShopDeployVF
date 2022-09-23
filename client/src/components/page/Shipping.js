import React, { useState, useEffect, Component } from "react";
import { Button, Card, Alert, Nav, variant, Form } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Axios from "axios";
import StepCheckout from "../common/StepCheckout";

import "../../asset/common/Style.css";
import config from "../config/Config";
const PATH = config().path + "/login/user";

function Checkout() {
  const [add1, setAdd1] = useState("");
  const [add2, setAdd2] = useState("");
  const [phone1, setPhone1] = useState("");
  const [msg, setMsg] = useState([]);
  //const [issave, setIssave] = useState(0);

  const updateUserInfo = ()=>{
    if (isVerified()) {
      Axios.put(PATH + "/updateUserInfo", {
        uid: JSON.parse(sessionStorage.getItem("token")).user.uid,
        add1: add1,
        add2: add2,
        phone1: phone1
      }, {headers:{token: sessionStorage.getItem("token")}}).then((rs) => {

      });
    }
  }
  
  function isVerified() {
    var rs = true;
    setMsg("");
    if (add1 == "") {
      setMsg((msg) => [...msg, "Confirm your address please."]);
      rs = false;
    }

    if (add2 == "") {
      setMsg((msg) => [...msg, "Confirm your city please."]);
      rs = false;
    }

    if (phone1 == "") {
      setMsg((msg) => [...msg, "Confirm your phone number please."]);
      rs = false;
    }
    if(msg) {
      alert(msg)
    }
    
    return rs;
  }

  return (
    <>
      <div className="step">
        <StepCheckout step1></StepCheckout>
      </div>

      <div className="row wrapper">
        <div className="col-10 col-lg-4">
          <form className="shadow-lg">
            <h1 className="mb-4">Shipping Info</h1>
            <div className="form-group">
              <label for="address_field">Address</label>
              <input
                type="text"
                id="address_field"
                name="add1"
                className="form-control"
                required
                onChange={(e) => {
                  setAdd1(e.target.value);
                }}
              />
            </div>

            <div className="form-group">
              <label for="city_field">City</label>
              <input
                type="text"
                id="city_field"
                name="add2"
                className="form-control"
                required
                onChange={(e) => {
                  setAdd2(e.target.value);
                }}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone_field">Phone No</label>
              <input
                type="number"
                id="phone_field"
                name="phone1"
                className="form-control"
                required
                onChange={(e) => {
                  setPhone1(e.target.value);
                }}
              />
            </div>
{/* 
            <div className="form-group">
              Save shipping information 
              <Form.Check aria-label="Save shipping information" name="issave" onChange={(e)=>{
                (issave == 0) ? setIssave(1) : setIssave(0)
                }} /> <br/>
            </div> */}
            <Link to="/order" id="shipping_btn" className="btn btn-block py-3" onMouseOver={ updateUserInfo }>
              CONTINUE
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Checkout;
