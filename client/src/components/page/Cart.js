import React, { useState, useEffect, Component } from "react";

import { useParams, useNavigate } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";

import Axios from "axios";
import "../../asset/common/Style.css";
import config from "../config/Config";
const PATH = config().path + "/product";

function Cart() {
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
      <div className="container container-fluid">
        <h2 className="mt-5">
          Your Cart: <b>2 items</b>
        </h2>
        <div className="row d-flex justify-content-between">
          <div className="col-12 col-lg-8">
            <hr />
            <div className="cart-item">
              <div className="row">
                <div className="col-4 col-lg-3">
                  <img
                    src={process.env.PUBLIC_URL + `/images/${product.img}.jpg`}
                    alt="Laptop"
                    height="90"
                    width="115"
                  />
                </div>
                <div className="col-4 col-lg-3">
                  <p>{product.description}</p>
                </div>

                <div className="col-4 col-lg-2 mt-0 mt-lg-0">
                  <p id="card_item_price">${product.price}</p>
                </div>

                <div className="col-4 col-lg-3 mt-0 mt-lg-0 item_counter">
                  <div className="">
                    <button className="btn minus">-</button>
                    <input
                      type="number"
                      className="form-control counter d-inline"
                      value="1"                      
                    />
                    <button className="btn plus">+</button>
                  </div>
                </div>
                <div className="col-4 col-lg-1 mt-0 mt-lg-0">
                  <button id="delete_cart_item"> Delete
                  </button>
                </div>
              </div>
            </div>
            <hr />
          </div>
          <div className="col-12 col-lg-3 my-4">
            <div id="order_summary">
              <h4>Order Summary</h4>
              <hr />
              <p>
                Subtotal:
                <span className="order-summary-values">$700.00</span>
              </p>
              <p>
                Est. total:
                <span className="order-summary-values">$765.56</span>
              </p>
              <hr />
              <Link to="/shipping" id="checkout_btn" className="btn btn-primary btn-block">Check out</Link>             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
