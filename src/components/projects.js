import React from "react";
import HomeCarousel from "../components/carousel";

const Projects = () => {
  const images1 = [
    {
      image: "./project1-1.png",
    },
    {
      image: "./project1-2.png",
    },
    {
      image: "./project1-3.png",
    },
    {
      image: "./project1-4.png",
    },
  ];

  const images2 = [
    {
      image: "./project2-home.png",
    },
    {
      image: "./project2-signup.png",
    },
    {
      image: "./project2-login.png",
    },
    {
      image: "./project2-topics.png",
    },
    {
      image: "./project2-topicpage.png",
    },
    {
      image: "./project2-userpage.png",
    },
    {
      image: "./project2-createpage.png",
    },
    {
      image: "./project2-showpage.png",
    },
  ];

  const projects = [
    {
      title: "Matching Game",
      technologies: "HTML, CSS, JavaScript, JQuery",
      description:
        "A matching game where the user matches images based on the theme they chose in the menu. To access the champions list an API from Riot Games was called by using jQuery and AJAX.",
      image: <HomeCarousel images={images1} />,
      github: "http://github.com/dezerey11/SEIR-Project1",
      deployedApp: "http://dezerey11.github.io/SEIR-Project1",
    },
    {
      title: "Inspiration App",
      technologies:
        "HTML, CSS, JavaScript, JQuery, Node.js, Express, MongoDB, Mongoose, Bulma",
      description:
        "An application for people to post images to find inspiration in various topics. The goal of this project was to create a similar application to Instagram using Express in the backend and a EJS templating engine. MongoDB was used for the database to store the user information. User authentication was added to allow the user to have full CRUD data operations for their posts. The front end was styled with CSS frameworks such as Bootstrap and Bulma.",
      image: <HomeCarousel images={images2} />,
      github: "https://github.com/dezerey11/ejs-express-project2",
      deployedApp: "https://seir-project2-inspirationapp.herokuapp.com/",
    },
  ];

  return (
    <div className="projects-container">
      <h1 className="header">MY PROJECTS</h1>
      {projects.map((project) => {
        const { title, technologies, description, image, github, deployedApp } =
          project;

        return (
          <div className="project-card">
            <h2>
              <strong>{title}</strong>
            </h2>
            <h4>
              <strong>Technologies: </strong>
              {technologies}
            </h4>
            <h4>{description}</h4>
            <br />
            <a target="_blank" href={github} className="links-to-app">
              GitHub
            </a>
            <br />
            <a target="_blank" href={deployedApp} className="links-to-app">
              Deployment
            </a>
            <br />
            <div>{image}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
