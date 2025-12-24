import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import logo from "../../../assets/images/logo1.png";
import "./Login.css";

const Login = ({ setIsLoggedIn, setRole }) => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    let users = JSON.parse(localStorage.getItem("userData")) || [];
    if (!Array.isArray(users)) users = [users];

    const matchedUser = users.find(u => u.email === formData.email && u.password === formData.password);
    if (matchedUser) {
      localStorage.setItem("userLogin", true);
      localStorage.setItem("userRole", "user");
      localStorage.setItem("currentUser", JSON.stringify(matchedUser));
      setIsLoggedIn(true);
      setRole("user");
      navigate("/");
      return;
    }
    alert("Invalid User Email or Password!");
  };

  return (
    <div className="login-wrapper d-flex align-items-center justify-content-center">
      <div className="login-card shadow p-4 bg-white rounded">
        <div className="text-center mb-4">
          <img src={logo} width="60" alt="logo" />
          <h3 className="mt-2 fw-bold">User Login</h3>
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
              placeholder="example@gmail.com"
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
              placeholder="Enter  Passwords"
             
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

          <button type="submit" className="login-btn w-100 py-2">Sign In</button>

         <p className="text-center mt-3">
  Don't have an account?{" "}
  <span
    onClick={() => navigate("/register")}
    style={{ color: "#0d6efd", cursor: "pointer", fontWeight: "500" }}
  >
    Register
  </span>
  <br />
  Are you Admin?{" "}
  <span
    onClick={() => navigate("/admin-login")}
    style={{ color: "#0d6efd", cursor: "pointer", fontWeight: "500" }}
  >
    Click here to login as Admin
  </span>
</p>

        </form>
      </div>
    </div>
  );
};

export default Login;
