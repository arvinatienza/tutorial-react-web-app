import React from 'react';

//import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';

import { Link } from 'react-router-dom';

function FooterNavbar() {
  return (
    <Navbar bg="light" fixed="bottom" expand="lg">
      <Navbar.Brand className="col-xs-1 col-sm-1 col-md-3 col-lg-2">
        <Link to="/">App</Link>
      </Navbar.Brand>
      <div className="pull-right">
        Copyright @2020 by Test
      </div>
    </Navbar>
  );
}

export default FooterNavbar;


