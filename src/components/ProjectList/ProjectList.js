import React from 'react';
import Project from '../Project/Project';

const ProjectList = (props) => {
  const projectList = props.projects.map((project) => <Project project={project} key={project.id} setCurrentProject={props.setCurrentProject}/>);

  return (
    <div id="projectList" className="m-3">
      {projectList}
    </div>
  );
};

export default ProjectList;
