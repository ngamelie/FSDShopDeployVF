import React, { useState, useEffect, Component } from "react";

import { useParams, useNavigate } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";
import StepCheckout from "../common/StepCheckout";
import Axios from "axios";
import "../../asset/common/Style.css";
import config from "../config/Config";
const PATH = config().path + "/product";

function Checkout() {
  let { id } = useParams();

  return (
    <>
      <div className="step">
        <StepCheckout step1 step2 step3></StepCheckout>
      </div>
      <div className="row wrapper">
        <div className="col-10 col-lg-3">
          <form className="shadow-lg">
            <h1 className="mb-4">Card Info</h1>
            <div className="form-group">
              <label for="card_num_field">Card Number</label>
              <input
                type="text"
                id="card_num_field"
                className="form-control"
                value=""
              />
            </div>

            <div className="form-group">
              <label for="card_exp_field">Date Expiry</label>
              <input
                type="text"
                id="card_exp_field"
                className="form-control"
                value=""
                placeholder="MM/YY"
              />
            </div>

            <div className="form-group">
              <label for="card_cvc_field">CVC</label>
              <input
                type="text"
                id="card_cvc_field"
                className="form-control"
                value=""
              />
            </div>

            <button id="pay_btn" type="submit" className="btn btn-block py-3">
              Pay
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Checkout;
