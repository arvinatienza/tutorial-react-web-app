import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { ApolloProvider } from '@apollo/client';
import MainNavigation from './components/MainNavigation';
import ProjectList from './components/ProjectList';

import { ApolloClient, InMemoryCache } from '@apollo/client';
const client = new ApolloClient({
  uri: 'http://100.115.92.199:8000/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>

      <div className="App">
        <header className="App-header">
          <MainNavigation></MainNavigation>
          header here
        </header>

        <div className="App-body">
          <ProjectList></ProjectList>
        </div>

        <footer className="App-footer">
          footer here
        </footer>
      </div>

    </ApolloProvider>
  );
}

export default App;
