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
      <a href={project.appURL} target="_blank" title={project.appAnchorTagTitle} rel="noopener noreferrer">
        <img src={project.image} alt="project-img" />
      </a>
      <p>
        <b>Skills:</b> <br /> {
        project.skills}
      </p>
      <p class="">
        <b>Overview:</b> <br /> 
        {project.projectDescription}
      </p>
      <a href={project.gitHubUrl} target="_blank" title={project.anchorTagTitle} rel="noopener noreferrer">
      <b>Github:</b> <br /> 
      <GitHubIcon />
      </a>
    </div>
  );
}

export default ProjectDisplay;