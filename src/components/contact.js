import React from "react";
import Card from "react-bootstrap/Card";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="header">CONTACT ME AT:</h1>

      <Card border="dark" className="contact-card" style={{ width: "60%" }}>
        <Card.Header as="h5">Email</Card.Header>
        <Card.Body>
          <Card.Title>dezerey11@gmail.com</Card.Title>
        </Card.Body>
      </Card>
      <br />
      <br />
      <Card border="dark" className="contact-card" style={{ width: "60%" }}>
        <Card.Header as="h5">GitHub</Card.Header>
        <Card.Body>
          <Card.Title>
            <a href="https://github.com/dezerey11" target="_blank">
              https://github.com/dezerey11
            </a>
          </Card.Title>
        </Card.Body>
      </Card>
      <br />
      <br />
      <Card border="dark" className="contact-card" style={{ width: "60%" }}>
        <Card.Header as="h5">LinkedIn</Card.Header>
        <Card.Body>
          <Card.Title>
            <a
              href=" https://www.linkedin.com/in/dezerey-esca%C3%B1uelas-a6b9bb210/"
              target="_blank"
            >
              https://www.linkedin.com/in/dezerey-esca%C3%B1uelas-a6b9bb210/
            </a>
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Contact;
