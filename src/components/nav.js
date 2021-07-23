import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="/" className="nav-link">
            <strong>Dezerey's Portfolio</strong>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/" className="nav-link">
              HOME
            </Nav.Link>
            <Nav.Link href="/about" className="nav-link">
              ABOUT
            </Nav.Link>
            <Nav.Link href="/contact" className="nav-link">
              CONTACT
            </Nav.Link>
            <Nav.Link href="/skills" className="nav-link">
              SKILLS
            </Nav.Link>
            <Nav.Link href="/projects" className="nav-link">
              PROJECTS
            </Nav.Link>
            <Nav.Link
              href="https://docs.google.com/document/d/1xD9mGOUExlF2pbzC4PXmNfiYZtGnYhSeBaJAcgAKFTU/edit"
              className="nav-link"
            >
              RESUME
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
