import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ handleLogout }) => {
  return (
    <>
      <Header handleLogout={handleLogout} />
      <div className="d-flex">
        <Sidebar handleLogout={handleLogout} />
        <div className="p-4 w-100 bg-light">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
