import React, { useState } from "react";
import IdeaForm from "./IdeaForm";
import like from "../assets/images/like.svg";
import view from "../assets/images/view.svg";

const Ideas = () => {
  const [ideaForm, setIdeaForm] = useState(false);
  return (
    <>
      <div className="ideas">
        <h2>Review Some of the Best Ideas</h2>
        <div className="ideasDiv">
          {Array.from({ length: 12 }, (_, index) => (
            <div className="idea" key={index}>
              <p>Heading</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
                voluptatibus?
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
        <div className="addIcon" onClick={() => setIdeaForm(true)}>
          <span>+</span>
        </div>
      </div>
      {ideaForm && <IdeaForm view={setIdeaForm} />}
    </>
  );
};

export default Ideas;
