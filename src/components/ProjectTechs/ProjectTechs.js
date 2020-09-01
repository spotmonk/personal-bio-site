import React from 'react';

import './ProjectTechs.scss';

const determineTech = (tech) => {
  switch (tech.trim()) {
    case 'HTML':
      return <li>HTML <i className="fab fa-html5"></i> </li>;
    case 'Javascript':
      return <li>Javascript <i className="fab fa-js-square"></i> </li>;
    case 'CSS':
      return <li>CSS <i className="fab fa-css3-alt"></i> </li>;
    case 'SASS':
      return <li>SASS <i className="fab fa-sass"></i> </li>;
    case 'Bootstrap':
      return <li>Bootstrap <i className="fab fa-bootstrap"></i> </li>;
    case 'React':
      return <li>Bootstrap <i className="fab fa-react"></i> </li>;
    default:
      return <li></li>;
  }
};

const ProjectTech = (props) => {
  let techs = [];
  if (props.project.techStack) {
    techs = props.project.techStack.split(',');
  }
  const techJSX = [];
  techs.forEach((tech) => {
    techJSX.push(determineTech(tech));
  });

  return (
    <div id="projectTech">
      <h2>Tech Used:</h2>
      <ul>
        {techJSX}
      </ul>
    </div>
  );
};

export default ProjectTech;
