import React, { useState, useEffect, Component } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Axios from "axios";
import StepCheckout from "../common/StepCheckout";

import "../../asset/common/Style.css";
import config from "../config/Config";
const PATH = config().path + "/product";

function Checkout() {
  let { id } = useParams();

  return (
    <>
      <div className="step">
        <StepCheckout step1></StepCheckout>
      </div>

      <div className="row wrapper">
        <div className="col-10 col-lg-3">
          <form className="shadow-lg">
            <h1 className="mb-4">Shipping Info</h1>
            <div className="form-group">
              <label for="address_field">Address</label>
              <input
                type="text"
                id="address_field"
                className="form-control"
                value=""
                required
              />
            </div>

            <div className="form-group">
              <label for="city_field">City</label>
              <input
                type="text"
                id="city_field"
                className="form-control"
                value=""
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone_field">Phone No</label>
              <input
                type="phone"
                id="phone_field"
                className="form-control"
                value=""
                required
              />
            </div>

            <div className="form-group">
              <label for="postal_code_field">Postal Code</label>
              <input
                type="number"
                id="postal_code_field"
                className="form-control"
                value=""
                required
              />
            </div>

            <div className="form-group">
              <label for="country_field">Country</label>
              <input
                type="phone"
                id="country_field"
                className="form-control"
                value=""
                required
              />
            </div>

            <Link to="/order" id="shipping_btn" className="btn btn-block py-3">
              CONTINUE
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Checkout;
