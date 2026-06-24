import React from "react";
import logo from "../assets/healthcare.png";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <header className="header">
        <div className="logo-container">
          <img src={logo} alt="HealthCare Clinic Logo" className="logo" />
        </div>
        <h1 className="hospital-name">HealthCare Clinic</h1>
      </header>

      <main className="content">{children}</main>

      <footer className="footer">
        <div className="footer-content">
          <p className="footer-copyright">© 2025 HealthCare Clinic | All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;