import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProjectList from './ProjectList';
import ProjectDetail from './ProjectDetail';

function ProjectIndex() {
  return (
    <Router>
      <Route path="/projects/:id" component={ProjectDetail} />
      <Route path="/projects/" exact component={ProjectList} />
    </Router>
  );
}

export default ProjectIndex;


