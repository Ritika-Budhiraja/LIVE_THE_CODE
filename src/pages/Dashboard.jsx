import React, { useState } from "react";
import DashboardMain from "../components/DashboardMain";
import Ideas from "../components/Ideas";
import { useNavigate } from "react-router-dom";
import Blogs from "../components/Blogs";
import Profile from "../components/Profile";
import avatar from "../assets/images/avatar.png";

const Dashboard = ({ setLoader }) => {
  const [tab, setTab] = useState("home");
  const navigate = useNavigate();
  setLoader(false);
  const handleLogOut = () => {
    navigate("/login");
  };
  return (
    <>
      <div className="dashboard">
        <div className="sidebar">
          <div className="sidebar-header">
            <div className="profile">
              <div className="avatar"><img src={avatar} alt="" /></div>
              <div className="name">Aman</div>
            </div>
            <div className="sidebarMenu">
              <p
                className={tab === "home" ? "active" : ""}
                onClick={() => setTab("home")}
              >
                Home
              </p>
              <p
                className={tab === "profile" ? "active" : ""}
                onClick={() => setTab("profile")}
              >
                Profile
              </p>
              <p
                className={tab === "ideas" ? "active" : ""}
                onClick={() => setTab("ideas")}
              >
                Ideas
              </p>
              <p
                className={tab === "blog" ? "active" : ""}
                onClick={() => setTab("blog")}
              >
                Blogs
              </p>
            </div>
            <div className="logout">
              <button onClick={handleLogOut}>Logout</button>
            </div>
          </div>
        </div>

        {tab === "home" && <DashboardMain tab={setTab} />}
        {tab === "ideas" && <Ideas />}
        {tab === "blog" && <Blogs />}
        {tab === "profile" && <Profile />}
      </div>
      <div className="colorSVG"></div>
      <div className="colorSVG2 colorSVG2-login"></div>
    </>
  );
};

export default Dashboard;
