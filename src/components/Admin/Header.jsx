import React from "react";
import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <nav className="navbar bg-white border-bottom fixed-top" >
      <div className="container">
        <div className="d-flex align-items-center gap-1">

          <img
            src={logo}
            alt="Library Logo"
            style={{ height: "60px" }}
          />

          <h5 className="mb-0 fw-bolder "style={{color:"#294666"}}>
            Library Management System
          </h5>

        </div>
      </div>
    </nav>
  );
};

export default Header;
