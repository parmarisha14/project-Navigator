import React from "react";
import "./AboutUs.css";
import libraryImage from "../../../assets/images/about.avif"; 
import librarianImage from "../../../assets/images/person.jpg";

function About() {
  return (
    <>
     
      <section className="about-section">
        <div className="about-container">
          <div className="about-image-wrapper">
            <span className="about-badge">Since 2010</span>
            <img
              src={libraryImage}
              alt="Library Management"
              className="about-image"
            />
          </div>

          <div className="about-content">
            <h4 className="about-subtitle">About Our System</h4>
            <h2 className="about-title">We Simplify Library & Resource Management</h2>
            <p className="about-text">
              Our digital Library Management System helps institutes manage books, 
              automate operations, and provide smarter access to learning materials.
              From cataloging to issuing, everything is handled seamlessly.
            </p>

            <div className="about-features">
              <div className="feature-box">
                <div className="feature-icon"></div>
                <div>
                  <h5 className="feature-title">Smart Cataloging</h5>
                  <p className="feature-desc">
                    Search and find books in seconds using categorized listings.
                  </p>
                </div>
              </div>

              <div className="feature-box">
                <div className="feature-icon"></div>
                <div>
                  <h5 className="feature-title">Automated Alerts</h5>
                  <p className="feature-desc">
                    Late return reminders & due alerts remove manual follow-ups.
                  </p>
                </div>
              </div>
            </div>

            <button className="about-btn">Learn More</button>
          </div>
        </div>
      </section>

      
      <section className="story-section">
        <div className="story-container">
          <div className="story-content">
            <h4 className="story-subtitle">Our Story</h4>
            <h2 className="story-title">Transforming Reading Experiences</h2>

            <p className="story-text">
              We began our journey in 2010 with a simple mission — make libraries smarter 
              and more accessible for students, teachers, and institutions.
            </p>
            <p className="story-text">
              Today, our LMS serves multiple educational environments with 
              seamless book management, analytics, and a paperless approach — improving learning efficiency.
            </p>
          </div>

          <div className="story-image-wrapper">
            <img
              src={librarianImage}
              alt="Library Story"
              className="story-image"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
