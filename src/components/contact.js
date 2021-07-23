import React from "react";
import { Button, Card, CardGroup } from "react-bootstrap";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="header">CONTACT ME AT:</h1>
      <CardGroup className="card-group">
        <Card
          border="secondary"
          style={{ width: "30%" }}
          className="contact-card"
        >
          <img src="./contacts/gmail2.png" className="img-contact-logo" />
          <br />
          <Button variant="primary" size="lg">
            <a href="mailto:dezerey11@gmail.com" className="links-to-contact">
              Email
            </a>
          </Button>

          <br />
        </Card>

        <Card
          border="secondary"
          style={{ width: "30%" }}
          className="contact-card"
        >
          <img src="./contacts/github.png" className="img-contact-logo" />
          <br />
          <Button variant="primary" size="lg">
            <a
              target="_blank"
              href="https://github.com/dezerey11"
              className="links-to-contact"
            >
              Github
            </a>
          </Button>
          <br />
        </Card>

        <Card
          border="secondary"
          style={{ width: "30%" }}
          className="contact-card"
        >
          <img src="./contacts/linkedin.png" className="img-contact-logo" />
          <br />
          <Button variant="primary" size="lg">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/dezerey-esca%C3%B1uelas-a6b9bb210/"
              className="links-to-contact"
            >
              LinkedIn
            </a>
          </Button>
          <br />
        </Card>
      </CardGroup>
    </div>
  );
};

export default Contact;
