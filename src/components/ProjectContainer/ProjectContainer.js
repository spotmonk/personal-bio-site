import React from 'react';
import './ProjectContainer.scss';

const ProjectContainer = (props) => {
  const { project } = props;
  return (
    <div id="projectContainer flex-column flex-nowrap">
      <div className="m-1"><h5>{project.description}</h5></div>
      <hr />
      <div><img className="projectGif" src={project.gifUrl} alt={`${project.name} Gif`} /></div>
      <hr />
      <div><a href={project.githubUrl}><i className="fab fa-github fa-2x fa-fw"></i></a><a href={project.deployedSite}> <i className="fas fa-external-link-alt fa-2x fa-fw"></i></a></div>
    </div>
  );
};

export default ProjectContainer;
