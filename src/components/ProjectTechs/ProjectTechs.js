import React from 'react';

const ProjectTech = (props) => {
  return (
    <div id="projectTech">
    {props.project.techStack}
    </div>
  );
};

export default ProjectTech;
