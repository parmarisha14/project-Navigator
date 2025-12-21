import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const UserLayout = ({ handleLogout }) => {
  return (
    <>
      <Header handleLogout={handleLogout} />  
      <Outlet />
    </>
  );
};

export default UserLayout;
