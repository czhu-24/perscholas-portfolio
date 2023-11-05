import React from 'react'
import ProjectCard from '../ProjectCard'

const Projects = () => {

  const project1 = {
    imageURL: "https://tinyurl.com/52t45fx5",
    title: "Drawing App Project",
    description: "description here",
    liveDemoLink: "https://czhu-24.github.io/perscholas-week5-pixelart",
    githubLink: "https://github.com/czhu-24/perscholas-week5-pixelart"
  };

  // TODO, fill in with mod 2 & mod 3 project info
  return (
    <div id="projects">
      <h2 className="text-center">Projects</h2>
      <ProjectCard project={project1} />
      <ProjectCard project={project1} />
      <ProjectCard project={project1} />
    </div>
  )
}

export default Projects