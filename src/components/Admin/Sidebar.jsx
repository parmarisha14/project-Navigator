import React from "react";
import { NavLink } from "react-router-dom";
import { MdDashboard, MdLibraryAdd, MdMenuBook } from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = ({ handleLogout }) => {
  return (
    <div className="sidebar text-white p-3">
      <ul className="nav flex-column gap-3 mt-1">
        <li className="nav-item mt-5">
          <NavLink className="nav-link sidebar-link d-flex align-items-center gap-2" to="/admin">
            <MdDashboard size={22} />
            Dashboard
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link sidebar-link d-flex align-items-center gap-2" to="/admin/add-book">
            <MdLibraryAdd size={22} />
            Add Book
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link sidebar-link d-flex align-items-center gap-2" to="/admin/view-book">
            <MdMenuBook size={22} />
            View Book
          </NavLink>
        </li>

        <li className="nav-item mt-auto">
          <button
            className="btn btn-danger w-100 d-flex align-items-center justify-content-center gap-2"
            onClick={handleLogout}
          >
            <FaSignOutAlt /> Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
