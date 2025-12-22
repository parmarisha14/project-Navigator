import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div>
      <footer class="footer">
  <div class="container">
    <div class="footer-top">
      <div class="footer-about">
        <h4>Library</h4>
        <p>Explore and borrow your favorite books from our collection. Knowledge is just a click away!</p>
      </div>
      <div class="footer-links">
        <h5>Quick Links</h5>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Books</a></li>
          <li><a href="#">Categories</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
      <div class="footer-contact">
        <h5>Contact</h5>
        <p>Email: info@library.com</p>
        <p>Phone: +91 1234567890</p>
        <p>Address: 123 Library Street, India</p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2025 Library. All rights reserved.</p>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer
