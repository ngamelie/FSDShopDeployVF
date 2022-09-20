import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { Navbar, Button, Container, Row, Nav, Image } from "react-bootstrap";

function Home() {
  return (
    <div className="homecontainer">
      <div className="banner">
        <img src={require("../../asset/images/home.jpg")} />
      </div>
      <div className="container container-fluid">
        <section id="products" className="container mt-5">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-3 my-3">
              <div className="card p-3 rounded">
                <img
                  className="card-img-top mx-auto"
                  src="https://m.media-amazon.com/images/I/617NtexaW2L._AC_UY218_.jpg"
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">
                    <a href="">
                      128GB Solid Storage Memory card - SanDisk Ultra
                    </a>
                  </h5>
                  <div class="ratings mt-auto">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={farStar} />
                <FontAwesomeIcon icon={farStar} />
               <span id="no_of_reviews">(5 Reviews)</span>
              </div>
                  <p className="card-text">$45.67</p>
                  <a href="#" id="view_btn" className="btn btn-block">
                    View Details
                  </a>
                </div>
              </div>
            </div>

            <div class="col-sm-12 col-md-6 col-lg-3 my-3">
          <div class="card p-3 rounded">
            <img
              class="card-img-top mx-auto"
              src="https://m.media-amazon.com/images/I/61B04f0ALWL._AC_UY218_.jpg"
            />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">
                <a href=""
                  >Wyze Cam 1080p HD Indoor Wireless Smart Home Camera Wyze Cam 1080p HD Indoor Wireless Smart Home Camera</a
                >
              </h5>
              <div class="ratings mt-auto">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={farStar} />
               <span id="no_of_reviews">(5 Reviews)</span>
              </div>
              <p class="card-text">$965.67</p>
              <a href="#" id="view_btn" class="btn btn-block">View Details</a>
            </div>
          </div>
        </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
