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
  const [items, setItems] = useState([]);
  const [total, setPrice] = useState(0);

  useEffect(() => {
    if(localStorage.getItem("mycart")) {
      let totalPrice = 0
      const list = JSON.parse(localStorage.getItem("mycart")).items
      list.forEach((item)=>{
        totalPrice += parseInt(item.product.price)
      })
      setItems(list)
      setPrice(totalPrice)
    }
    
  }, []);

  return (
    <>
      <div className="container container-fluid">
        <h2 className="mt-5">
          Your Cart: <b>2 items</b>
        </h2>
        <div className="row d-flex justify-content-between">


        {items.map((item) => (
          <div className="col-12 col-lg-8">
            <hr />
            <div className="cart-item">
              <div className="row">
                <div className="col-4 col-lg-3">
                  <img
                    src={process.env.PUBLIC_URL + `/images/${item.product.img}.jpg`}
                    alt="Laptop"
                    height="90"
                    width="115"
                  />
                </div>
                <div className="col-4 col-lg-3">
                  <p>{item.product.description}</p>
                </div>

                <div className="col-4 col-lg-2 mt-0 mt-lg-0">
                  <p id="card_item_price">${item.product.price}</p>
                </div>

                <div className="col-4 col-lg-3 mt-0 mt-lg-0 item_counter">
                  <div className="">
                    <button className="btn minus">-</button>
                    <input
                      type="number"
                      className="form-control counter d-inline"
                      value={item.product.quantity}                    
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
        ))}

          <div className="col-12 col-lg-3 my-4">
            <div id="order_summary">
              <h4>Order Summary</h4>
              <hr />
              <p>
                Subtotal:
                <span className="order-summary-values">${total}</span>
              </p>
              <p>
                Est. total:
                <span className="order-summary-values">${Math.round(total * 115)/100}</span>
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
