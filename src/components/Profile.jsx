import React, { useContext, useEffect, useState } from "react";
import avatar from "../assets/images/avatar.png";
import like from "../assets/images/like.svg";
import view from "../assets/images/view.svg";
import { AuthContext } from "../context/AuthContext";
import { db } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";

const Profile = () => {
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

          userData.age= calculateAge(userData.dob);

          setUserData(userData); // Set the user data in state
        } else {
          console.log("User not found");
        }
      } catch (error) {
        console.error("Error getting user data:", error);
        // Handle the error appropriately
      }
    }

    if (currentUser) {
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

  return (
    <div className="profileDiv">
      <h1>Your Profile</h1>
      <div className="profileContainer">
        <div className="leftProfileContainer">
          <img src={avatar} alt="" />
        </div>
        <div className="rightProfileContainer">
          <div className="profileInfo">
            <h3>Personal Info:</h3>
            <p>
              Name: <span>{userData.name}</span>
            </p>
            <p>
              Age: <span>{userData.age}</span>
            </p>
            <p>
              Email: <span>{userData.email}</span>
            </p>
            <p>
              Gender: <span>{userData.gender}</span>
            </p>
            <p>
              Date of Birth: <span>{userData.dob}</span>
            </p>
            <h3>Education Qualifications:</h3>
            <p>
              Qualification: <span>{userData.qualification}</span>
            </p>
            <h3>Featured Ideas:</h3>
            <div className="profileIdeasDiv">
              {Array.from({ length: 3 }, (_, index) => (
                <div className="idea" key={index}>
                  <p>Heading</p>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Odio, officia?
                  </p>
                  <span className="viewDiv">
                    10 <img src={view} alt="" />
                  </span>
                  <span className="likeDiv">
                    10 <img src={like} alt="" />
                  </span>
                </div>
              ))}
            </div>
            <h3>Featured Blogs:</h3>
            <div className="profileIdeasDiv profileBlogsDiv">
              {Array.from({ length: 3 }, (_, index) => (
                <div className="idea blog" key={index}>
                  <p>Heading</p>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Odio, officia?
                  </p>
                  <span className="viewDiv">
                    10 <img src={view} alt="" />
                  </span>
                  <span className="likeDiv">
                    10 <img src={like} alt="" />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
