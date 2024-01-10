import React from "react";
import { Link } from "react-router-dom";


const ProjectTile = ({ project: { name, description, id } }) => {
  const projectID = id;
  return (
    <div className="row">
      <div className="project small-9 small-centered columns">
        <Link to={`/projects/${projectID}`} className="link-to-project">{name}</Link>
        <h3>Description: {description} </h3>
      </div>
    </div>
  )
}

export default ProjectTile
