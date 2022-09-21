import React from "react";
import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap";
import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [keyWord, setKeyWord] = useState("");
  const [orderNum, setOrderNum] = useState(0);

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
  })

  return (
    <div>
      <nav className="navbar row">
        <div className="col-12 col-md-3">
          <div className="navbar-brand mx-3">
            <Link to="/">
              <img
                src={process.env.PUBLIC_URL + "/images/logo2.png"}
                className="img-fluid logo"
              />
            </Link>
          </div>
        </div>
        <div className="col-12 col-md-6 mt-2 mt-md-0">
          <div className="input-group">
            <input
              type="text"
              id="search_field"
              className="form-control"
              placeholder="Enter Product Name ..."
            />
            <div className="input-group-append">
              <button id="search_btn" className="btn">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-3 mt-4 mt-md-0 rightheader">
          <Link to="/login" className="btn" id="login_btn">Login</Link>
          <span id="cart" className="ml-3">Cart</span>
          <span className="ml-1" id="cart_count">
            {orderNum}

          </span>
        </div>
      </nav>
    </div>
  );
}

export default Header;
