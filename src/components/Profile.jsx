import React from "react";
import avatar from "../assets/images/avatar.png";
import like from "../assets/images/like.svg";
import view from "../assets/images/view.svg";

const Profile = () => {
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
              Name: <span>Object</span>
            </p>
            <p>
              Age: <span>Object</span>
            </p>
            <p>
              Gender: <span>Object</span>
            </p>
            <h3>Education Qualifications:</h3>
            <p>
              Name: <span>Object</span>
            </p>
            <p>
              Name: <span>Object</span>
            </p>
            <p>
              Name: <span>Object</span>
            </p>
            <p>
              Name: <span>Object</span>
            </p>
            <h3>Featured Ideas:</h3>
            <div className="profileIdeasDiv">
              {Array.from({ length: 3 }, (_, index) => (
                <div className="idea" key={index}>
                  <p>Heading</p>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, officia?</p>
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
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, officia?</p>
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
