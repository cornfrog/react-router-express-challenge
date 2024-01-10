import React from "react"

const ProjectShowTile = ({ project: { name, description } }) => {
  return (
    <div className="project-show">
      <h2 className="text-center project-title">{name}</h2>
      <p className="text-center project-desc">Description: {description}</p>
    </div>
  )
}

export default ProjectShowTile
