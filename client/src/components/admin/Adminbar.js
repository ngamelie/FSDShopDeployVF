import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileEdit,
  faComputerMouse,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function Adminbar() {
  return (
    <div className="admin_container">
      <h1 className="admintitle">FSD SHOP ADMIN</h1>
      <div className="adminbar">
        <div className="adminitem">
          <Link to="/admin/products" className="btn">
            <FontAwesomeIcon icon={faComputerMouse} /> Products
          </Link>
        </div>
        <div className="adminitem">
          <Link to="/admin/orders" className="btn">
            <FontAwesomeIcon icon={faFileEdit} /> Orders
          </Link>
        </div>
        <div className="adminitem">
          <Link to="/admin/users" className="btn">
            <FontAwesomeIcon icon={faUser} /> Users
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Adminbar;
