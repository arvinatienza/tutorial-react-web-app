import React from 'react';
//import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//import MainNavigation from './components/MainNavigation';
import { AppHeader } from './components/AppHeader';
import { AppFooter } from './components/AppFooter';
import Home from './components/Home';
import ProjectIndex from './components/projects/ProjectIndex';


function App() {
  return (

    <Router>
      <AppHeader />

      <div className="App-body">
        <div className="container-fluid">
          <div className="row">

            <div className="col-lg-2">
              SideNav
            </div>

              <Route path="/" exact component={Home} />
              <Route path="/projects" component={ProjectIndex} />

          </div>
        </div>
      </div>


      <AppFooter />
    </Router>


  );
}

export default App;
