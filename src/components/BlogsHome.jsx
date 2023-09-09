import React, { useEffect, useState } from "react";
import { getAllBlogs } from "../services/blogs";
import like from "../assets/images/like.svg";
import view from "../assets/images/view.svg";

const BlogsHome = () => {
  const [blogData, setBlogData] = useState([]); // [ { blog1 }, { blog2 }, { blog3 }

  useEffect(() => {
    const fetchData = async () => {
      try {
        getAllBlogs((error, data) => {
          if (error) {
            console.error("Error fetching blogs:", error);
          } else {
            setBlogData(data); // Set the blog data in state
            console.log("Blog Data:", data);
          }
        });
      } catch (error) {
        console.error("Error calling getAllBlogs:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="blogs ideas ideasHome">
      <h2>Review Some of the Best Blogs</h2>
      <div className="ideasDiv blogsDiv">
        {blogData.docs &&
          blogData.docs.map((doc, index) => {
            const data = doc.data(); // Extract the data from the document
            const docId = doc.id; // Get the document ID

            return (
              <div className="idea blog" key={docId}>
                <h3>{data.title}</h3>
                <h4>(By: {data.user_name})</h4>
                <p>{data.body}</p>
                <span className="viewDiv">
                  {data.views} <img src={view} alt="View" />
                </span>
                <span className="likeDiv">
                  {data.likes} <img src={like} alt="Like" />
                </span>
              </div>
            );
          })}
      </div>
      
    </div>
  );
};

export default BlogsHome;
