import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignIn from '../../pages/sign-in/SignIn';
import Home from '../../pages/home/Home';
import SignUp from '../../pages/sign-up/signUp';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import DetailsPage from '../../pages/Details/DetailsPage';
import AddNewProduct from '../../pages/new-product/AddNewProduct';
import NewProduct from '../../pages/new-product/NewProduct';

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function PublicRoutes() {
  return (
    <Router>
      <div>
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
              <LinkContainer to="/list">
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/add" element={<AddNewProduct />} />
          <Route path="/list" element={<NewProduct />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/details/:id" element={<DetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}
