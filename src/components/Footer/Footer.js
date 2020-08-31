import React from 'react';

const MyNavBar = (props) => {
  return (
    <div className="m-3">
      <h1>Contact Me:</h1>
      <a href="mailto:genemcnew3@gmail.com"><i className="fas fa-envelope-open-text fa-3x fa-fw"></i></a>
      <a href="https://github.com/spotmonk/"><i className="fab fa-github-alt fa-3x fa-fw"></i></a>
      <a href="https://www.linkedin.com/in/genemcnew/"><i className="fab fa-linkedin fa-3x fa-fw"></i></a>
    </div>
  );
};

export default MyNavBar;
