import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { ApolloProvider } from '@apollo/client';
import MainNavigation from './components/MainNavigation';

import { ApolloClient, InMemoryCache } from '@apollo/client';
const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
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
          test
        </div>

        <footer className="App-footer">
          footer here
        </footer>
      </div>

    </ApolloProvider>
  );
}

export default App;
