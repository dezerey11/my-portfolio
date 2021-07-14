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

  const images3 = [
    {
      image: "./screenshots-proj4/bottomPage.png",
    },
    {
      image: "./screenshots-proj4/homePage.png",
    },
    {
      image: "./screenshots-proj4/loginPage.png",
    },
    {
      image: "./screenshots-proj4/showPage.png",
    },
    {
      image: "./screenshots-proj4/topPage.png",
    },
  ];

  const images4 = [
    {
      image: "./screenshots-capstone/Login-WS.png",
    },
    {
      image: "./screenshots-capstone/SignIn-WS.png",
    },
    {
      image: "./screenshots-capstone/AppInUse-WS.png",
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
    {
      title: "Batman Collector's Markeplace",
      technologies:
        "HTML, CSS, JavaScript, Ruby on Rails, React, Postgres, Postman",
      description:
        "The backend of this application was coded using Ruby on Rails and served a JSON API with CRUD operations to the frontend. The user and post models were set up with a one-to-many relationship. User authentication was set up using JSON Web Tokens (JWTs). React was used for the frontend.",
      image: <HomeCarousel images={images3} />,
      github: "https://github.com/dezerey11/project4-frontend",
      githubBackend: "https://github.com/dezerey11/project4-backend",
      deployedApp: "https://dezerey11.github.io/project4-frontend/",
    },
    {
      title: "Chatty Stop",
      technologies:
        "HTML, CSS, JavaScript, Express, MongoDB, Mongoose, Socket.IO, React ",
      description:
        "For this project MongoDB was used to store the user's information. Then JSON Web Tokens(JWTs) were used to authenticate the user and allow them to send messages. Socket.IO was used to create a websocket that will allow the messages to be sent instantly to other logged in users without having to run a refresh. React was used for the frontend.",
      image: <HomeCarousel images={images4} />,
      github: "https://github.com/dezerey11/capstone-frontend",
      githubBackend: "https://github.com/dezerey11/capstone-project",
      deployedApp: "https://de-capstone-project.netlify.app/",
    },
  ];

  return (
    <div className="projects-container">
      <h1 className="header">MY PROJECTS</h1>
      {projects.map((project) => {
        const {
          title,
          technologies,
          description,
          image,
          github,
          githubBackend,
          deployedApp,
        } = project;

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

            <br />
            <a target="_blank" href={githubBackend} className="links-to-app">
              GitHub (Backend)
            </a>
            <br />

            <a target="_blank" href={deployedApp} className="links-to-app">
              Deployment
            </a>
            <br />
            <div>{image}</div>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
