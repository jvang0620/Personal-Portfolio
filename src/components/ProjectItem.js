import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ProjectItem.css";

function ProjectItem({ image, name, id, miniDescription }) {
  const navigate = useNavigate();
  return (
    <div
      className="projectItem"
      onClick={() => {
        navigate("/project/" + id);
      }}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1> {name} </h1>
      <p className="font-small text-center"> {miniDescription} </p>
    </div>
  );
}

export default ProjectItem;