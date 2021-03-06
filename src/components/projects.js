import React from "react";
import HomeCarousel from "../components/carousel";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Projects = () => {
  const images1 = [
    {
      image: "./screenshots-proj1.1/Screenshot -1.png",
    },
    {
      image: "./screenshots-proj1.1/Screenshot -2.png",
    },
    {
      image: "./screenshots-proj1.1/Screenshot -3.png",
    },
    {
      image: "./screenshots-proj1.1/Screenshot -4.png",
    },
  ];

  const images2 = [
    {
      image: "./screenshots-proj2/project2-home.png",
    },
    {
      image: "./screenshots-proj2/project2-signup.png",
    },
    {
      image: "./screenshots-proj2/project2-login.png",
    },
    {
      image: "./screenshots-proj2/project2-topics.png",
    },
    {
      image: "./screenshots-proj2/project2-topicpage.png",
    },
    {
      image: "./screenshots-proj2/project2-userpage.png",
    },
    {
      image: "./screenshots-proj2/project2-createpage.png",
    },
    {
      image: "./screenshots-proj2/project2-showpage.png",
    },
  ];

  const images3 = [
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
    {
      image: "./screenshots-proj4/bottomPage.png",
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
      title: "Chatty Stop",
      technologies:
        "HTML, CSS, JavaScript, Express, MongoDB, Mongoose, Socket.IO, React ",
      description:
        "A simple chat app to message other logged in users. For this project MongoDB was used to store the user's information. Then JSON Web Tokens(JWTs) were used to authenticate the user and allow them to send messages. Socket.IO was used to create a websocket that will allow the messages to be sent instantly to other logged in users without having to run a refresh. React was used for the frontend. ",
      image: <HomeCarousel images={images4} />,
      links: [
        {
          github: "https://github.com/dezerey11/capstone-frontend",
        },
        { deployedApp: "https://de-capstone-project.netlify.app/" },
        {
          githubBackend: "https://github.com/dezerey11/capstone-project",
        },
      ],
    },
    {
      title: "Matching Game",
      technologies: "HTML, CSS, JavaScript, JQuery",
      description:
        "A matching game where the user matches images based on the theme they chose in the menu. To access the champions list an API from Riot Games was called by using jQuery and AJAX.",
      image: <HomeCarousel images={images1} />,
      links: [
        {
          github: "http://github.com/dezerey11/SEIR-Project1",
        },
        {
          deployedApp: "http://dezerey11.github.io/SEIR-Project1",
        },
      ],
    },
    {
      title: "Inspiration App",
      technologies:
        "HTML, CSS, JavaScript, JQuery, Node.js, Express, MongoDB, Mongoose, Bulma",
      description:
        "An application for people to post images to find inspiration in various topics. The goal of this project was to create a similar application to Instagram using Express in the backend and a EJS templating engine. MongoDB was used for the database to store the user information. User authentication was added to allow the user to have full CRUD data operations for their posts. The front end was styled with CSS frameworks such as Bootstrap and Bulma.",
      image: <HomeCarousel images={images2} />,
      links: [
        {
          github: "https://github.com/dezerey11/ejs-express-project2",
        },
        {
          deployedApp: "https://seir-project2-inspirationapp.herokuapp.com/",
        },
      ],
    },
    {
      title: "Batman Collector's Markeplace",
      technologies: "HTML, CSS, JavaScript, Ruby on Rails, React, PostgreSQL",
      description:
        "An app for a collector of Batman items to post their items for sale. The backend of this application was coded using Ruby on Rails and served a JSON API with CRUD operations to the frontend. The user and post models were set up with a one-to-many relationship. User authentication was set up using JSON Web Tokens (JWTs). React was used for the frontend.",
      image: <HomeCarousel images={images3} />,
      links: [
        {
          github: "https://github.com/dezerey11/project4-frontend",
        },
        {
          deployedApp: "https://dezerey11.github.io/project4-frontend/",
        },
        { githubBackend: "https://github.com/dezerey11/project4-backend" },
      ],
    },
  ];

  return (
    <div className="projects-container">
      <h1 className="header">MY PROJECTS</h1>
      {projects.map((project, i) => {
        const { title, technologies, description, image, links } = project;

        {
          if (links.length === 2) {
            return (
              <div className="project-card">
                <Card border="dark" style={{ width: "70%" }}>
                  <Card.Header className="project-font">
                    <h2>{title}</h2>
                  </Card.Header>
                  <br />
                  <div>{image}</div>
                  <Card.Body>
                    <Card.Text>
                      <p className="technologies">
                        {/* <strong>Technologies: </strong> */}
                        {technologies}
                      </p>
                      <p>{description}</p>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="project-font">
                    <inline>
                      <strong>Links to:</strong>
                      <Button variant="info" className="links-to-app-button">
                        <a
                          target="_blank"
                          href={links[1].deployedApp}
                          className="links-to-app"
                        >
                          Deployed Site
                        </a>
                      </Button>
                      <Button variant="dark" className="links-to-app-button">
                        <a
                          target="_blank"
                          href={links[0].github}
                          className="links-to-app"
                        >
                          Github
                        </a>
                      </Button>
                    </inline>
                  </Card.Footer>
                </Card>
              </div>
            );
          }
          return (
            <div className="project-card">
              <Card border="dark" style={{ width: "70%" }}>
                <Card.Header className="project-font">
                  <h2>{title}</h2>
                </Card.Header>
                <br />
                <div>{image}</div>
                <Card.Body>
                  <Card.Text>
                    <p className="technologies">
                      {/* <strong>Technologies: </strong> */}
                      {technologies}
                    </p>
                    <p>{description}</p>
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="project-font">
                  <strong>Links to:</strong>
                  <Button variant="info" className="links-to-app-button">
                    <a
                      target="_blank"
                      href={links[1].deployedApp}
                      className="links-to-app"
                    >
                      Deployed Site
                    </a>
                  </Button>
                  <Button variant="dark" className="links-to-app-button">
                    <a
                      target="_blank"
                      href={links[0].github}
                      className="links-to-app"
                    >
                      Github
                    </a>
                  </Button>
                  <Button variant="secondary" className="links-to-app-button">
                    <a
                      target="_blank"
                      href={links[2].githubBackend}
                      className="links-to-app"
                    >
                      Github (Backend)
                    </a>
                  </Button>
                </Card.Footer>
              </Card>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Projects;
