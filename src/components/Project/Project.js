import React from 'react';
import './Project.scss';

const Project = (props) => {
  return (
  <h2 onClick={() => props.setCurrentProject(props.project)}><img className="icon" src={props.project.icon} alt={`${props.project.name} icon`} /> {props.project.name}</h2>
  );
};

export default Project;
