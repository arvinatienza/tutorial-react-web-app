import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MainNavigation from './components/MainNavigation';
import FooterNavbar from './components/FooterNavbar';
import Home from './components/Home';
import ProjectIndex from './components/projects/ProjectIndex';


function App() {
  return (

    <Router>

      <div className="App">
        <header className="App-header">
          <MainNavigation></MainNavigation>
        </header>

        <div className="App-body">
          <Route path="/" exact component={Home} />
          <Route path="/projects" component={ProjectIndex} />
        </div>

        <footer className="App-footer">
          <FooterNavbar></FooterNavbar>
        </footer>
      </div>
    </Router>

  );
}

export default App;
