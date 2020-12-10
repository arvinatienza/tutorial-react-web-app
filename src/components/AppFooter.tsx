import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';

export function AppFooter() {
  return (
    <footer className="App-footer">
      <Navbar bg="light" fixed="bottom" expand="lg">
        <Link to="/" className="mr-auto">Copyright @2020 by Test</Link>
      </Navbar>
    </footer>
  );
}
