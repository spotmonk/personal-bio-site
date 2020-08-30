import React from 'react';
import './ProjectContainer.scss';

const ProjectContainer = (props) => {
  return (
    <div id="projectContainer flex-column flex-nowrap">
      <div><h3>{props.project.description}</h3></div>
      <hr />
      <div><img className="projectGif" src={props.project.imgUrl} alt={`${props.project.name} Gif`} /></div>
      <hr />
      <div><a href={props.project.deployedSite}> <i className="fas fa-external-link-alt fa-2x"></i></a> <a href={props.project.githubUrl}><i className="fab fa-github-alt fa-3x"></i></a></div>
    </div>
  );
};

export default ProjectContainer;
