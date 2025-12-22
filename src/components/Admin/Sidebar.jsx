import React from "react";
import { NavLink } from "react-router-dom";
import { MdDashboard, MdLibraryAdd, MdMenuBook } from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = ({ handleLogout, isOpen, closeSidebar }) => {
  return (
    <>
      <div
        className={`sidebar-overlay ${isOpen ? "show" : ""}`}
        onClick={closeSidebar}
      ></div>

      <div className={`sidebar mt-5 text-white p-3 ${isOpen ? "show" : ""}`}>
        <ul className="nav flex-column gap-3 mt-1">
          <li className="nav-item mt-5">
            <NavLink
              className="nav-link sidebar-link d-flex align-items-center gap-2"
              to="/admin"
              onClick={closeSidebar}
            >
              <MdDashboard size={22} />
              Dashboard
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              className="nav-link sidebar-link d-flex align-items-center gap-2"
              to="/admin/add-book"
              onClick={closeSidebar}
            >
              <MdLibraryAdd size={22} />
              Add Book
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              className="nav-link sidebar-link d-flex align-items-center gap-2"
              to="/admin/view-book"
              onClick={closeSidebar}
            >
              <MdMenuBook size={22} />
              View Book
            </NavLink>
          </li>

          <li className="nav-item mt-auto">
            <button
              className="btn btn-danger w-100 d-flex align-items-center justify-content-center gap-2"
              onClick={() => {
                handleLogout();
                closeSidebar();
              }}
            >
              <FaSignOutAlt /> Logout
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
