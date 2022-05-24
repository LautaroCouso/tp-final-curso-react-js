import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default function Menu() {
  return (
    <Navbar bg="light" expand="lg">
      <Nav.Link to="/">
        <Navbar.Brand>React Final Project</Navbar.Brand>
      </Nav.Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/add">
            <Nav.Link>Nuevas consolas</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/new">
            <Nav.Link>Ver consolas nuevas</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/sign-up">
            <Nav.Link>Sing Up</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/sign-in">
            <Nav.Link>Sing In</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
