import React, { useState } from "react";
import Navbar from "../components/Navbar";
import home from "../assets/images/home.svg";
import { Link } from "react-router-dom";
import setting from "../assets/images/setting.svg";
import arrow from "../assets/images/arrow.svg";
import about1 from "../assets/images/about1.svg";
import about2 from "../assets/images/about2.svg";
import about3 from "../assets/images/about3.svg";
import IdeasHome from "../components/IdeasHome";
import BlogsHome from "../components/BlogsHome";
import Footer from "../components/Footer";

const Home = ({ setLoader }) => {
  const [homeTab, setHomeTab] = useState("home");
  const [page, setPage] = useState("home");
  return (
    <>
      <Navbar setPage={setPage} page={page} setLoader={setLoader} setHomeTab={setHomeTab} />
      {homeTab === "home" && (
        <div className="home">
          <div className="headerDiv">
            <div className="header">
              <div className="leftheader">
                <h1>
                  Build Your
                  <br />
                  <span>Business</span> <p>With Us...</p>
                </h1>
                <Link onClick={() => setLoader(true)} to="/login">
                  Boost Your Idea!
                </Link>
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
          <div className="aboutDiv" id="about">
            <h1>About Us</h1>
            <div className="about">
              <div className="about-element">
                <h2>About</h2>
                <img src={about1} alt="" />
                <p>
                  Offer educational resources, guides, and tutorials for both project creators. This can help newcomers understand how crowdfunding works and how to create successful campaigns.
                </p>
              </div>
              <div className="about-element">
                <h2>About</h2>
                <img src={about2} alt="" />
                <p>
                Define a clear and compelling UVP (Unique Value Proposition ) that sets your startup apart from competitors..

                </p>
              </div>
              <div className="about-element">
                <h2>About</h2>
                <img src={about3} alt="" />
                <p>
                Assemble a talented and diverse team with the skills necessary to execute your vision.. Define roles and responsibilities clearly to ensure efficient operations.
                </p>
              </div>
            </div>
          </div>
          <div className="faqDiv" id="faq">
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
      )}
      {homeTab === "ideas" && <IdeasHome />}
      {homeTab === "blogs" && <BlogsHome />}

      <Footer />
      <div className="colorSVG"></div>
      <div className="colorSVG2"></div>
    </>
  );
};

export default Home;
