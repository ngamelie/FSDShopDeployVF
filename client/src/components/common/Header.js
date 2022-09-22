import React, {useState, useEffect, Component} from "react";
import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap";
import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [keyWord, setKeyWord] = useState("");
  const [orderNum, setOrderNum] = useState(0);
  const [uemail, setUemail] = useState("")

  useEffect(() => {
    if(localStorage.getItem("mycart")) {
      const myCart = JSON.parse(localStorage.getItem("mycart"))
      let num = 0
      myCart.items.forEach((item)=>{
        num += parseInt(item.quantity)
      })

      //setOrderNum( myCart.items.length)
      setOrderNum( num )
    }

    if(sessionStorage.getItem("token") && !isNaN(sessionStorage.getItem("token"))){
      const obj = JSON.parse(sessionStorage.getItem("token"))
      const email = obj.user.uemail
      setUemail(email)
    }
  })

  return (
    <div>
      <nav className="navbar row">
        <div className="col-12 col-md-3">
          <div className="navbar-brand mx-3">
            <a href="/">
              <img src={process.env.PUBLIC_URL + "/images/logo2.png"}  className="img-fluid logo" />
            </a>
          </div>
        </div>
        <div className="col-12 col-md-6 mt-2 mt-md-0">
          <div className="input-group">
            <input
              type="text"
              id="search_field"
              className="form-control"
              placeholder="Enter Product Name ..." 
              onChange={(e)=>{
                setKeyWord(e.target.value)
              }}
            />
            <div className="input-group-append">
            <a id="search_btn" className="btn" href={ keyWord.trim() == "" ? '/' : `/product/name/${keyWord}` }><FontAwesomeIcon icon={faSearch} /></a>  
            </div>
          </div>
        </div>

        <div className="col-12 col-md-3 mt-4 mt-md-0 rightheader">
          { (uemail=="") 
            ? <Link to="/login" className="btn" id="login_btn">Login</Link>
            : <Link to="/user/profile">Welcome: {uemail}</Link> 
          }
          
          <Link to="/shopping/cart"><span id="cart" className="ml-3">Cart</span></Link>
          <span className="ml-1" id="cart_count">
            {orderNum}

          </span>
        </div>
      </nav>
    </div>
  );
}

export default Header;
