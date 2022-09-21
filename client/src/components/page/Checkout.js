import React, { useState, useEffect, Component } from "react";

import { useParams, useNavigate } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";

import Axios from "axios";
import "../../asset/common/Style.css";
import config from "../config/Config";
const PATH = config().path + "/product";

function Checkout() {
  
  let { id } = useParams();
  
  return (
    <>
      <div>
          Checkout
      </div>
      
    </>
  );
}

export default Checkout;
