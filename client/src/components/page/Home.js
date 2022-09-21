import React, { useState, useEffect } from "react";
import Axios from "axios"; // used to call API
import { Link } from "react-router-dom";

import StarRatings from "react-star-ratings";
import Pagination from "react-js-pagination";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { Navbar, Button, Container, Row, Nav, Image } from "react-bootstrap";
import config from '../config/Config'
const PATH = config().path

function Home(props) {
  const [productList, setProductList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [catergories, setCatergory] = useState([])
  const [rsLength, setRsLength] = useState(0);
  
  const url = window.location.href
  const key = url.split("/")[url.split("/").length - 1]

  useEffect(() => {
    if(url.includes("product/name")){
      Axios.get(PATH + "/product/namenum/" + key).then((response) => {
      setRsLength(response.data.length)
      });

      Axios.get(PATH + "/product/name/" + "___1").then((response) => {
      setProductList(response.data);
      });

    } 
    
    
    else if(url.includes("product/category")){
      Axios.get(PATH + "/product/category/" + key).then((response) => {
        setProductList(response.data);
      });
    } 
    
    
    else {
      // change here after
      Axios.get(PATH + "/product").then((response) => {
        setRsLength(response.data.length);
      });

      Axios.get(PATH + "/product/page/1").then((response) => {
        setProductList(response.data);
      });
    }

    Axios.get(PATH + "/category").then( rs => {
      setCatergory(rs.data)
    })

  }, []);

  function setCurrentpageNo(pageNumber) {
    setCurrentPage(pageNumber)
      if(url.includes("product/name")){
        Axios.get(PATH + "/product/namenum/" + key).then((response) => {
          setRsLength(response.data.length)
          });
  
        Axios.get(PATH + "/product/name/" + key + "___" + pageNumber).then((response) => {
          setProductList(response.data);
          });

      } 
      
      else if(url.includes("product/category")){
          Axios.get(PATH + "/product/category/" + key).then((response) => {
            setProductList(response.data);
          });
      } 
      
      
      else {
        // change here after
        Axios.get(PATH + "/product").then((response) => {
          setRsLength(response.data.length);
        });
  
        Axios.get(PATH + "/product/page/" + pageNumber).then((response) => {
          setProductList(response.data);
          });
      }
  }

  return (
    <div className="homecontainer row">


      <div className="col-2">
        <br /><br />
          <h5>Electronics</h5>

            { catergories.map(category => (
              <div>
                <a href={`/product/category/${category.cid}`}> { category.title } </a> <br/>
              </div>
            ))}

      </div>

      <div className="col-10">
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
                        <Link to={`/product/${item.pid}`}>{item.description}</Link>
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
                      <Link to={`/product/${item.pid}`}><span id="view_btn">View Details</span></Link>                    
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
              totalItemsCount = {rsLength}
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
    </div>
  );
}

export default Home;
