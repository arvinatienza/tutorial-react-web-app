import React from 'react';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

import { Link } from 'react-router-dom';

export function AppHeader() {
  return (
    <header className="App-header">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Contact" id="contact-nav-dropdown">
              <NavDropdown.Item as={Link} to="/organizations">Organizations</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/clients">Clients</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/employees">Employees</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
            <NavDropdown title="Regions" id="resources-nav-dropdown">
              <NavDropdown.Item as={Link} to="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Resources" id="resources-nav-dropdown">
              <NavDropdown.Item as={Link} to="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

