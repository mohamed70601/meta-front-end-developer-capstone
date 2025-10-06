import React from "react";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="little-lemon-footer">
      <div className="footer-content-wrapper">
        <div className="footer-logo-section">
          <img
            src={logo}
            alt="Little Lemon Restaurant Logo"
            className="footer-logo-image"
          />
        </div>

        <div className="footer-column navigation">
          <h4 className="column-title">Doormat Navigation</h4>
          <ul className="list-unstyled">
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order online</li>
            <li>Login</li>
          </ul>
        </div>

        <div className="footer-column contact">
          <h4 className="column-title">Contact</h4>
          <ul className="list-unstyled">
            <li>New York</li>
            <li>1-001-100</li>
            <li>limon@email.c</li>
          </ul>
        </div>

        <div className="footer-column social">
          <h4 className="column-title">Social Media Links</h4>
          <ul className="list-unstyled">
            <li>Instagram</li>
            <li>Facebook</li>
            <li>X</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
