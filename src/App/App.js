import React from 'react';
import './App.scss';

import About from '../components/About/About';
import ProjectContainer from '../components/ProjectContainer/ProjectContainer';
import Footer from '../components/Footer/Footer';
import ProjectList from '../components/ProjectList/ProjectList';
import ProjectTechs from '../components/ProjectTechs/ProjectTechs';

const App = () => {
  return (
    <div className="App">
      <div id="header" className="m-4 mb-2">
      <div className="float-left">,Carousel </div>
      <div className="float-right"><About /></div>
      </div>
      <div id="sectionContainer" className="container d-flex flex-nowrap row col-10 p-0 offset-1 justify-content center">
     <div id="left-section" className="col-5 mr-5"><ProjectList /><ProjectTechs /></div><div id="left-triangle"></div>
      <div id="right-section" className="col-5 ml-5" ><ProjectContainer /></div><div id="right-triangle"></div>
      </div>
      <div><Footer /></div>
    </div>
  );
};

export default App;
