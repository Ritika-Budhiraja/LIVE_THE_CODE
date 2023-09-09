import React, { useContext, useEffect, useState } from "react";
import IdeaForm from "./IdeaForm";
import like from "../assets/images/like.svg";
import view from "../assets/images/view.svg";
import {
  getAllideas,
  updateBlogLike,
  updateBlogViews,
} from "../services/ideas";
import { AuthContext } from "../context/AuthContext";

const Ideas = () => {
  const [ideaForm, setIdeaForm] = useState(false);
  const [ideasData, setIdeasData] = useState([]);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        getAllideas((error, data) => {
          if (error) {
            console.error("Error fetching blogs:", error);
          } else {
            setIdeasData(data); // Set the blog data in state
            console.log("Idea Data:", data);
            data.forEach((doc) => {
              console.log(doc.data());
            });
          }
        });
      } catch (error) {
        console.error("Error calling getAllBlogs:", error);
      }
    };

    if (currentUser && currentUser.uid) {
      fetchData(); // Fetch blog data when currentUser is available
    }
  }, [currentUser]);

  return (
    <>
      <div className="ideas">
        <h2>Review Some of the Best Ideas</h2>
        <div className="ideasDiv">
          {ideasData.docs &&
            ideasData.docs.map((idea, index) => {
              const ideaData = idea.data();
              const ideaId = idea.id;

              return (
                <div className="idea" key={ideaId}>
                  <p>{ideaData.title}</p>
                  <p>{ideaData.body}</p>
                  <span className="viewDiv">
                    {ideaData.views}{" "}
                    <img
                      onClick={() => updateBlogViews(ideaId)} // Update the view count for the idea
                      src={view}
                      alt="View"
                    />
                  </span>
                  <span className="likeDiv">
                    {ideaData.likes}{" "}
                    <img
                      onClick={() => updateBlogLike(ideaId)} // Update the like count for the idea
                      src={like}
                      alt="Like"
                    />
                  </span>
                </div>
              );
            })}
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
