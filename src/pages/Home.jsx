import React from "react";
import Navbar from "../components/Navbar";
import home from "../assets/images/home.svg";
import { Link } from "react-router-dom";
import setting from "../assets/images/setting.svg";
import arrow from "../assets/images/arrow.svg";
import about1 from "../assets/images/about1.svg";

const Home = () => {
  return (
    <>
      <Navbar page={"home"} />
      <div className="home">
        <div className="headerDiv">
          <div className="header">
            <div className="leftheader">
              <h1>
                Build Your
                <br />
                <span>Business</span> <p>With Us...</p>
              </h1>
              <Link to="/login">Boost Your Idea!</Link>
            </div>
            <div className="rightheader">
              <img src={home} alt="" />
            </div>
            <div className="settingSVG">
              <img src={setting} alt="" />
            </div>
            <div className="arrowSVG">
              <img src={arrow} alt="" />
            </div>
          </div>
        </div>
        <div className="aboutDiv">
          <h1>About Us</h1>
          <div className="about">
            <div className="about-element">
              <h2>About</h2>
              <img src={about1} alt="" />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
                facilis aliquid nulla obcaecati numquam quas quaerat non ea?
                Porro, dolorum?
              </p>
            </div>
            <div className="about-element">
              <h2>About</h2>
              <img src={about1} alt="" />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
                facilis aliquid nulla obcaecati numquam quas quaerat non ea?
                Porro, dolorum?
              </p>
            </div>
            <div className="about-element">
              <h2>About</h2>
              <img src={about1} alt="" />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
                facilis aliquid nulla obcaecati numquam quas quaerat non ea?
                Porro, dolorum?
              </p>
            </div>
          </div>
        </div>
        <div className="faqDiv">
          <h1>Frequently Asked Questions</h1>
          <div className="faq">
            <div className="faq-element">
              <h2>What is Mitr?</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                exercitationem? Quae eum et neque eligendi debitis accusantium
                laborum quasi. Explicabo!
              </p>
            </div>
            <div className="faq-element">
              <h2>What is Mitr?</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                exercitationem? Quae eum et neque eligendi debitis accusantium
                laborum quasi. Explicabo!
              </p>
            </div>
            <div className="faq-element">
              <h2>What is Mitr?</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                exercitationem? Quae eum et neque eligendi debitis accusantium
                laborum quasi. Explicabo!
              </p>
            </div>
          </div>
        </div>
      </div>
        <div className="colorSVG">
        </div>
        <div className="colorSVG2"></div>
    </>
  );
};

export default Home;
