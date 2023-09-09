import React, { useEffect, useState } from "react";
import { getAllideas } from "../services/ideas";
import like from "../assets/images/like.svg";
import view from "../assets/images/view.svg";

const IdeasHome = () => {
  const [ideasData, setIdeasData] = useState([]);

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
    fetchData();
  }, []);

  return (
    <div className="ideas ideasHome">
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
                    
                    src={view}
                    alt="View"
                  />
                </span>
                <span className="likeDiv">
                  {ideaData.likes}{" "}
                  <img
                    
                    src={like}
                    alt="Like"
                  />
                </span>
              </div>
            );
          })}
      </div>
      
    </div>
  );
};

export default IdeasHome;
