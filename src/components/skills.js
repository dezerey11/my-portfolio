import React from "react";
import { Card, Row, Col } from "react-bootstrap";

const Skills = () => {
  const skills = [
    "./skills-imgs/HTML5_logo.svg.png",
    "./skills-imgs/CSS3_logo_and_wordmark.svg.png",
    "./skills-imgs/JavaScript_logo_2.svg.png",
    "./skills-imgs/Node.js_logo.svg.png",
    "./skills-imgs/ExpressJS-logo.png",
    "./skills-imgs/MongoDB_Logo.png",
    "./skills-imgs/react-js-blog-header.png",
  ];
  return (
    <div className="skills-container">
      <h1 className="header">SKILLS</h1>
      {skills.map((skill) => (
        <img src={skill} alt="skill" className="skill-img" />
      ))}
    </div>
  );
};

export default Skills;
