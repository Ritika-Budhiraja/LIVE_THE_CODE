import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Navbar = ({ page }) => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
        mitr
      </div>
      <div className="menu">
        <ul>
          <li className={page === "home" ? "active" : ""}><a href="#">Home</a></li>
          <li>
            <a href="#">About</a>
          </li>
          <li><a href="#">Community</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>
      </div>
      <div className="signin">
        <Link to="/login">Sign In</Link>
        <Link to="/signup">Register</Link>
      </div>
    </div>
  );
};

export default Navbar;
