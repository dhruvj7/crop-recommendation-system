import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-branch">
          <span className="collabTitle">Our Collaborators</span>
          <div className="collabList">
            {/* <img src="../public/assets/logo-1.jpeg" alt="" height="50" width="80"/> */}
            <img src="../public/assets/logo-2.jpeg" alt="" height="55" width="180"/>
            <img src="../public/assets/logo-3.png" alt="" height="55" width="180"/>
          </div>
      </div>
      <div className="footer-branch">
        <div className="subscribe">
          <span className="newsTitle">For any queries:</span>
          <input
            className="emailField"
            type="email"
            placeholder="Enter your email"
            maxlength="30"
          />
        </div>
      </div>
      <div className="footer-branch">
        <span className="quickTitle">Quick Links</span>
        <Link to="/">Home</Link>
        <Link to="/about">About us</Link>
        <Link to="/contact">Contact us</Link>
      </div>
    </div>
  );
}

export default Footer;
