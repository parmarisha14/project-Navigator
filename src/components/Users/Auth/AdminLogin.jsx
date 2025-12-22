import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import logo from "../../../assets/images/logo1.png";
import "./Login.css";

const AdminLogin = ({ setIsLoggedIn, setRole }) => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  
  useEffect(() => {
    const isLogged = localStorage.getItem("adminLogin") === "true";
    if (isLogged) {
      if (setIsLoggedIn) setIsLoggedIn(true);
      if (setRole) setRole(localStorage.getItem("adminRole") || "admin");
      navigate("/admin", { replace: true });
    }
  }, [navigate, setIsLoggedIn, setRole]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Admin credentials
    if (formData.email === "admin@gmail.com" && formData.password === "12345678") {
      localStorage.setItem("adminLogin", "true");
      localStorage.setItem("adminRole", "admin");

      if (setIsLoggedIn) setIsLoggedIn(true);
      if (setRole) setRole("admin");

      navigate("/admin", { replace: true });
      return;
    }

    alert("Invalid Admin Email or Password!");
  };

  return (
    <div className="login-wrapper d-flex align-items-center justify-content-center">
      <div className="login-card shadow p-4 bg-white rounded">
        <div className="text-center mb-4">
          <img src={logo} width="60" alt="logo" />
          <h3 className="mt-2 fw-bold">Admin Login</h3>
          <p className="text-muted">Please Sign in to Continue</p>
        </div>

        <form onSubmit={handleSubmit}>
          <label className="form-label fw-semibold">Email</label>
          <div className="input-group mb-3">
            <span className="input-group-text bg-white"><FaEnvelope /></span>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter Emaill"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <label className="form-label fw-semibold">Password</label>
          <div className="input-group mb-3">
            <span className="input-group-text bg-white"><FaLock /></span>
            <input
              type={showPass ? "text" : "password"}
              name="password"
              className="form-control"
              placeholder="Enter Password"
              minLength={8}
              required
              value={formData.password}
              onChange={handleChange}
            />
            <span
              className="input-group-text bg-white"
              style={{ cursor: "pointer" }}
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? <AiFillEyeInvisible /> : <AiFillEye />}
            </span>
          </div>

          <button type="submit" className="login-btn w-100 py-2">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
