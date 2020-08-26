import React from 'react';
import './App.scss';

import MyNavBar from '../components/MyNavBar/MyNavBar';
import About from '../components/About/About';
import ProjectContainer from '../components/ProjectContainer/ProjectContainer';
import Footer from '../components/Footer/Footer';

const App = () => {
  return (
    <div className="App">
      <div id="header" className="m-4 mb-2">
      <MyNavBar />
      <About />
      </div>
      <div className="container d-flex row col-12 justify-content-center">
     <div id="left-section" className="col-5 ml-4 mr-2"><ProjectContainer /></div>
      
      <div id="right-section" className="col-5 mr-4 ml-2" ><ProjectContainer /></div>
      </div>
      <div><Footer /></div>
    </div>
  );
};

export default App;
