import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "", mobile: "", city: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    let users = JSON.parse(localStorage.getItem("userData")) || [];
    if (!Array.isArray(users)) users = [users];
    users.push(form);
    localStorage.setItem("userData", JSON.stringify(users));
    alert("User Registered Successfully!");
    navigate("/login");
  };

  return (
    <div className="login-wrapper d-flex align-items-center justify-content-center">
      <div className="login-card shadow p-4 bg-white rounded">
        <h3 className="fw-bold text-center mb-2">Create Account</h3>
        <p className="text-center text-muted mb-4">Register to Continue</p>

        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Full Name" required onChange={handleChange} className="form-control mb-3" />
          <input type="email" name="email" placeholder="Email" required onChange={handleChange} className="form-control mb-3" />
          <input type="password" name="password" placeholder="Password" required minLength={8} onChange={handleChange} className="form-control mb-3" />
          <input type="number" name="mobile" placeholder="Mobile No." required onChange={handleChange} className="form-control mb-3" />
          <input type="text" name="city" placeholder="City" required onChange={handleChange} className="form-control mb-4" />

          <button className="btn btn-primary w-100 py-2" type="submit">Register</button>
          <p className="text-center mt-3">Already have an account? <a href="/login">Login</a></p>
        </form>
      </div>
    </div>
  );
};

export default Register;
