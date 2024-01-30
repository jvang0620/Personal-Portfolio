import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="projects">
      <h1> {project.name}</h1>
      <p className="small-font">**Select image below to view application**</p> <br/>

      {/* image */}
      <a href={project.appURL} target="_blank" title={project.appAnchorTagTitle} rel="noopener noreferrer">
        <img src={project.image} alt="project-img" />
      </a>

      <br />

      {/* Skills */}
      <h2>Skills:</h2>
      <p className="top-margin">{project.skills}</p>

      {/* Overview */}
      <h2>Overview:</h2>
      <p className="top-margin">{project.projectDescription}</p>

      {/* GitHub */}
      <h2>Github:</h2>
      <a href={project.gitHubUrl} target="_blank" title={project.anchorTagTitle} rel="noopener noreferrer">       
        <GitHubIcon /> 
      </a>
    </div>
  );
}

export default ProjectDisplay;