import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import register from "../services/register";

const Signup = ({ setLoader }) => {
  useEffect(() => {
    setLoader(false);
  }, []);
  const navigate = useNavigate();
  const [err, setErr] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const number = e.target[3].value;
    const qualification = e.target[4].value;
    const gender = e.target[5].value;
    const dob = e.target[6].value;

    const data = { name, email, password, number, qualification, gender, dob };

    // pass the data
    /*
       data = {
        name: ...
        email: ....
        number: ....
        password: ....
        gender: ....
        dob: ....
        qualification: ....
       }
    */
    register(data, (error, result) => {
      setLoader(true);
      if (error) {
        // error handling
        if (error.message === "Firebase: Error (auth/email-already-in-use).") {
          setErr("Email already in use!!!");
        } else {
          setErr(error.message);
        }
        // console.error("signup error - " + error);
        setLoader(false);
      }

      if (result.code === 1) {
        navigate("/dashboard");
        console.log(result.message);
      }
    });
  };

  return (
    <>
      <div className="login-div">
        <div className="registera login">
          <img src={logo} alt="" onClick={() => navigate("/")} />
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
            <div className="input-container">
              <input
                type="text"
                className="input-field"
                placeholder="Conatct Number"
                required
              />
              <label htmlFor="input-field" className="input-label">
                Contact Number
              </label>
              <span className="input-highlight"></span>
            </div>
            <div className="input-container">
              <input
                type="text"
                className="input-field"
                placeholder="Qualification"
                required
              />
              <label htmlFor="input-field" className="input-label">
                Qualification
              </label>
              <span className="input-highlight"></span>
            </div>
            <div className="input-container">
              <select className="input-field" required>
                <option value="M">M</option>
                <option value="F">F</option>
                <option value="O">O</option>
              </select>
            </div>
            <div className="input-container">
              <input
                type="date"
                className="input-field"
                placeholder="Password"
                required
              />
            </div>
            <button>Submit</button>
          </form>
          {err && (
            <span style={{ color: "red", marginTop: "10px", paddingTop: "10px", display: 'inline-block' }} className="taskMsg">
              {err}
            </span>
          )}

          <div className="already">
            <p>
              Don't have an account?{" "}
              <Link onClick={() => setLoader(true)} to="/login">
                Login
              </Link>
            </p>
          </div>

          {/* {done && <span style={{color: "green"}} className="taskMsg">Credentials Created!!!</span>} */}
        </div>
      </div>
      <div className="colorSVG"></div>
      <div className="colorSVG2 colorSVG2-login"></div>
    </>
  );
};

export default Signup;
