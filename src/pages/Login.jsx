import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = ({setLoader}) => {
  const navigate = useNavigate();
  const [err, setErr] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    setLoader(true);
    navigate("/dashboard");
  };

  setLoader(false);

  return (
    <>
      <div className="login-div">
        <div className="login">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
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
          {err && (
            <span className="errorMsg">Incorrect Email or Password!</span>
          )}
          <div className="already">
            <p>
              Don't have an account? <Link onClick={()=>setLoader(true)} to="/signup">Register</Link>
            </p>
          </div>
        </div>
      </div>

      <div className="colorSVG"></div>
      <div className="colorSVG2 colorSVG2-login"></div>
    </>
  );
};

export default Login;
