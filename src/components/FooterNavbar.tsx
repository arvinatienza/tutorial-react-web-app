import React from 'react';

//import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';

import { Link } from 'react-router-dom';

function FooterNavbar() {
  return (
    <Navbar bg="light" fixed="bottom" expand="lg">
      <Link to="/" className="mr-auto">Copyright @2020 by Test</Link>
    </Navbar>
  );
}

export default FooterNavbar;


