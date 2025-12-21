import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaTelegramPlane,
} from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="contact-card p-4">
              <h3
                className="text-center  fw-bold mb-3"
                style={{ color: "#23739C" }}
              >
                Contact Information
              </h3>

              <p className="text-center mb-4">
                We would love to hear from you! Reach out with any questions,
                feedback, or orders.
              </p>

              <div className="d-flex align-items-center gap-3 mb-3">
                <FaMapMarkerAlt className="contact-icon" />
                <span>Navsari Municipal Corporation, Navsari</span>
              </div>

              <div className="d-flex align-items-center gap-3 mb-3">
                <FaPhoneAlt className="contact-icon" />
                <span>+91 98765 43210</span>
              </div>

              <div className="d-flex align-items-center gap-3 mb-3">
                <FaEnvelope className="contact-icon" />
                <span>naturedrop@gmail.com</span>
              </div>

              <div className="d-flex align-items-center gap-3 mb-3">
                <FaClock className="contact-icon" />
                <span>Mon - Sat: 9 AM - 6 PM</span>
              </div>
            </div>
          </div>

          
          <div className="col-lg-6">
            <div className="contact-card p-4">
              <h3 className="text-center contact-title fw-bold mb-4">
                Send Your Message
              </h3>

              <div className="row g-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Mobile"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                  />
                </div>
                <div className="col-12">
                  <textarea
                    className="form-control"
                    placeholder="Leave a message here"
                    rows="4"
                  ></textarea>
                </div>
                <div className="col-12">
                  <button className="btn contact-btn w-100 py-2 fw-bold">
                    Send Message <FaTelegramPlane className="ms-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
