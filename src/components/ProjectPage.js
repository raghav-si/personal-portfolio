
import React from "react";
import "./ProjectPage.css";

const ProjectPage = () => {
  return (
    <div className="project-container">
      <div className="project-header">
        <span>pro</span>jects
      </div>
      <div className="project-list">
        <div className="project">
          <p>E-commerce</p>
          <p>Site</p>
          <p>
            <span>2023</span>
            <a href="https://e-commercee-react.netlify.app/">
              Tap to view
            </a>
          </p>
        </div>
        <div className="project">
          <p>Netflix</p>
          <p>Clone</p>
          <p>
            <span>2023</span>
            <a href="https://github.com/raghav-si/netflix-clone">
              Tap to view
            </a>
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default ProjectPage;
