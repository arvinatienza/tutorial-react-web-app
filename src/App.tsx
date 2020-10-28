import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { ApolloProvider } from '@apollo/client';
//import { Provider as ReactProvider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MainNavigation from './components/MainNavigation';
import Home from './components/Home';
import ProjectIndex from './components/projects/ProjectIndex';

import { ApolloClient, InMemoryCache } from '@apollo/client';
const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (

    <ApolloProvider client={client}>
    <Router>

      <div className="App">
        <header className="App-header">
          <MainNavigation></MainNavigation>
          header here
        </header>

        <div className="App-body">
          <Route path="/" exact component={Home} />
          <Route path="/projects" component={ProjectIndex} />
        </div>

        <footer className="App-footer">
          footer here
        </footer>
      </div>
    </Router>

    </ApolloProvider>
  );
}

export default App;
