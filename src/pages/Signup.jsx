import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const handleSubmit = (e) => {};

  return (
    <>
      <div className="login-div">
        <div className="registera login">
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <input
                placeholder="Display Name"
                className="input-field"
                type="text"
                required
              />
              <label htmlFor="input-field" className="input-label">
                Display Name
              </label>
              <span className="input-highlight"></span>
            </div>
            <div className="input-container">
              <input
                placeholder="Email"
                className="input-field"
                type="email"
                required
              />
              <label htmlFor="input-field" className="input-label">
                Email
              </label>
              <span className="input-highlight"></span>
            </div>
            <div className="input-container">
              <input
                type="password"
                className="input-field"
                placeholder="Password"
                required
              />
              <label htmlFor="input-field" className="input-label">
                Password
              </label>
              <span className="input-highlight"></span>
            </div>
            <button>Submit</button>
          </form>

          <div className="already">
            <p>
              Don't have an account? <Link to="/login">Login</Link>
            </p>
          </div>

          {/* {done && <span style={{color: "green"}} className="taskMsg">Credentials Created!!!</span>}
      {err && <span style={{color: "red"}} className="taskMsg">{err}</span>} */}
        </div>
      </div>
      <div className="colorSVG"></div>
      <div className="colorSVG2 colorSVG2-login"></div>
    </>
  );
};

export default Signup;
