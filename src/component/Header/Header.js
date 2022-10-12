import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand className="fw-bold text-primary" href="/home">Quiz Hero</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link className="fw-semibold text-decoration-none text-dark me-3" to="/home">Home</Link>
            <Link className="fw-semibold text-decoration-none text-dark me-3" to="/statistics">Statistics</Link>
            <Link className="fw-semibold text-decoration-none text-dark me-3" to="/blog">Blog</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
