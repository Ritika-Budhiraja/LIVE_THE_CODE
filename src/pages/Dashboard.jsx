import React, { useContext, useEffect, useState } from "react";
import DashboardMain from "../components/DashboardMain";
import Ideas from "../components/Ideas";
import { useNavigate } from "react-router-dom";
import Blogs from "../components/Blogs";
import Profile from "../components/Profile";
import avatar from "../assets/images/avatar.png";
import { getAuth, signOut } from "firebase/auth";
import app, { db } from "../config/firebase";
import { AuthContext } from "../context/AuthContext";
import { doc, getDoc } from "firebase/firestore";

const Dashboard = ({ setLoader }) => {
  const [tab, setTab] = useState("home");
  const navigate = useNavigate();

  const { currentUser } = useContext(AuthContext);

  const [userData, setUserData] = useState([]); // Use useState to store user data

  useEffect(() => {
    async function getUserData(uid) {
      try {
        const userRef = doc(db, "users", uid); // 'users' is the Firestore collection where user data is stored
        const userDoc = await getDoc(userRef);

        if (userDoc.exists()) {
          // Access user data here
          const userData = userDoc.data();

          userData.age = calculateAge(userData.dob);
          userData.name = capitalizeWords(userData.name);

          setUserData(userData); // Set the user data in state
        } else {
          console.log("User not found");
        }
      } catch (error) {
        console.error("Error getting user data:", error);
        // Handle the error appropriately
      }
    }

    if (currentUser && currentUser.uid) {
      getUserData(currentUser.uid); // Call the function with the UID when currentUser is available
    }
  }, [currentUser]); // Include currentUser as a dependency

  function calculateAge(dateOfBirth) {
    const dob = new Date(dateOfBirth);
    const currentDate = new Date();

    const yearsDiff = currentDate.getFullYear() - dob.getFullYear();

    // Check if the birthday hasn't occurred yet this year
    if (
      currentDate.getMonth() < dob.getMonth() ||
      (currentDate.getMonth() === dob.getMonth() &&
        currentDate.getDate() < dob.getDate())
    ) {
      return yearsDiff - 1; // Subtract 1 year if the birthday hasn't occurred yet
    }

    return yearsDiff;
  }

  function capitalizeWords(str) {
    return str
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  useEffect(() => {
    setLoader(false);
    // eslint-disable-next-line
  }, []);

  const handleLogOut = () => {
    signOut(getAuth(app));
    navigate("/login");
  };
  return (
    <>
      <div className="dashboard">
        <div className="sidebar">
          <div className="sidebar-header">
            <div className="profile">
              <div className="avatar">
                <img src={avatar} alt="" />
              </div>
              <div className="name">{userData.name}</div>
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
        {tab === "ideas" && <Ideas  />}
        {tab === "blog" && <Blogs />}
        {tab === "profile" && <Profile userData={userData} />}
      </div>
      <div className="colorSVG"></div>
      <div className="colorSVG2 colorSVG2-login"></div>
    </>
  );
};

export default Dashboard;
