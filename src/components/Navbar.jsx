import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Navbar = ({ page, setPage, setLoader, setHomeTab }) => {
  const handleLinkClick = (tabName) => {
    setHomeTab(tabName);
    setPage(tabName);
  };
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
        mitr
      </div>
      <div className="menu">
        <ul>
          <li className={page === "home" ? "active" : ""}>
            <a
              href="#"
              onClick={() => handleLinkClick("home")}
            >
              Home
            </a>
          </li>
          <li className={page === "ideas" ? "active" : ""}>
            <a
              href="#"
              onClick={() => handleLinkClick("ideas")}
            >
              Ideas
            </a>
          </li>
          <li>
            <a href="#">Community</a>
          </li>
          <li className={page === "blogs" ? "active" : ""}>
            <a
              href="#"
              onClick={() => handleLinkClick("blogs")}
            >
              Blogs
            </a>
          </li>
          <li className={page === "about" ? "active" : ""}>
            <a href="#">About</a>
          </li>
          <li className={page === "faq" ? "active" : ""}>
            <a href="#">FAQ</a>
          </li>
        </ul>
      </div>
      <div className="signin">
        <Link onClick={() => setLoader(true)} to="/login">
          Sign In
        </Link>
        <Link onClick={() => setLoader(true)} to="/signup">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
