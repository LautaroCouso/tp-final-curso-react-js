import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <Navbar bg="light" expand="lg">
      <Nav.Link as={Link} to="/">
        <Navbar.Brand>React Final Project</Navbar.Brand>
      </Nav.Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/add">
            Agregar consolas
          </Nav.Link>
          <Nav.Link as={Link} to="/new">
            Ver consolas nuevas
          </Nav.Link>
          <Nav.Link as={Link} to="/sign-up">
            Sing Up
          </Nav.Link>
          <Nav.Link as={Link} to="/sign-in">
            Sing In
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
