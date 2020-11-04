import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Link } from 'react-router-dom';

function MainNavigation() {
  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand className="col-xs-auto col-lg-2">
        <Link to="/">App</Link>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="main-navbar-nav" className="mr-auto col-xs-1" />
      <Navbar.Collapse id="main-navbar-nav" className="col-md-auto">
        <Nav className="mr-auto">
          <Nav.Link><Link to="/projects">Projects</Link></Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Resources" id="main-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Departments" id="main-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>

    </Navbar>
  );
}

export default MainNavigation;

