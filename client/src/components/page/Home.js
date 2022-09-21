import React, { useState, useEffect } from "react";
import axios from "axios"; // used to call API
import { Link } from "react-router-dom";

import StarRatings from "react-star-ratings";
import Pagination from "react-js-pagination";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { Navbar, Button, Container, Row, Nav, Image } from "react-bootstrap";

function Home() {
  const [productList, setProductList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios.get("http://localhost:3001/product/").then((response) => {
      setProductList(response.data);
      //console.log(response.data);
    });
  }, []);

  function setCurrentpageNo(pageNumber) {
    setCurrentPage(pageNumber)
  }


  return (
    <div className="homecontainer">
      <div className="banner">
        <img src={require("../../asset/images/home.jpg")}  />
      </div>
      <div className="container container-fluid">
        <section id="products" className="container mt-5">
          <div className="row">
            {productList.map((item, key) => (
              <div className="col-sm-12 col-md-6 col-lg-3 my-3" >
                <div className="card p-3 rounded" key={item.id}>
                  <img
                    className="card-img-top mx-auto"
                    src={require(`../../asset/images/${item.img}.jpg`)}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">
                      <Link to={`/product/${item.id}`}>{item.description}</Link>
                    </h5>
                    <StarRatings
                      rating={item.rate}
                      numberOfStars={5}
                      starRatedColor="#febd69"
                      starDimension={20} 
                      starSpacing={1}                                    
                    />
                    <p className="card-text mt-3">${item.price}</p>
                    
                  </div>
                  <div className="btnview">
                    <Link to={`/product/${item.id}`}><span id="view_btn">View Details</span></Link>                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <div className="d-flex justify-content-center mt-5">
          <Pagination 
            activePage = {currentPage}
            itemsCountPerPage = {4}
            totalItemsCount = {10}
            onChange = {setCurrentpageNo}
            nextPageText = {"Next"}
            prevPageText = {"Prev"}
            firstPageText = {"First"}
            lastPageText = {"Last"}
            itemClass = "page-item"
            linkClass= "page-link"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
