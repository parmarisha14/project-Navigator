import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const UserLayout = ({ handleLogout }) => {
  return (
    <>
      <Header handleLogout={handleLogout} />  
      <Outlet />
      <Footer/>
    </>
  );
};

export default UserLayout;
