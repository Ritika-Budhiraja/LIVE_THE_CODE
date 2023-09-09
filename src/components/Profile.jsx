import React, { useContext, useEffect, useState } from "react";
import avatar from "../assets/images/avatar.png";
import like from "../assets/images/like.svg";
import view from "../assets/images/view.svg";
import { getBlogsByUid } from "../services/blogs";
import { AuthContext } from "../context/AuthContext";
import { getideasByUid } from "../services/ideas";

const Profile = ({ userData }) => {
  const [blogData, setBlogData] = useState([]);
  const [ideasData, setIdeasData] = useState([]);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        getBlogsByUid(currentUser.uid, (error, data) => {
          if (error) {
            console.error("Blog Fetching Error:\n", error);
          } else {
            setBlogData(data); // Set the blog data in state
            console.log("Blog Data:\n", data);
          }
        });
      } catch (error) {
        console.error("Error calling getBlogsByUid:", error);
      }
    };

    if (currentUser && currentUser.uid) {
      fetchData();
    }
  }, [currentUser]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        getideasByUid(currentUser.uid, (error, data) => {
          if (error) {
            console.error("Ideas Fetching Error:\n", error);
          } else {
            setIdeasData(data); // Set the ideas data in state
            console.log("Ideas Data:\n", data);
          }
        });
      } catch (error) {
        console.error("Error calling getideasByUid:", error);
      }
    };

    if (currentUser && currentUser.uid) {
      fetchData();
    }
  }, [currentUser]);

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
              {ideasData.map((idea, index) => (
                <div className="idea" key={index}>
                  <p>{idea.title}</p>
                  <p>{idea.body}</p>
                  <span className="viewDiv">
                    {idea.views} <img src={view} alt="View" />
                  </span>
                  <span className="likeDiv">
                    {idea.likes} <img src={like} alt="Like" />
                  </span>
                </div>
              ))}
            </div>
            <h3>Featured Blogs:</h3>
            <div className="profileIdeasDiv profileBlogsDiv">
              {blogData.map((data, index) => (
                <div className="idea" key={index}>
                  <p>{data.title}</p>
                  <p>{data.body}</p>
                  <span className="viewDiv">
                    {data.views} <img src={view} alt="View" />
                  </span>
                  <span className="likeDiv">
                    {data.likes} <img src={like} alt="Like" />
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
