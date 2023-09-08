import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Navbar = ({ page, setLoader }) => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
        mitr
      </div>
      <div className="menu">
        <ul>
          <li className={page === "home" ? "active" : ""}>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Ideas</a>
          </li>
          <li>
            <a href="#">Community</a>
          </li>
          <li>
            <a href="#">Blogs</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
          
        </ul>
      </div>
      <div className="signin">
        <Link onClick={()=>setLoader(true)} to="/login">Sign In</Link>
        <Link onClick={()=>setLoader(true)} to="/signup">Register</Link>
      </div>
    </div>
  );
};

export default Navbar;
