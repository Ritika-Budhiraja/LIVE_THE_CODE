import React, { useContext, useEffect, useState } from "react";
import view from "../assets/images/view.svg";
import like from "../assets/images/like.svg";
import BlogForm from "./BlogForm";
import { AuthContext } from "../context/AuthContext";
import {
  getAllBlogs,
  updateBlogLike,
  updateBlogViews,
} from "../services/blogs";

const Blogs = () => {
  const [blogForm, setBlogForm] = useState(false);
  const { currentUser } = useContext(AuthContext);

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

    if (currentUser && currentUser.uid) {
      fetchData(); // Fetch blog data when currentUser is available
    }
  }, [currentUser]); // Run this effect whenever currentUser changes

  // ... (rest of your component code)

  return (
    <>
      <div className="blogs ideas">
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
                    {data.views}{" "}
                    <img
                      src={view}
                      onClick={() => updateBlogViews(docId)}
                      alt="View"
                    />
                  </span>
                  <span className="likeDiv">
                    {data.likes}{" "}
                    <img
                      onClick={() => updateBlogLike(docId)}
                      src={like}
                      alt="Like"
                    />
                  </span>
                </div>
              );
            })}
        </div>
        <div className="addIcon" onClick={() => setBlogForm(true)}>
          <span>+</span>
        </div>
      </div>
      {blogForm && <BlogForm view={setBlogForm} />}
    </>
  );
};

export default Blogs;
