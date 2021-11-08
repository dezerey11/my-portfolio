import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="/" className="nav-link project-font">
            <strong>Dezerey's Portfolio</strong>
          </Navbar.Brand>
          {/* {if (window.matchMedia("(min-width: 400px)".matches) {<h1>hello</h1>}
          else {<h1>bye</h1>}} */}
          <Nav className="me-auto" id="nav">
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
              href="https://docs.google.com/document/d/1O2_DsLZNaDn57ty0AFykXN0uXUU5K2ZmfndMA_0lcdI/edit"
              className="nav-link"
            >
              RESUME
            </Nav.Link>
          </Nav>
          <Nav id="dropdown-nav" className="dropleft">
            <NavDropdown title="" id="basic-nav-dropdown">
              <NavDropdown.Item href="/">Home</NavDropdown.Item>
              <NavDropdown.Item href="/about">About</NavDropdown.Item>
              <NavDropdown.Item href="/skills">Skills</NavDropdown.Item>
              <NavDropdown.Item href="/projects">Projects</NavDropdown.Item>
              <NavDropdown.Item href="https://docs.google.com/document/d/1xD9mGOUExlF2pbzC4PXmNfiYZtGnYhSeBaJAcgAKFTU/edit">
                Resume
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
