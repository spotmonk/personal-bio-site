import React from 'react';
import './About.scss';

const About = (props) => {
  return (
    <div id="" className="text-left">
       <img id="headshot" className="float-right" src='https://i.ibb.co/wKFkf8q/758596895.png' alt="Geno McNew" />
      <span id="bioGreeting">Hello! I'm Geno McNew</span>
      <br />
      <span id="bioBlurb">
        I am a life-long learner who enjoys making things that solve problems for people and organizations.
        I am never satisfied with "this is how we do it, and how we've been doing it for years."
        I have always tried my best to improve on things, and this has continued into my experience in software development.
        I make scripts and programs to improve the quality of my work life and I'm good at finding things that need to be fixed.
        Let Me learn how to work with you and your team
      </span>
    </div>
  );
};

export default About;
