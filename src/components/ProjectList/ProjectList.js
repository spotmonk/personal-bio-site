import React from 'react';
import Project from '../Project/Project';

const ProjectList = (props) => {
  // useEffect(() => {

  // });

  const projectList = props.projects.map((project) => <Project project={project} key={project.id} setCurrentProject={props.setCurrentProject}/>);

  return (
    <div id="projectList">
      {projectList}
    </div>
  );
};

export default ProjectList;
