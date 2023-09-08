import React, { useState } from "react";
import logo from "../assets/images/logo.png";

const BlogForm = ({ view }) => {
  const [image, setImage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

  };
  function handleFileSelect(event) {
    const fileInput = event.target;

    if (fileInput.files && fileInput.files.length > 0) {
      setImage(true)
    } else {
      setImage(false);
    }
  }
  return (
    <div className="ideaFormDiv blogFormDiv">
      <div className="login ideaForm blogForm">
      <img src={logo} alt="" />
        <p className="backBtn" onClick={() => view(false)}>
          ← Back
        </p>
        <h2>Write Your Blog!</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              placeholder="Topic"
              className="input-field"
              type="text"
              required
            />
            <label htmlFor="input-field" className="input-label">
              Topic
            </label>
            <span className="input-highlight"></span>
          </div>
          <div className="input-container">
            <input
              type="text"
              className="input-field"
              placeholder="Fields"
              required
            />
            <label htmlFor="input-field" className="input-label">
              Fields
            </label>
            <span className="input-highlight"></span>
          </div>
          <div className="input-container">
            <input
              type="text"
              className="input-field"
              placeholder="Content"
              required
            />
            <label htmlFor="input-field" className="input-label">
              Content
            </label>
            <span className="input-highlight"></span>
          </div>
          <div className="input-container-image">
            <input
              type="file"
              id="input-field-image"
              className="input-field-image"
              accept="image/"
              style={{ display: "none" }}
              onChange={handleFileSelect}
              required
            />
            {image ? (
              <label htmlFor="input-field-image" className="input-label-image">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                </svg>
                Featured Image Added!
              </label>
            ) : (
              <label htmlFor="input-field-image" className="input-label-image">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                >
                  <path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
                </svg>
                Add Featured Image
              </label>
            )}
          </div>
          <button>Submit</button>
        </form>
        {/* {err && <span className="errorMsg">Incorrect Email or Password!</span>} */}
      </div>
    </div>
  );
};

export default BlogForm;
