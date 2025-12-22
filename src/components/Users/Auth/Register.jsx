import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
    city: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Full Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.password) newErrors.password = "Password is required";
    else if (form.password.length < 8) newErrors.password = "Password must be at least 8 characters";
    if (!form.mobile) newErrors.mobile = "Mobile number is required";
    if (!form.city.trim()) newErrors.city = "City is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    let users = JSON.parse(localStorage.getItem("userData")) || [];
    if (!Array.isArray(users)) users = [users];
    users.push(form);
    localStorage.setItem("userData", JSON.stringify(users));
    alert("User Registered Successfully!");
    navigate("/login");
  };

  return (
    <div className="register-wrapper d-flex align-items-center justify-content-center min-vh-100" style={{ background: "#f1f5f9" }}>
      <div className="register-card shadow-lg p-5 rounded-4 bg-white" style={{ maxWidth: "450px", width: "100%" }}>
        <h2 className="text-center fw-bold mb-4" style={{ color: "#193A64" }}>Create Account</h2>
        <form onSubmit={handleSubmit} noValidate>
          
          <div className="form-floating mb-3">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              placeholder="Full Name"
            />
            <label>Full Name</label>
            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
          </div>

       
          <div className="form-floating mb-3">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              placeholder="Email"
            />
            <label>Email</label>
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>

          
          <div className="form-floating mb-3">
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              placeholder="Password"
            />
            <label>Password</label>
            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
          </div>

         
          <div className="form-floating mb-3">
            <input
              type="number"
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              className={`form-control ${errors.mobile ? "is-invalid" : ""}`}
              placeholder="Mobile Number"
            />
            <label>Mobile Number</label>
            {errors.mobile && <div className="invalid-feedback">{errors.mobile}</div>}
          </div>

          
          <div className="form-floating mb-4">
            <input
              type="text"
              name="city"
              value={form.city}
              onChange={handleChange}
              className={`form-control ${errors.city ? "is-invalid" : ""}`}
              placeholder="City"
            />
            <label>City</label>
            {errors.city && <div className="invalid-feedback">{errors.city}</div>}
          </div>

          <button
            type="submit"
            className="btn w-100 py-2"
            style={{
              background: "#193A64",
              border: "none",
              color: "#fff",
              fontWeight: 600,
              fontSize: "18px",
            }}
          >
            Register
          </button>
        </form>

        <p className="text-center mt-3">
          Already have an account? <a href="/login" className="text-decoration-none" style={{ color: "#193A64", fontWeight: 500 }}>Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
