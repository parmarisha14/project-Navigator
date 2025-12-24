
import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";

import Layout from "./components/Admin/Layout";
import UserLayout from "./components/Users/UserLayout";

import UserLogin from "./components/Users/Auth/Login";
import AdminLogin from "./components/Users/Auth/AdminLogin";
import Register from "./components/Users/Auth/Register";

import AdminDashboard from "./components/Admin/pages/AdminDashboard";
import AddBook from "./components/Admin/pages/AddBook";
import ViewBook from "./components/Admin/pages/ViewBook";

import Home from "./components/Users/pages/Home";
import About from "./components/Users/pages/About";
import Contact from "./components/Users/pages/Contact";
import Books from "./components/Users/pages/Books";
import MyBooks from "./components/Users/pages/MyBooks";

import useBook from "./Hooks/useBook";
import { useNavigate } from "react-router-dom";

const App = () => {
  const {
    book,
    list,
    borrow,
    handleSubmit,
    handleDelete,
    handleEdit,
    handleBorrowedBook,
  } = useBook();

  const navigate = useNavigate();

  
  const handleAdminLogout = () => {
    localStorage.removeItem("adminLogin");
    localStorage.removeItem("adminRole");
    navigate("/admin-login");
  };

  // User logout
  const handleUserLogout = () => {
    localStorage.removeItem("userLogin");
    localStorage.removeItem("userRole");
    localStorage.removeItem("currentUser");
    localStorage.removeItem("borrow");
    navigate("/login");
  };

  
  const AdminProtected = () => {
    const isAdmin = localStorage.getItem("adminLogin") === "true";
    return isAdmin ? <Outlet /> : <Navigate to="/admin-login" replace />;
  };

  // User protected route
  const UserProtected = () => {
    const isUser = localStorage.getItem("userLogin") === "true";
    return isUser ? <Outlet /> : <Navigate to="/login" replace />;
  };

  return (
    <Routes>
      {/* Admin Login */}
      <Route
        path="/admin-login"
        element={
          localStorage.getItem("adminLogin") !== "true" ? (
            <AdminLogin />
          ) : (
            <Navigate to="/admin" replace />
          )
        }
      />

      
      <Route
        path="/login"
        element={
          localStorage.getItem("userLogin") !== "true" ? (
            <UserLogin />
          ) : (
            <Navigate to="/" replace />
          )
        }
      />

      
      <Route
        path="/register"
        element={
          localStorage.getItem("userLogin") !== "true" ? (
            <Register />
          ) : (
            <Navigate to="/" replace />
          )
        }
      />

      
      <Route element={<AdminProtected />}>
        <Route element={<Layout handleLogout={handleAdminLogout} />}>
          <Route
            path="/admin"
            element={<AdminDashboard list={list} borrow={borrow} />}
          />
          <Route
            path="/admin/add-book"
            element={<AddBook book={book} handleSubmit={handleSubmit} />}
          />
          <Route
            path="/admin/view-book"
            element={
              <ViewBook
                list={list}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            }
          />
        </Route>
      </Route>

    
      <Route element={<UserProtected />}>
        <Route element={<UserLayout handleLogout={handleUserLogout} />}>
          <Route
            path="/"
            element={
              <Home
                list={list}
                borrow={borrow}
                handleBorrowedBook={handleBorrowedBook}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/book"
            element={
              <Books
                list={list}
                borrow={borrow}
                handleBorrowedBook={handleBorrowedBook}
              />
            }
          />
          <Route
            path="/my-books"
            element={
              <MyBooks
                borrow={borrow}
                handleBorrowedBook={handleBorrowedBook}
              />
            }
          />
        </Route>
      </Route>

     
      <Route
        path="*"
        element={
          localStorage.getItem("adminLogin") === "true" ? (
            <Navigate to="/admin" replace />
          ) : localStorage.getItem("userLogin") === "true" ? (
            <Navigate to="/" replace />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
    </Routes>
  );
};

export default App;
