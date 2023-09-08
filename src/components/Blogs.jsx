import React, { useState } from "react";
import view from "../assets/images/view.svg";
import like from "../assets/images/like.svg";
import BlogForm from "./BlogForm";

const Blogs = () => {
  const [blogForm, setBlogForm] = useState(false);
  return (
    <>
      <div className="blogs ideas">
        <h2>Review Some of the Best Blogs</h2>
        <div className="ideasDiv blogsDiv">
          {Array.from({ length: 12 }, (_, index) => (
            <div className="idea blog" key={index}>
              <h3>Heading</h3>
              <h4>(By: Aman)</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Reiciendis adipisci officia ex blanditiis impedit ad, autem cum
                cupiditate quaerat tenetur praesentium necessitatibus magnam
                numquam nesciunt vero similique soluta perferendis officiis rem
                totam temporibus. Libero fuga nostrum cum dicta in eum. Fugiat
                veniam mollitia nostrum numquam recusandae unde similique error
                laudantium.
                <br />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
                excepturi veniam similique vel. Sed tempore facilis ut
                praesentium fugiat necessitatibus quasi unde hic. Possimus
                voluptatibus, qui error, earum in quia fuga non ex a ab, quos
                pariatur maiores excepturi est quibusdam eaque eum. Facere,
                enim. Totam assumenda rerum non vel. Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Reiciendis adipisci officia ex
                blanditiis impedit ad, autem cum cupiditate quaerat tenetur
                praesentium necessitatibus magnam numquam nesciunt vero
                similique soluta perferendis officiis rem totam temporibus.
                Libero fuga nostrum cum dicta in eum. Fugiat veniam mollitia
                nostrum numquam recusandae unde similique error laudantium.
                <br />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
                excepturi veniam similique vel. Sed tempore facilis ut
                praesentium fugiat necessitatibus quasi unde hic. Possimus
                voluptatibus, qui error, earum in quia fuga non ex a ab, quos
                pariatur maiores excepturi est quibusdam eaque eum. Facere,
                enim. Totam assumenda rerum non vel.
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
        <div className="addIcon" onClick={() => setBlogForm(true)}>
          <span>+</span>
        </div>
      </div>
      {blogForm && <BlogForm view={setBlogForm} />}
    </>
  );
};

export default Blogs;
