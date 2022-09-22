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
  // for testing
  let id = 14;
  const [product, setProduct] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:3001/product/${id}`).then((rs) => {
      //console.log(rs.data.pid);
      setProduct(rs.data);
    });
  }, []);

  return (
    <>
      <div className="step">
        <StepCheckout step1 step2></StepCheckout>
      </div>
      <div className="container container-fluid">       
        <div className="row d-flex justify-content-between">
          <div className="col-12 col-lg-8 mt-5 order-confirm">
            <h4 className="mb-3">Shipping Info</h4>
            <p>
              <b>Name:</b> User Name
            </p>
            <p>
              <b>Phone:</b> 111 111 1111
            </p>
            <p className="mb-4">
              <b>Address:</b> 2968, User address
            </p>

            <hr />
            <h4 className="mt-4">Your Cart Items:</h4>

            <hr />
            <div className="cart-item my-1">
              <div className="row">
                <div className="col-4 col-lg-2">
                  <img
                    src={process.env.PUBLIC_URL + `/images/${product.img}.jpg`}
                    alt="Laptop"
                    height="45"
                    width="65"
                  />
                </div>

                <div className="col-5 col-lg-6">
                  <p>{product.description}</p>
                </div>

                <div className="col-4 col-lg-4 mt-4 mt-lg-0">
                  <p>
                    1 x ${product.price} = <b>${product.price}</b>
                  </p>
                </div>
              </div>
            </div>
            <hr />
          </div>

          <div className="col-12 col-lg-3 my-4">
            <div id="order_summary">
              <h4>Order Summary</h4> <hr />
              <p>
                Subtotal: <span className="order-summary-values">$45</span>
              </p>
              <p>
                Shipping: <span className="order-summary-values">$25</span>
              </p>
              <p>
                Tax: <span className="order-summary-values">$0</span>
              </p>{" "}
              <hr />
              <p>
                Total: <span className="order-summary-values">$123</span>
              </p>{" "}
              <hr />
              <Link
                to="/payment"
                id="checkout_btn"
                className="btn btn-primary btn-block"
              >
                Proceed to Payment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
