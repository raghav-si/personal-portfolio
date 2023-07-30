import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import "./EducationPage.css";

const EducationPage = () => {
  return (
    <div className="education-container">
      <div className="education-header">
        <p>experience</p>
        <p>
          <span>&</span>education
        </p>
      </div>
      <div className="education-list">
        <div className="education">
          <p>Programmer Analyst Trainee</p>
          <p>Cognizant Technology Solutions</p>
          <p>
            <span>Feb 2022 - August 2022</span>
            <a href="/">
              <LocationOnIcon />
              Gurugram, India
            </a>
          </p>
        </div>
        <div className="education">
          <p>UnderGrad</p>
          <p>Ajay Kumar Garg Engineering College</p>
          <p>
            <span>July'18 - Aug'2022</span>
            <a href="/">
              <LocationOnIcon />
              Ghaziabad, India
            </a>
          </p>
        </div>
        <div className="education">
          <p>Higher Secondaru Education</p>
          <p>Khaitan Public School</p>
          <p>
            
            <a href="/">
              <LocationOnIcon />
              Ghaziabad, India
            </a>
          </p>
        </div>
      
      </div>
    </div>
  );
};

export default EducationPage;
