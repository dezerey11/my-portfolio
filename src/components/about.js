import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <h1 className="header">ABOUT ME</h1>
      <img src="./profile.jpg" className="about-img" />
      <p className="about-me">
        <strong>
          Hello! I am a software engineer with a bachelor's degree in biological
          science. Having worked in research labs I am familiar with trying to
          find answers to unknown questions and experimenting to learn new
          things about various topics such as an animal's adaptability to their
          environment or using stem cells to further study the brain. I am
          generally a curious person. My biggest motivation is knowing that
          there is ALWAYS something new to learn which is what pushes me to keep
          learning about science and technology. My interest in software
          engineering started while I was completing my undergrad. I wanted to
          learn to code so I started taking online lessons for HTML, CSS, and
          JavaScript. Coding opened a new interest for me and I wanted to keep
          pursuing this as a career, especially in web development. Projects
          that I have worked on have included full-stack capabilities. Click{" "}
          <Link to="/projects">here </Link>to see my projects.
        </strong>
      </p>
    </div>
  );
};

export default About;
