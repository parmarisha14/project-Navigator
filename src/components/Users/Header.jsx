import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaUserCircle, FaBook, FaSignOutAlt, FaUser } from "react-icons/fa";
import logo from "../../assets/images/logo1.png";
import "./Header.css";

const Header = ({ handleLogout }) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser && currentUser.name) setUserName(currentUser.name);
  }, []);

  const logoutClick = () => {
    localStorage.removeItem("login");
    localStorage.removeItem("role");
    localStorage.removeItem("currentUser");
    handleLogout();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg custom-nav shadow-sm py-2 sticky-top">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-2">
          <img src={logo} alt="Library Logo" className="nav-logo" />
          <h5 className="mb-0 fw-bold nav-title">Library Management</h5>
        </div>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav ms-5 mb-2 mb-lg-0 nav-links">
            <li className="nav-item"><NavLink className="nav-link custom-link" to="/">Home</NavLink></li>
            <li className="nav-item ms-4"><NavLink className="nav-link custom-link" to="/about">About</NavLink></li>
            <li className="nav-item ms-4"><NavLink className="nav-link custom-link" to="/book">Book</NavLink></li>
            <li className="nav-item ms-4"><NavLink className="nav-link custom-link" to="/contact">Contact</NavLink></li>
          </ul>

          <div className="dropdown ms-auto">
            <button className="profile-btn d-flex align-items-center gap-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <FaUserCircle size={34} />
              {userName && <span className="ms-2 fw-semibold">{userName}</span>}
              
            </button>
            <ul className="dropdown-menu dropdown-menu-end shadow-sm">
              
              <li>
                <NavLink className="dropdown-item d-flex align-items-center gap-2" to="/my-books"><FaBook /> My Books</NavLink>
              </li>
              <li><hr className="dropdown-divider"/></li>
              <li>
                <button className="dropdown-item text-danger d-flex align-items-center gap-2" onClick={logoutClick}><FaSignOutAlt /> Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
