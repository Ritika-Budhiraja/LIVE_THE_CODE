import React from "react";
import logo from "../assets/images/logo.png";

const DashboardMain = ({tab}) => {
  return (
    <div className="dashboard-main">
      <div className="welcome">
        <img src={logo} alt="" />
        <h1>Welcome to the Mitr!</h1>
      </div>
      <div className="suggestionBox">
        <h2>What's on your mind?</h2>
        <div className="suggestions">
          <p onClick={()=>tab("ideas")}>Review Ideas</p>
          <p onClick={()=>tab("ideas")}>Upload Your Idea</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
