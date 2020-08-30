import React, { useState, useEffect } from 'react';
import './App.scss';

import About from '../components/About/About';
import ProjectContainer from '../components/ProjectContainer/ProjectContainer';
import Footer from '../components/Footer/Footer';
import ProjectList from '../components/ProjectList/ProjectList';
import ProjectTechs from '../components/ProjectTechs/ProjectTechs';
import projectData from '../helpers/data/projectsData';

const App = () => {
  const [projects, setProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState({});

  const getprojects = () => {
    projectData.getProjects()
      .then((response) => {
        setProjects(response);
        setCurrentProject(response[0]);
      })
      .catch((err) => console.error('unable to get projects', err));
  };

  useEffect(() => {
    getprojects();
  }, []);

  return (
    <div className="App">
      <div id="header" className="m-4 mb-2 d-flex">
      <div className="float-left">,Carousel </div>
      <div className="float-right w-50 m-2"><About /></div>
      </div>
      <div id="sectionContainer" className="container d-flex flex-nowrap row col-10 p-0 offset-1 justify-content center">
     <div id="left-section" className="col-5 mr-5"><ProjectList projects={projects} setCurrentProject={setCurrentProject} /><hr /><ProjectTechs project={currentProject} /></div>
      <div id="right-section" className="col-5 ml-5" ><ProjectContainer project={currentProject}/></div>
      </div>
      <div><Footer /></div>
    </div>
  );
};

export default App;
