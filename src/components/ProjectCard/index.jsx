import React from 'react';

const ProjectCard = ({ project }) => {
    return (
        <div className="card md-3">
            <img src={project.imageURL} className="card-img-top mx-auto d-block mt-3" alt={project.title} />
            <div className="card-body text-center">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
            </div>
            <div className="card-footer text-center">
                <a href={project.liveDemoLink} className="btn btn-primary mx-2" target="_blank" rel="noopener noreferrer">
                    Live Demo
                </a>
                <a href={project.githubLink} className="btn btn-secondary mx-2" target="_blank" rel="noopener noreferrer">
                    GitHub
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
