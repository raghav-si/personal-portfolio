import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import "./HomePage.css";
import Navbar from "./Navbar";

const HomePage = () => {
  return (
    <div className="home-page-container">
      <div className="home-page-header">
        <Navbar />
      </div>
      <div className="home-page">
        <div>
          <span>hey,</span>
          <p>
            this is<span> Raghav</span>,
          </p>
        </div>
        <span>a Software  developer.</span>
      </div>
      <div className="home-page-footer">
        <a
          href="https://github.com/raghav-si"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </a>
        <a
          href="www.linkedin.com/in/
          raghaav"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </a>
        
        
      </div>
    </div>
  );
};

export default HomePage;
